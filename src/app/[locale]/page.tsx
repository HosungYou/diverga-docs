"use client";

import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/home/HeroSection';
import { ProblemSolution } from '@/components/home/ProblemSolution';
import { AgentCategoryGrid } from '@/components/home/AgentCategoryGrid';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemSolution />
      <AgentCategoryGrid />
      <CTASection />
    </div>
  );
}
