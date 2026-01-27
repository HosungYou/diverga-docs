import { Category } from './types';

export const categories: Category[] = [
  {
    id: "A",
    slug: "foundation",
    name: { en: "Foundation", ko: "기초" },
    description: {
      en: "Research questions, theoretical frameworks, paradigms, and ethics",
      ko: "연구 질문, 이론적 프레임워크, 패러다임, 윤리"
    },
    color: "category-a",
    bgColor: "bg-[oklch(0.95_0.05_270)]",
    agents: ["A1", "A2", "A3", "A4", "A5", "A6"]
  },
  {
    id: "B",
    slug: "evidence",
    name: { en: "Evidence", ko: "근거" },
    description: {
      en: "Literature review, quality appraisal, effect sizes, research trends",
      ko: "문헌 검토, 품질 평가, 효과크기, 연구 동향"
    },
    color: "category-b",
    bgColor: "bg-[oklch(0.95_0.05_295)]",
    agents: ["B1", "B2", "B3", "B4", "B5"]
  },
  {
    id: "C",
    slug: "design",
    name: { en: "Design & Meta-Analysis", ko: "설계 및 메타분석" },
    description: {
      en: "Quantitative, qualitative, mixed methods designs, and meta-analysis",
      ko: "양적, 질적, 혼합방법 설계 및 메타분석"
    },
    color: "category-c",
    bgColor: "bg-[oklch(0.95_0.05_175)]",
    agents: ["C1", "C2", "C3", "C4", "C5", "C6", "C7"]
  },
  {
    id: "D",
    slug: "data-collection",
    name: { en: "Data Collection", ko: "데이터 수집" },
    description: {
      en: "Sampling, interviews, observations, measurement instruments",
      ko: "표집, 인터뷰, 관찰, 측정 도구"
    },
    color: "category-d",
    bgColor: "bg-[oklch(0.95_0.05_55)]",
    agents: ["D1", "D2", "D3", "D4"]
  },
  {
    id: "E",
    slug: "analysis",
    name: { en: "Analysis", ko: "분석" },
    description: {
      en: "Statistical analysis, qualitative coding, mixed methods integration",
      ko: "통계 분석, 질적 코딩, 혼합방법 통합"
    },
    color: "category-e",
    bgColor: "bg-[oklch(0.95_0.05_25)]",
    agents: ["E1", "E2", "E3", "E4", "E5"]
  },
  {
    id: "F",
    slug: "quality",
    name: { en: "Quality", ko: "품질" },
    description: {
      en: "Consistency, checklists, reproducibility, bias detection",
      ko: "일관성, 체크리스트, 재현성, 편향 탐지"
    },
    color: "category-f",
    bgColor: "bg-[oklch(0.95_0.05_200)]",
    agents: ["F1", "F2", "F3", "F4", "F5"]
  },
  {
    id: "G",
    slug: "communication",
    name: { en: "Communication", ko: "커뮤니케이션" },
    description: {
      en: "Journal selection, writing, peer review, preregistration",
      ko: "저널 선택, 작성, 동료 심사, 사전등록"
    },
    color: "category-g",
    bgColor: "bg-[oklch(0.95_0.05_330)]",
    agents: ["G1", "G2", "G3", "G4", "G5", "G6"]
  },
  {
    id: "H",
    slug: "specialized",
    name: { en: "Specialized", ko: "전문" },
    description: {
      en: "Ethnography, action research",
      ko: "민족지학, 실행연구"
    },
    color: "category-h",
    bgColor: "bg-[oklch(0.95_0.05_125)]",
    agents: ["H1", "H2"]
  }
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}
