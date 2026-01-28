import { notFound } from 'next/navigation';
import { getAgentBySlug, agents, getAgentById } from '@/lib/data/agents';
import { getCategoryById } from '@/lib/data/categories';
import { getAgentContent } from '@/lib/data/agent-content';
import { AgentDetail } from '@/components/agents/AgentDetail';

export function generateStaticParams() {
  return agents.map((agent) => ({
    agentId: agent.slug,
  }));
}

type Props = {
  params: Promise<{ agentId: string; locale: string }>;
};

export default async function AgentDetailPage({ params }: Props) {
  const { agentId, locale } = await params;
  const agent = getAgentBySlug(agentId);

  if (!agent) {
    notFound();
  }

  const category = getCategoryById(agent.category);
  const relatedAgents = agent.relatedAgents
    .map((id) => getAgentById(id))
    .filter(Boolean);
  const extendedContent = getAgentContent(agent.id);

  return (
    <AgentDetail
      agent={agent}
      category={category!}
      relatedAgents={relatedAgents as any[]}
      extendedContent={extendedContent}
    />
  );
}
