'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code2, BookOpen, Lightbulb, Shield, Zap, ArrowRight } from 'lucide-react';
import type { ExtendedAgentContent } from '@/lib/data/types';

interface AgentDetailSectionsProps {
  content: ExtendedAgentContent;
  locale: 'en' | 'ko';
}

function CollapsibleSection({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl bg-void-elevated border border-stellar-faint/20 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 hover:bg-void-surface/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-void-surface">
            <Icon className="h-4 w-4 text-tscore-creative" />
          </div>
          <span className="font-semibold text-stellar-core font-mono">{title}</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-stellar-faint transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-5 pb-5 border-t border-stellar-faint/10 pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const getScoreColor = (range: string) => {
  if (range.startsWith('0.8') || range.startsWith('0.9') || range.startsWith('1.')) return '#ff3366';
  if (range.startsWith('0.6') || range.startsWith('0.7')) return '#ff8844';
  if (range.startsWith('0.4') || range.startsWith('0.5')) return '#ffcc22';
  if (range.startsWith('0.2') || range.startsWith('0.3')) return '#44ffaa';
  return '#22ccff';
};

export function AgentDetailSections({ content, locale }: AgentDetailSectionsProps) {
  return (
    <div className="space-y-4">
      {/* VS Process Timeline */}
      {content.vsProcess && (
        <CollapsibleSection
          title={locale === 'ko' ? 'VS 프로세스' : 'VS Process'}
          icon={Zap}
          defaultOpen={true}
        >
          <div className="space-y-1">
            <span className="inline-block px-2 py-0.5 rounded text-micro font-mono bg-void-surface text-tscore-creative border border-tscore-creative/30 mb-3">
              {content.vsProcess.type.replace(/_/g, ' ')}
            </span>
            <div className="space-y-4">
              {content.vsProcess.phases.map((phase) => (
                <div key={phase.number} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-void-surface flex items-center justify-center font-mono text-sm font-bold text-tscore-creative border border-tscore-creative/30">
                    {phase.number}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-stellar-core text-sm">
                      {phase.title[locale]}
                    </h4>
                    <p className="text-sm text-stellar-dim mt-1">
                      {phase.purpose[locale]}
                    </p>
                    {phase.example && (
                      <p className="text-micro text-stellar-faint mt-1 font-mono italic">
                        {phase.example}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CollapsibleSection>
      )}

      {/* T-Score Reference */}
      {content.tScoreReference && (
        <CollapsibleSection
          title={locale === 'ko' ? 'T-Score 참조' : 'T-Score Reference'}
          icon={BookOpen}
        >
          <div className="space-y-3">
            {content.tScoreReference.ranges.map((range, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-void-surface">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                  style={{ backgroundColor: getScoreColor(range.range) }}
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold" style={{ color: getScoreColor(range.range) }}>
                      T-{range.range}
                    </span>
                    <span className="text-sm text-stellar-dim">{range.label[locale]}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {range.examples.map((ex, j) => (
                      <span key={j} className="text-micro text-stellar-faint bg-void-deep px-1.5 py-0.5 rounded font-mono">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Input/Output Requirements */}
      {content.inputRequirements && (
        <CollapsibleSection
          title={locale === 'ko' ? '입력/출력 요구사항' : 'Input/Output Requirements'}
          icon={ArrowRight}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-mono text-micro text-stellar-faint uppercase tracking-wider mb-2">
                {locale === 'ko' ? '필수 입력' : 'Required Input'}
              </h4>
              <div className="space-y-2">
                {content.inputRequirements.required.map((req, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-checkpoint-required font-mono">*</span>
                    <div>
                      <span className="font-mono text-stellar-bright">{req.name}</span>
                      <span className="text-stellar-dim ml-2">{req.description[locale]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {content.inputRequirements.optional && content.inputRequirements.optional.length > 0 && (
              <div>
                <h4 className="font-mono text-micro text-stellar-faint uppercase tracking-wider mb-2">
                  {locale === 'ko' ? '선택 입력' : 'Optional Input'}
                </h4>
                <div className="space-y-2">
                  {content.inputRequirements.optional.map((opt, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-stellar-faint font-mono">○</span>
                      <div>
                        <span className="font-mono text-stellar-bright">{opt.name}</span>
                        <span className="text-stellar-dim ml-2">{opt.description[locale]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CollapsibleSection>
      )}

      {/* Output Format */}
      {content.outputFormat && (
        <CollapsibleSection
          title={locale === 'ko' ? '출력 형식' : 'Output Format'}
          icon={Code2}
        >
          <div className="space-y-3">
            {content.outputFormat.sections.map((section, i) => (
              <div key={i} className="p-3 rounded-lg bg-void-surface">
                <h4 className="font-mono text-sm font-bold text-stellar-bright">{section.title}</h4>
                <p className="text-sm text-stellar-dim mt-1">{section.content[locale]}</p>
              </div>
            ))}
            {content.outputFormat.example && (
              <pre className="p-3 rounded-lg bg-void-deep border border-stellar-faint/10 text-micro font-mono text-stellar-faint overflow-x-auto">
                {content.outputFormat.example}
              </pre>
            )}
          </div>
        </CollapsibleSection>
      )}

      {/* Creativity Mechanisms */}
      {content.creativityMechanisms && content.creativityMechanisms.length > 0 && (
        <CollapsibleSection
          title={locale === 'ko' ? '창의성 메커니즘' : 'Creativity Mechanisms'}
          icon={Lightbulb}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {content.creativityMechanisms.map((mech, i) => (
              <div key={i} className="p-3 rounded-lg bg-void-surface border border-stellar-faint/10">
                <h4 className="font-mono text-sm font-bold text-tscore-creative">{mech.name}</h4>
                <p className="text-micro text-stellar-dim mt-1">{mech.applicationTiming[locale]}</p>
                <p className="text-micro text-stellar-faint mt-1 italic">{mech.usageExample[locale]}</p>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Checkpoints */}
      {content.checkpoints && content.checkpoints.length > 0 && (
        <CollapsibleSection
          title={locale === 'ko' ? '체크포인트' : 'Checkpoints'}
          icon={Shield}
        >
          <div className="space-y-2">
            {content.checkpoints.map((cp, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-void-surface">
                <div className="w-2 h-2 rounded-full bg-checkpoint-required mt-1.5 flex-shrink-0" />
                <div>
                  <code className="text-micro font-mono text-checkpoint-required">{cp.id}</code>
                  <p className="text-sm text-stellar-dim mt-0.5">{cp.description[locale]}</p>
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Code Templates */}
      {content.codeTemplates && content.codeTemplates.length > 0 && (
        <CollapsibleSection
          title={locale === 'ko' ? '코드 템플릿' : 'Code Templates'}
          icon={Code2}
        >
          <div className="space-y-4">
            {content.codeTemplates.map((tmpl, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-micro font-mono bg-void-surface text-stellar-bright border border-stellar-faint/20">
                    {tmpl.language}
                  </span>
                  <span className="text-sm text-stellar-dim">{tmpl.title[locale]}</span>
                </div>
                <pre className="p-4 rounded-lg bg-void-deep border border-stellar-faint/10 text-micro font-mono text-stellar-faint overflow-x-auto">
                  {tmpl.code}
                </pre>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* Example Workflow */}
      {content.exampleWorkflow && (
        <CollapsibleSection
          title={locale === 'ko' ? '예시 워크플로우' : 'Example Workflow'}
          icon={ArrowRight}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-lg bg-void-surface border border-tscore-modal/30">
              <h4 className="font-mono text-micro text-tscore-modal uppercase tracking-wider mb-2">
                {locale === 'ko' ? '이전 (모달)' : 'Before (Modal)'}
              </h4>
              <p className="text-sm text-stellar-dim">{content.exampleWorkflow.before[locale]}</p>
            </div>
            <div className="p-4 rounded-lg bg-void-surface border border-tscore-creative/30">
              <h4 className="font-mono text-micro text-tscore-creative uppercase tracking-wider mb-2">
                {locale === 'ko' ? '이후 (창의적)' : 'After (Creative)'}
              </h4>
              <p className="text-sm text-stellar-dim">{content.exampleWorkflow.after[locale]}</p>
            </div>
          </div>
        </CollapsibleSection>
      )}

      {/* References */}
      {content.references && content.references.length > 0 && (
        <CollapsibleSection
          title={locale === 'ko' ? '참고문헌' : 'References'}
          icon={BookOpen}
        >
          <ul className="space-y-2">
            {content.references.map((ref, i) => (
              <li key={i} className="text-sm text-stellar-dim pl-4 border-l-2 border-stellar-faint/20">
                {ref}
              </li>
            ))}
          </ul>
        </CollapsibleSection>
      )}
    </div>
  );
}
