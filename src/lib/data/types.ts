export type Paradigm = "quantitative" | "qualitative" | "mixed";
export type Tier = "HIGH" | "MEDIUM" | "LOW";
export type Model = "opus" | "sonnet" | "haiku";
export type VSLevel = "FULL" | "ENHANCED" | "LIGHT";
export type CheckpointLevel = "REQUIRED" | "RECOMMENDED" | "OPTIONAL" | null;

export interface LocalizedString {
  en: string;
  ko: string;
}

export interface Agent {
  id: string;
  slug: string;
  name: LocalizedString;
  category: string;
  icon: string;
  tier: Tier;
  model: Model;
  vsLevel: VSLevel;
  description: LocalizedString;
  purpose: LocalizedString;
  triggers: LocalizedString;
  relatedAgents: string[];
  paradigms: Paradigm[];
  checkpoint?: {
    id: string;
    level: CheckpointLevel;
  };
}

export interface Category {
  id: string;
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  color: string;
  bgColor: string;
  agents: string[];
}

export interface WorkflowExample {
  researchQuestion: string;
  variables: {
    independent: string[];
    mediators: string[];
    dependent: string[];
  };
  theoreticalFramework: string;
  tScore: number;
}

export interface Workflow {
  id: string;
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  paradigm: Paradigm;
  stages: WorkflowStage[];
  estimatedTime: string;
  example?: WorkflowExample;
}

export interface WorkflowStage {
  agent: string;
  description: LocalizedString;
  checkpoint?: string;
}

export interface BilingualText {
  en: string;
  ko: string;
}

export interface VSPhase {
  number: number;
  title: BilingualText;
  purpose: BilingualText;
  example?: string;
}

export interface TScoreRange {
  range: string;
  label: BilingualText;
  examples: string[];
}

export interface ExtendedAgentContent {
  agentId: string;
  vsProcess?: {
    type: 'FULL_5_PHASE' | 'ENHANCED_3_PHASE' | 'LIGHT';
    phases: VSPhase[];
  };
  tScoreReference?: {
    ranges: TScoreRange[];
  };
  inputRequirements?: {
    required: { name: string; description: BilingualText }[];
    optional?: { name: string; description: BilingualText }[];
  };
  outputFormat?: {
    sections: { title: string; content: BilingualText }[];
    example?: string;
  };
  creativityMechanisms?: {
    name: string;
    applicationTiming: BilingualText;
    usageExample: BilingualText;
  }[];
  checkpoints?: {
    id: string;
    description: BilingualText;
  }[];
  codeTemplates?: {
    language: string;
    title: BilingualText;
    code: string;
  }[];
  references?: string[];
  exampleWorkflow?: {
    before: BilingualText;
    after: BilingualText;
  };
}
