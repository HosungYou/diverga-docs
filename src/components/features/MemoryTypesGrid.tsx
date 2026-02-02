'use client';

import { memoryTypes } from '@/lib/data/features';
import { MemoryTypeCard } from './MemoryTypeCard';

interface MemoryTypesGridProps {
  locale: string;
}

export function MemoryTypesGrid({ locale }: MemoryTypesGridProps) {
  return (
    <section className="py-12">
      {/* Section header */}
      <div className="mb-8 text-center">
        <h2 className="font-display text-heading-2 text-stellar-core mb-4">
          {locale === 'ko' ? '5가지 메모리 타입' : '5 Memory Types'}
        </h2>
        <p className="text-body text-stellar-dim max-w-3xl mx-auto">
          {locale === 'ko'
            ? 'Diverga는 연구 맥락을 5가지 범주로 체계적으로 저장하여 세션을 넘어 지속되는 지능을 제공합니다.'
            : 'Diverga organizes research context into 5 categories, providing intelligence that persists across sessions.'}
        </p>
      </div>

      {/* Memory types grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memoryTypes.map((memoryType, index) => (
          <MemoryTypeCard
            key={memoryType.id}
            memoryType={memoryType}
            locale={locale}
            index={index}
          />
        ))}
      </div>

      {/* Visual separator with memory gradient */}
      <div className="mt-12 flex items-center justify-center">
        <div className="relative w-full max-w-2xl h-px bg-memory-gradient opacity-30">
          <div className="absolute inset-0 blur-sm bg-memory-gradient" />
        </div>
      </div>

      {/* Info callout */}
      <div className="mt-8 max-w-4xl mx-auto">
        <div className="border border-feature-memory/30 bg-feature-memory/5 p-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl" role="img" aria-label="memory">
              🧠
            </span>
            <div className="flex-1">
              <h3 className="font-display text-lg text-stellar-core mb-2">
                {locale === 'ko' ? '자동 맥락 관리' : 'Automatic Context Management'}
              </h3>
              <p className="text-caption text-stellar-dim leading-relaxed">
                {locale === 'ko'
                  ? '메모리는 자동으로 캡처되고 관리됩니다. 연구자는 맥락을 재설명할 필요 없이 이전 대화를 이어갈 수 있습니다. 중요한 결정은 근거와 함께 저장되어 나중에 참조할 수 있습니다.'
                  : 'Memories are automatically captured and managed. Researchers can continue previous conversations without re-explaining context. Critical decisions are stored with rationale for future reference.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
