import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../core/services/api.service';

interface Question {
  id: string;
  text: string;
  category: string;
  options: { text: string }[];
}

interface UniversityRecommendation {
  id: string;
  name: string;
  logo: string;
  type: string;
  matchPercentage: number;
  explanation: string;
  colleges: { name: string }[];
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  private api = inject(ApiService);
  private router = inject(Router);

  // States: 'welcome' | 'quiz' | 'loading' | 'results'
  quizState: 'welcome' | 'quiz' | 'loading' | 'results' = 'welcome';

  questions: Question[] = [];
  currentQuestionIndex = 0;
  selectedAnswers: { [questionId: string]: number } = {};

  loadingText = 'Analyzing your responses...';
  loadingSteps = [
    'Analyzing your cognitive profile...',
    'Matching with Egyptian university criteria...',
    'Calculating academic discipline weights...',
    'Generating personalized recommendations...'
  ];

  scores: any = null;
  recommendations: UniversityRecommendation[] = [];
  favorites: string[] = [];

  ngOnInit() {
    this.loadFavorites();
    this.loadQuestions();
  }

  loadFavorites() {
    try {
      const favs = localStorage.getItem('uni_favorites');
      this.favorites = favs ? JSON.parse(favs) : [];
    } catch (e) {
      this.favorites = [];
    }
  }

  isFavorite(uniId: string): boolean {
    return this.favorites.includes(uniId);
  }

  toggleFavorite(uniId: string) {
    if (this.isFavorite(uniId)) {
      this.favorites = this.favorites.filter(id => id !== uniId);
    } else {
      this.favorites.push(uniId);
    }
    localStorage.setItem('uni_favorites', JSON.stringify(this.favorites));
  }

  loadQuestions() {
    this.api.get<Question[]>('/quiz/questions').subscribe({
      next: (data) => {
        this.questions = data || [];
      },
      error: (err) => {
        console.error('Error loading quiz questions:', err);
      }
    });
  }

  startQuiz() {
    this.quizState = 'quiz';
    this.currentQuestionIndex = 0;
    this.selectedAnswers = {};
  }

  selectOption(optionIndex: number) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.selectedAnswers[currentQuestion.id] = optionIndex;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.submitQuiz();
    }
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  get progressPercentage(): number {
    if (this.questions.length === 0) return 0;
    return Math.round(((this.currentQuestionIndex + 1) / this.questions.length) * 100);
  }

  get isCurrentQuestionAnswered(): boolean {
    if (this.questions.length === 0) return false;
    const currentQuestion = this.questions[this.currentQuestionIndex];
    return this.selectedAnswers[currentQuestion.id] !== undefined;
  }

  submitQuiz() {
    this.quizState = 'loading';
    this.runLoadingAnimation();

    const formattedAnswers = Object.entries(this.selectedAnswers).map(([qId, index]) => ({
      questionId: qId,
      selectedOptionIndex: index
    }));

    this.api.post<any>('/quiz/submit', {
      answers: formattedAnswers,
      favorites: this.favorites
    }).subscribe({
      next: (res) => {
        // Wait briefly to make the loading transition smooth and premium
        setTimeout(() => {
          this.scores = res.results.scores;
          this.recommendations = res.results.recommendations || [];
          this.quizState = 'results';
        }, 2000);
      },
      error: (err) => {
        console.error('Failed to submit quiz:', err);
        this.quizState = 'quiz';
      }
    });
  }

  runLoadingAnimation() {
    let step = 0;
    const interval = setInterval(() => {
      if (step < this.loadingSteps.length) {
        this.loadingText = this.loadingSteps[step];
        step++;
      } else {
        clearInterval(interval);
      }
    }, 500);
  }

  getPrimaryCategory(): string {
    if (!this.scores) return 'General';
    const sorted = Object.entries(this.scores).sort((a: any, b: any) => b[1] - a[1]);
    const key = sorted[0][0];
    switch (key) {
      case 'engineering_tech': return 'Technology & Engineering';
      case 'medical_science': return 'Medical & Health Sciences';
      case 'business_economics': return 'Business & Entrepreneurship';
      case 'arts_humanities': return 'Arts, Design & Humanities';
      default: return 'General Studies';
    }
  }

  viewUniversity(uniId: string) {
    this.router.navigate(['/colleges'], { queryParams: { id: uniId } });
  }
}
