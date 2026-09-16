import { Test, TestingModule } from '@nestjs/testing';
import { AiController } from './ai.controller';
import { ChatbotService } from './chatbot.service';
import { RecommendationService } from './recommendation.service';
import { SalaryPredictorService } from './salary-predictor.service';
import { CollegesService } from '../colleges/colleges.service';
import { ConfigService } from '@nestjs/config';

describe('AiController', () => {
  let controller: AiController;
  let recommendationService: RecommendationService;
  let salaryPredictorService: SalaryPredictorService;
  let chatbotService: ChatbotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiController],
      providers: [
        ChatbotService,
        RecommendationService,
        SalaryPredictorService,
        {
          provide: CollegesService,
          useValue: {
            getAvailableMajors: jest.fn().mockResolvedValue(['Computer Science & Software Engineering']),
            searchKnowledgeBase: jest.fn().mockResolvedValue([
              { id: '1', title: 'جامعة القاهرة', type: 'University', content: 'تفاصيل جامعة القاهرة' }
            ]),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('mock-api-key'),
          },
        },
      ],
    }).compile();

    controller = module.get<AiController>(AiController);
    recommendationService = module.get<RecommendationService>(RecommendationService);
    salaryPredictorService = module.get<SalaryPredictorService>(SalaryPredictorService);
    chatbotService = module.get<ChatbotService>(ChatbotService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should process 15-question quiz analysis', async () => {
    const result = await controller.analyzeQuiz({
      answers: [
        { questionId: 1, answer: 'علمي رياضة' },
        { questionId: 2, answer: 'الرياضيات والتفكير المنطقي' },
      ],
    });

    expect(result).toHaveProperty('recommendations');
    expect(result.recommendations.length).toBeGreaterThan(0);
    expect(result).toHaveProperty('summary');
  });

  it('should predict salary in EGP', async () => {
    const result = await controller.predictSalary({
      major: 'Computer Science',
      experience: 2,
      jobLevel: 'Junior',
    });

    expect(result).toHaveProperty('predictedSalary');
    expect(result.predictedSalary).toBeGreaterThan(0);
    expect(result.currency).toBe('EGP');
  });

  it('should answer chatbot queries using RAG', async () => {
    const result = await controller.chat({ prompt: 'ما هي كليات جامعة القاهرة؟' });

    expect(result).toHaveProperty('answer');
    expect(result).toHaveProperty('sources');
  });
});
