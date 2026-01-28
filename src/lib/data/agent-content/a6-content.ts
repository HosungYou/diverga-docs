import type { ExtendedAgentContent } from '../types';

export const a6Content: ExtendedAgentContent = {
  agentId: 'A6',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      { number: 1, title: { en: 'Modal Visualization Avoidance', ko: '모달 시각화 회피' }, purpose: { en: 'Avoid generic box-and-arrow diagrams', ko: '일반적인 상자-화살표 다이어그램 회피' } },
      { number: 2, title: { en: 'Creative Layout Exploration', ko: '창의적 레이아웃 탐색' }, purpose: { en: 'Generate innovative visual representations', ko: '혁신적인 시각적 표현 생성' } },
      { number: 3, title: { en: 'ASCII Blueprint Generation', ko: 'ASCII 청사진 생성' }, purpose: { en: 'Create text-based framework structure', ko: '텍스트 기반 프레임워크 구조 생성' } },
      { number: 4, title: { en: 'Nanobanana Prompt Crafting', ko: 'Nanobanana 프롬프트 작성' }, purpose: { en: 'Design Gemini API prompt for image generation', ko: '이미지 생성을 위한 Gemini API 프롬프트 설계' } },
      { number: 5, title: { en: 'Quality Review', ko: '품질 검토' }, purpose: { en: 'Verify academic appropriateness of output', ko: '출력의 학술적 적절성 확인' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_question', description: { en: 'Approved research question', ko: '승인된 연구 질문' } },
      { name: 'variables', description: { en: 'IV, mediators, DV list', ko: 'IV, 매개변수, DV 목록' } },
      { name: 'theoretical_framework', description: { en: 'Selected theoretical framework', ko: '선택된 이론적 프레임워크' } },
    ],
    optional: [
      { name: 't_score', description: { en: 'Target T-Score for visualization style', ko: '시각화 스타일을 위한 목표 T-Score' } },
    ],
  },
  codeTemplates: [
    {
      language: 'Python',
      title: { en: 'Nanobanana API Call', ko: 'Nanobanana API 호출' },
      code: `import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY")

prompt = """Create an academic conceptual framework diagram:
Title: [Your Framework Title]
Variables: [IV] → [Mediators] → [DV]
Style: Clean academic, journal-ready"""

model = genai.GenerativeModel("gemini-2.0-flash-exp-image-generation")
response = model.generate_content(prompt)

# Save image
for part in response.candidates[0].content.parts:
    if hasattr(part, 'inline_data'):
        with open("framework.png", "wb") as f:
            f.write(part.inline_data.data)`,
    },
  ],
  checkpoints: [
    { id: 'CP_VISUALIZATION_PREFERENCE', description: { en: 'Optional: Configure visual style preferences', ko: '선택: 시각적 스타일 기본 설정 구성' } },
  ],
  references: [
    'Ravitch, S. M., & Riggan, M. (2017). Reason & Rigor: How Conceptual Frameworks Guide Research.',
  ],
};
