export interface TutorialStep {
  id: number;
  title: { en: string; ko: string };
  description: { en: string; ko: string };
  image?: string;
  gif?: string;
  code?: string;
  duration?: string;
}

export interface Tutorial {
  id: string;
  title: { en: string; ko: string };
  description: { en: string; ko: string };
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  steps: TutorialStep[];
}

export type Locale = 'en' | 'ko';
