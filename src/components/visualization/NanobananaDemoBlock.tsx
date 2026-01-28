'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code2, Lightbulb, ArrowRight, Image, Sparkles } from 'lucide-react';

interface NanobananaDemoProps {
  locale: 'en' | 'ko';
  example: {
    researchQuestion: string;
    variables: {
      independent: string[];
      mediators: string[];
      dependent: string[];
    };
    theoreticalFramework: string;
    tScore: number;
  };
}

function CollapsibleSection({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
  accentColor = 'tscore-creative',
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
  accentColor?: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl bg-void-elevated border border-stellar-faint/20 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 hover:bg-void-surface/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`p-1.5 rounded-lg bg-void-surface`}>
            <Icon className={`h-4 w-4 text-${accentColor}`} />
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

export function NanobananaDemoBlock({ locale, example }: NanobananaDemoProps) {
  const getColor = (score: number) => {
    if (score >= 0.8) return '#ff3366';
    if (score >= 0.6) return '#ff8844';
    if (score >= 0.4) return '#ffcc22';
    if (score >= 0.2) return '#44ffaa';
    return '#22ccff';
  };

  return (
    <div className="space-y-6">
      {/* Research Context Card */}
      <div className="void-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-void-surface">
            <Lightbulb className="h-5 w-5 text-tscore-creative" />
          </div>
          <h3 className="font-semibold text-lg text-stellar-core">
            {locale === 'ko' ? '연구 맥락' : 'Research Context'}
          </h3>
          <div className="ml-auto flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getColor(example.tScore) }}
            />
            <span className="font-mono text-sm" style={{ color: getColor(example.tScore) }}>
              T-{example.tScore.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <span className="font-mono text-micro text-stellar-faint uppercase tracking-wider">
              {locale === 'ko' ? '연구 질문' : 'Research Question'}
            </span>
            <p className="mt-1 text-stellar-dim">{example.researchQuestion}</p>
          </div>

          <div>
            <span className="font-mono text-micro text-stellar-faint uppercase tracking-wider">
              {locale === 'ko' ? '이론적 프레임워크' : 'Theoretical Framework'}
            </span>
            <p className="mt-1 text-stellar-bright font-medium">{example.theoreticalFramework}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="p-3 rounded-lg bg-void-surface border border-blue-500/30">
              <span className="font-mono text-micro text-blue-400 uppercase">
                {locale === 'ko' ? '독립변수' : 'Independent'}
              </span>
              <ul className="mt-2 space-y-1">
                {example.variables.independent.map((v, i) => (
                  <li key={i} className="text-sm text-stellar-dim">• {v}</li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-lg bg-void-surface border border-yellow-500/30">
              <span className="font-mono text-micro text-yellow-400 uppercase">
                {locale === 'ko' ? '매개변수' : 'Mediators'}
              </span>
              <ul className="mt-2 space-y-1">
                {example.variables.mediators.map((v, i) => (
                  <li key={i} className="text-sm text-stellar-dim">• {v}</li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-lg bg-void-surface border border-green-500/30">
              <span className="font-mono text-micro text-green-400 uppercase">
                {locale === 'ko' ? '종속변수' : 'Dependent'}
              </span>
              <ul className="mt-2 space-y-1">
                {example.variables.dependent.map((v, i) => (
                  <li key={i} className="text-sm text-stellar-dim">• {v}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Steps */}
      <CollapsibleSection
        title={locale === 'ko' ? '워크플로우 절차' : 'Workflow Procedure'}
        icon={ArrowRight}
        defaultOpen={true}
      >
        <div className="space-y-4">
          {[
            {
              step: 1,
              title: { en: 'Define Research Context', ko: '연구 맥락 정의' },
              description: { en: 'Input research question, variables, and theoretical framework', ko: '연구 질문, 변수, 이론적 프레임워크 입력' },
            },
            {
              step: 2,
              title: { en: 'Generate ASCII Blueprint', ko: 'ASCII 청사진 생성' },
              description: { en: 'A6 agent creates text-based box-and-arrow structure', ko: 'A6 에이전트가 텍스트 기반 상자-화살표 구조 생성' },
            },
            {
              step: 3,
              title: { en: 'Create Nanobanana Prompt', ko: 'Nanobanana 프롬프트 생성' },
              description: { en: 'Design prompt with variable names, relationships, T-Score styling', ko: '변수명, 관계, T-Score 스타일링으로 프롬프트 설계' },
            },
            {
              step: 4,
              title: { en: 'Call Gemini API', ko: 'Gemini API 호출' },
              description: { en: 'Execute image generation via gemini-2.0-flash-exp-image-generation', ko: 'gemini-2.0-flash-exp-image-generation으로 이미지 생성 실행' },
            },
            {
              step: 5,
              title: { en: 'Quality Review (Checkpoint)', ko: '품질 검토 (체크포인트)' },
              description: { en: 'Verify academic appropriateness, variable labels, arrow directions', ko: '학술적 적절성, 변수 레이블, 화살표 방향 확인' },
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-void-surface flex items-center justify-center font-mono text-sm font-bold text-tscore-creative border border-tscore-creative/30">
                {item.step}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-stellar-core text-sm">
                  {item.title[locale]}
                </h4>
                <p className="text-sm text-stellar-dim mt-0.5">
                  {item.description[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Generated Image Placeholder */}
      <CollapsibleSection
        title={locale === 'ko' ? '생성된 프레임워크' : 'Generated Framework'}
        icon={Image}
        defaultOpen={true}
        accentColor="tscore-divergent"
      >
        <div className="space-y-4">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-void-surface border border-stellar-faint/20 flex items-center justify-center">
            {/* Placeholder - will be replaced with actual generated image */}
            <div className="text-center p-8">
              <Sparkles className="w-12 h-12 mx-auto text-tscore-creative mb-4" />
              <p className="text-stellar-dim text-sm">
                {locale === 'ko'
                  ? '개념적 프레임워크 이미지가 여기에 표시됩니다'
                  : 'Conceptual framework image will be displayed here'}
              </p>
              <p className="text-stellar-faint text-micro mt-2">
                {locale === 'ko'
                  ? 'Nanobanana (Gemini 이미지 생성)으로 생성'
                  : 'Generated via Nanobanana (Gemini Image Generation)'}
              </p>
            </div>
          </div>
          <p className="text-micro text-stellar-faint">
            {locale === 'ko'
              ? '참고: 실제 구현에서는 Gemini API를 통해 실시간으로 이미지가 생성됩니다.'
              : 'Note: In actual implementation, images are generated in real-time via Gemini API.'}
          </p>
        </div>
      </CollapsibleSection>

      {/* Code Template */}
      <CollapsibleSection
        title={locale === 'ko' ? '코드 템플릿' : 'Code Template'}
        icon={Code2}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded text-micro font-mono bg-void-surface text-stellar-bright border border-stellar-faint/20">
              Python
            </span>
            <span className="text-sm text-stellar-dim">
              {locale === 'ko' ? 'Nanobanana API 호출' : 'Nanobanana API Call'}
            </span>
          </div>
          <pre className="p-4 rounded-lg bg-void-deep border border-stellar-faint/10 text-micro font-mono text-stellar-faint overflow-x-auto whitespace-pre-wrap">
{`import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY")

prompt = """Create an academic conceptual framework diagram:

Title: ${example.theoreticalFramework}
Research Question: ${example.researchQuestion}

INDEPENDENT VARIABLES (left, blue boxes):
${example.variables.independent.map(v => `- ${v}`).join('\n')}

MEDIATING VARIABLES (center, yellow boxes):
${example.variables.mediators.map(v => `- ${v}`).join('\n')}

DEPENDENT VARIABLES (right, green boxes):
${example.variables.dependent.map(v => `- ${v}`).join('\n')}

Style: Clean academic diagram with arrows showing relationships,
professional colors, white background, suitable for journal publication.
T-Score: ${example.tScore} (Creative range - use modern design elements)
"""

model = genai.GenerativeModel("gemini-2.0-flash-exp-image-generation")
response = model.generate_content(prompt)

# Save generated image
for part in response.candidates[0].content.parts:
    if hasattr(part, 'inline_data'):
        with open("conceptual_framework.png", "wb") as f:
            f.write(part.inline_data.data)
        print("Image saved as conceptual_framework.png")`}
          </pre>
        </div>
      </CollapsibleSection>
    </div>
  );
}
