import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizQuestion } from './entities/question.entity';
import { QuizSession } from './entities/quiz-session.entity';
import { RecommendationService } from '../ai/recommendation.service';

@Injectable()
export class QuizService implements OnModuleInit {
  constructor(
    @InjectRepository(QuizQuestion)
    private readonly questionRepository: Repository<QuizQuestion>,

    @InjectRepository(QuizSession)
    private readonly sessionRepository: Repository<QuizSession>,

    private readonly recommendationService: RecommendationService,
  ) {}

  async onModuleInit() {
    try {
      console.log('🔄 Checking if quiz questions need to be seeded...');
      const count = await this.questionRepository.count();
      if (count === 0) {
        console.log('🌱 Seeding 15 personality & aptitude questions...');
        await this.questionRepository.save(this.getSeedQuestions());
        console.log('✅ Quiz questions seeded successfully.');
      } else {
        console.log(`ℹ️ Found ${count} quiz questions, skipping seeding.`);
      }
    } catch (error) {
      console.error('❌ Failed to seed quiz questions:', error);
    }
  }

  async findAllQuestions() {
    return this.questionRepository.find({
      order: { id: 'ASC' },
    });
  }

  async submitQuiz(userId: string | null, answers: { questionId: string; selectedOptionIndex: number }[], favorites: string[] = []) {
    // 1. Fetch questions to score the quiz
    const questions = await this.questionRepository.find();
    
    // Initialize scores
    const scores = {
      engineering_tech: 0,
      medical_science: 0,
      business_economics: 0,
      arts_humanities: 0,
    };

    const formattedAnswers = answers.map((ans) => {
      const q = questions.find((question) => question.id === ans.questionId);
      const selectedOption = q?.options[ans.selectedOptionIndex];
      const score = selectedOption?.score || {};

      // Accumulate scores
      if (score.engineering_tech) scores.engineering_tech += score.engineering_tech;
      if (score.medical_science) scores.medical_science += score.medical_science;
      if (score.business_economics) scores.business_economics += score.business_economics;
      if (score.arts_humanities) scores.arts_humanities += score.arts_humanities;

      return {
        questionId: ans.questionId,
        selectedOptionIndex: ans.selectedOptionIndex,
        score,
      };
    });

    // 2. Generate Top 10 recommendations using recommendation service
    const recommendations = await this.recommendationService.generateRecommendations(scores, favorites);

    // 3. Create and save the quiz session
    const session = this.sessionRepository.create({
      userId,
      answers: formattedAnswers,
      results: {
        scores,
        recommendations,
      },
    });

    await this.sessionRepository.save(session);
    return session;
  }

  private getSeedQuestions(): Partial<QuizQuestion>[] {
    return [
      {
        text: 'When working on a project, which task do you find most satisfying?',
        category: 'Aptitude',
        options: [
          { text: 'Writing code or designing system architecture.', score: { engineering_tech: 5 } },
          { text: 'Diagnosing problems and researching medical/biology cases.', score: { medical_science: 5 } },
          { text: 'Creating financial models and pitching business ideas.', score: { business_economics: 5 } },
          { text: 'Designing visual layouts and writing marketing copy.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'How do you approach a difficult logical puzzle?',
        category: 'Analytical',
        options: [
          { text: 'Solve it systematically using algorithms or math.', score: { engineering_tech: 5 } },
          { text: 'Examine it under different scientific or biological contexts.', score: { medical_science: 3, engineering_tech: 2 } },
          { text: 'Analyze the cost-benefit ratio and market viability.', score: { business_economics: 5 } },
          { text: 'Look for lateral, creative, or visual interpretations.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'Which elective course would you register for out of interest?',
        category: 'Interests',
        options: [
          { text: 'Introduction to Game Development or Robotics.', score: { engineering_tech: 5 } },
          { text: 'Human Nutrition and Physiology.', score: { medical_science: 5 } },
          { text: 'Corporate Strategy and Entrepreneurship.', score: { business_economics: 5 } },
          { text: 'History of Art and Creative Writing.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'Which workspace layout sounds most attractive to you?',
        category: 'Preferences',
        options: [
          { text: 'A desk with multiple monitors, keyboards, and server racks.', score: { engineering_tech: 5 } },
          { text: 'A sterile lab environment with microscopes and test tubes.', score: { medical_science: 5 } },
          { text: 'A professional office overlooking a city skyline.', score: { business_economics: 5 } },
          { text: 'An open studio filled with canvases, tools, and design pads.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'If you had a free weekend to build a personal project, you would:',
        category: 'Motivation',
        options: [
          { text: 'Build a web app or automate a smart home system.', score: { engineering_tech: 5 } },
          { text: 'Volunteer at a community health clinic or study remedies.', score: { medical_science: 5 } },
          { text: 'Draft a pitch deck for a startup or research stock trends.', score: { business_economics: 5 } },
          { text: 'Paint a canvas, record a podcast, or write a short story.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'What kind of impact do you want to leave on the world?',
        category: 'Values',
        options: [
          { text: 'Create technological tools that solve daily problems.', score: { engineering_tech: 5 } },
          { text: 'Cure illnesses, heal patients, or advance healthcare.', score: { medical_science: 5 } },
          { text: 'Build a successful business enterprise that provides jobs.', score: { business_economics: 5 } },
          { text: 'Inspire people through art, storytelling, or literature.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'When reading news articles, which headline captures your eye?',
        category: 'Curiosity',
        options: [
          { text: 'New AI Model Outperforms Humans in Logical Reasoning.', score: { engineering_tech: 5 } },
          { text: 'Breakthrough Vaccine Shows High Efficacy in Trials.', score: { medical_science: 5 } },
          { text: 'Local Startup Reaches Unicorn Status After Series A.', score: { business_economics: 5 } },
          { text: 'Modern Art Exhibition Challenges Cultural Norms.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'How do you handle budget management for a trip?',
        category: 'Aptitude',
        options: [
          { text: 'Create an automated spreadsheet with formulas and charts.', score: { engineering_tech: 4, business_economics: 2 } },
          { text: 'Delegate the planning and focus on health/safety of travelers.', score: { medical_science: 5 } },
          { text: 'Negotiate deals, optimize cost, and allocate resources.', score: { business_economics: 5 } },
          { text: 'Find the most aesthetic, culturally rich locations.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'If you could shadow a professional for a day, who would it be?',
        category: 'Interests',
        options: [
          { text: 'A Chief Software Engineer at a tech firm.', score: { engineering_tech: 5 } },
          { text: 'A Chief Surgeon or Medical Specialist.', score: { medical_science: 5 } },
          { text: 'An Angel Investor or Venture Capitalist.', score: { business_economics: 5 } },
          { text: 'A Creative Director or Lead Architect.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'Which skill do you feel you excel at naturally?',
        category: 'Aptitude',
        options: [
          { text: 'Deconstructing systems and debugging technical flaws.', score: { engineering_tech: 5 } },
          { text: 'Empathizing with others and logical scientific deduction.', score: { medical_science: 5 } },
          { text: 'Persuasion, negotiation, and public speaking.', score: { business_economics: 5 } },
          { text: 'Visual styling, aesthetic coordination, or storytelling.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'In a team, how do you handle conflicts or stress?',
        category: 'Personality',
        options: [
          { text: 'Look at the objective facts and find a logical compromise.', score: { engineering_tech: 4, business_economics: 2 } },
          { text: 'Listen patiently and check on the emotional health of the members.', score: { medical_science: 5 } },
          { text: 'Focus on keeping the team aligned with goals and deliverables.', score: { business_economics: 5 } },
          { text: 'Propose creative ways to reframe the project scope.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'What do you value most in a potential future job?',
        category: 'Values',
        options: [
          { text: 'High intellectual challenge and state-of-the-art tech stacks.', score: { engineering_tech: 5 } },
          { text: 'Daily human connection and helping others heal.', score: { medical_science: 5 } },
          { text: 'Financial reward, leadership opportunities, and growth.', score: { business_economics: 5 } },
          { text: 'Creative freedom and opportunity to express my vision.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'Choose an activity you would find most relaxing:',
        category: 'Preferences',
        options: [
          { text: 'Playing complex video games or configuring Linux servers.', score: { engineering_tech: 5 } },
          { text: 'Reading scientific journals or walking in botanical gardens.', score: { medical_science: 5 } },
          { text: 'Listening to business/startup podcasts or reading finance news.', score: { business_economics: 5 } },
          { text: 'Drawing, visiting a museum, or learning a foreign language.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'What kind of problems do you enjoy solving the most?',
        category: 'Analytical',
        options: [
          { text: 'Technical bugs, math equations, or scripting issues.', score: { engineering_tech: 5 } },
          { text: 'Health issues, wellness advice, or diagnostic tasks.', score: { medical_science: 5 } },
          { text: 'Inefficiency in operations, sales drops, or business deals.', score: { business_economics: 5 } },
          { text: 'Visual styling mismatch, branding, or lack of creative ideas.', score: { arts_humanities: 5 } },
        ],
      },
      {
        text: 'Your favorite high school subject was:',
        category: 'Interests',
        options: [
          { text: 'Mathematics, Physics, or Computer Studies.', score: { engineering_tech: 5 } },
          { text: 'Biology or Chemistry.', score: { medical_science: 5 } },
          { text: 'Economics, Management, or Social Studies.', score: { business_economics: 5 } },
          { text: 'Arts, Literature, History, or Design.', score: { arts_humanities: 5 } },
        ],
      },
    ];
  }
}
