'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { prismaPipelineStages } from '@/lib/data/features';

interface PRISMAPipelineProps {
  locale: string;
}

export function PRISMAPipeline({ locale }: PRISMAPipelineProps) {
  return (
    <div className="relative w-full py-12">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 font-display text-heading-2 font-bold text-stellar-core">
          {locale === 'ko' ? 'PRISMA 2020 파이프라인' : 'PRISMA 2020 Pipeline'}
        </h2>
        <p className="mx-auto max-w-2xl text-body text-stellar-dim">
          {locale === 'ko'
            ? '5단계 자동화 워크플로우로 체계적 문헌고찰을 PRISMA 가이드라인에 따라 수행'
            : 'Five-stage automated workflow for conducting systematic literature reviews following PRISMA guidelines'}
        </p>
      </motion.div>

      {/* Process Flow */}
      <div className="relative mx-auto max-w-6xl">
        {/* Connecting Lines (Desktop) */}
        <div className="absolute inset-0 hidden items-center md:flex">
          <div className="flex w-full items-center justify-between px-12">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                className="h-px w-32 origin-left bg-gradient-to-r from-tscore-creative/40 to-tscore-creative/20"
              />
            ))}
          </div>
        </div>

        {/* Stage Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {prismaPipelineStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              {/* Stage Card */}
              <div className="relative overflow-hidden border border-stellar-faint/20 bg-void-elevated p-5 transition-all duration-300 hover:border-tscore-creative/40 hover:bg-void-hover">
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(68, 255, 170, 0.15), transparent 70%)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Stage ID Badge with Checkpoint Indicator */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="flex h-9 w-9 items-center justify-center border border-tscore-creative font-mono text-sm font-bold text-tscore-creative"
                      >
                        {stage.id}
                      </div>
                      {stage.hasCheckpoint && (
                        <div
                          className="h-2.5 w-2.5 rounded-full bg-checkpoint-required animate-checkpoint-blink"
                          title={
                            locale === 'ko'
                              ? '필수 체크포인트'
                              : 'Required Checkpoint'
                          }
                        />
                      )}
                    </div>
                  </div>

                  {/* Agent Name */}
                  <div className="mb-2 font-mono text-micro text-stellar-dim">
                    {stage.agent}
                  </div>

                  {/* Stage Title */}
                  <h3 className="mb-3 font-display text-base font-bold text-tscore-creative">
                    {locale === 'ko' ? stage.name.ko : stage.name.en}
                  </h3>

                  {/* Stage Description */}
                  <p className="text-caption leading-relaxed text-stellar-dim">
                    {locale === 'ko'
                      ? stage.description.ko
                      : stage.description.en}
                  </p>
                </div>

                {/* Corner Accent */}
                <div
                  className="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-tscore-creative opacity-10"
                  style={{ filter: 'blur(20px)' }}
                />
              </div>

              {/* Arrow Connector (Mobile) */}
              {index < prismaPipelineStages.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
                  className="my-4 flex justify-center lg:hidden"
                >
                  <ArrowRight
                    className="h-6 w-6 rotate-90 text-tscore-creative/60 sm:rotate-0"
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Checkpoint Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 border border-tscore-creative/30 bg-void-elevated/50 p-6 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="h-2.5 w-2.5 rounded-full bg-checkpoint-required animate-checkpoint-blink" />
            </div>
            <div>
              <h4 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-tscore-creative">
                {locale === 'ko' ? '체크포인트 시스템' : 'Checkpoint System'}
              </h4>
              <p className="text-caption leading-relaxed text-stellar-dim">
                {locale === 'ko'
                  ? '빨간 점이 표시된 단계에서는 시스템이 일시 정지하고 사용자의 명시적 승인을 요청합니다. 데이터베이스 선택, 스크리닝 기준, RAG 준비 상태, 품질 검증 등 중요한 의사결정은 연구자의 통제 하에 있습니다.'
                  : 'Stages marked with a red dot pause the system and request explicit user approval. Critical decisions like database selection, screening criteria, RAG readiness, and quality validation remain under researcher control.'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ScholaRAG Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-6 border border-stellar-faint/20 bg-void-elevated/30 p-5"
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 text-2xl">📚</div>
            <div>
              <h4 className="mb-1 font-display text-sm font-bold text-stellar-core">
                {locale === 'ko'
                  ? 'ScholaRAG 통합'
                  : 'ScholaRAG Integration'}
              </h4>
              <p className="text-caption leading-relaxed text-stellar-dim">
                {locale === 'ko'
                  ? 'Diverga는 ScholaRAG 프로덕션 시스템과 통합되어 대화형 인터페이스를 통해 전체 파이프라인을 자동 실행합니다. 연구자는 프롬프트를 제공하고, Diverga가 백그라운드에서 스크립트를 실행합니다.'
                  : 'Diverga integrates with the ScholaRAG production system to automate the entire pipeline through a conversational interface. Researchers provide prompts, and Diverga executes scripts in the background.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
