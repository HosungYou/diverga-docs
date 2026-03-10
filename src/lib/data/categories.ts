import { Category } from './types';

export const categories: Category[] = [
  {
    id: "A",
    slug: "foundation",
    name: { en: "Foundation", ko: "기초" },
    description: {
      en: "Research questions, theoretical frameworks, paradigms",
      ko: "연구 질문, 이론적 프레임워크, 패러다임"
    },
    color: "category-a",
    bgColor: "bg-[oklch(0.95_0.05_270)]",
    agents: ["A1", "A2", "A5"]
  },
  {
    id: "B",
    slug: "evidence",
    name: { en: "Literature & Evidence", ko: "문헌 및 증거" },
    description: {
      en: "Literature review, quality appraisal",
      ko: "문헌 검토, 품질 평가"
    },
    color: "category-b",
    bgColor: "bg-[oklch(0.95_0.05_295)]",
    agents: ["B1", "B2"]
  },
  {
    id: "C",
    slug: "design",
    name: { en: "Study Design", ko: "연구 설계" },
    description: {
      en: "Quantitative, qualitative, mixed methods designs, and meta-analysis",
      ko: "양적, 질적, 혼합방법 설계 및 메타분석"
    },
    color: "category-c",
    bgColor: "bg-[oklch(0.95_0.05_175)]",
    agents: ["C1", "C2", "C3", "C5"]
  },
  {
    id: "D",
    slug: "data-collection",
    name: { en: "Data Collection", ko: "데이터 수집" },
    description: {
      en: "Interviews, observations, measurement instruments",
      ko: "인터뷰, 관찰, 측정 도구"
    },
    color: "category-d",
    bgColor: "bg-[oklch(0.95_0.05_55)]",
    agents: ["D2", "D4"]
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
    agents: ["E1", "E2", "E3"]
  },
  {
    id: "F",
    slug: "quality",
    name: { en: "Quality & Validation", ko: "품질 및 검증" },
    description: {
      en: "Humanization verification",
      ko: "휴먼화 검증"
    },
    color: "category-f",
    bgColor: "bg-[oklch(0.95_0.05_200)]",
    agents: ["F5"]
  },
  {
    id: "G",
    slug: "communication",
    name: { en: "Publication & Communication", ko: "출판 및 커뮤니케이션" },
    description: {
      en: "Journal selection, writing, humanization, style auditing",
      ko: "저널 선택, 작성, 휴먼화, 스타일 감사"
    },
    color: "category-g",
    bgColor: "bg-[oklch(0.95_0.05_330)]",
    agents: ["G1", "G2", "G5", "G6"]
  },
  {
    id: "I",
    slug: "systematic-review",
    name: { en: "Systematic Review Automation", ko: "체계적 문헌고찰 자동화" },
    description: {
      en: "PRISMA pipeline: paper retrieval, screening, RAG building",
      ko: "PRISMA 파이프라인: 논문 수집, 스크리닝, RAG 구축"
    },
    color: "category-i",
    bgColor: "bg-[oklch(0.95_0.05_85)]",
    agents: ["I0", "I1", "I2", "I3"]
  },
  {
    id: "X",
    slug: "cross-cutting",
    name: { en: "Cross-Cutting", ko: "범분야" },
    description: {
      en: "Research integrity, ethics oversight, bias detection",
      ko: "연구 무결성, 윤리 감독, 편향 탐지"
    },
    color: "category-x",
    bgColor: "bg-[oklch(0.95_0.05_150)]",
    agents: ["X1"]
  }
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}
