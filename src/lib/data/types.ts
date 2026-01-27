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

export interface Workflow {
  id: string;
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  paradigm: Paradigm;
  stages: WorkflowStage[];
  estimatedTime: string;
}

export interface WorkflowStage {
  agent: string;
  description: LocalizedString;
  checkpoint?: string;
}
