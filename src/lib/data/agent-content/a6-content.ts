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

  // NEW USER-FRIENDLY FIELDS
  persona: {
    archetype: 'The Visual Storyteller',
    personality: {
      en: 'Every theory has a shape waiting to be discovered. I transform abstract relationships between variables into visual stories that readers grasp instantly. While others draw boxes and arrows, I create diagrams that make committees say "Now I understand your research."',
      ko: '모든 이론에는 발견되기를 기다리는 형태가 있습니다. 저는 변수들 간의 추상적인 관계를 독자들이 즉시 파악할 수 있는 시각적 이야기로 변환합니다. 다른 사람들이 상자와 화살표를 그리는 동안, 저는 위원회가 "이제 당신의 연구를 이해하겠다"라고 말하게 하는 다이어그램을 만듭니다.',
    },
    voiceSample: {
      en: '"That box-and-arrow diagram is fine for a quick sketch. But your conceptual framework deserves to be a visual argument that tells your research story at a glance."',
      ko: '"그 상자-화살표 다이어그램은 빠른 스케치로는 괜찮습니다. 하지만 당신의 개념적 프레임워크는 한눈에 연구 이야기를 전달하는 시각적 논증이 될 자격이 있습니다."',
    },
    motto: {
      en: 'A great conceptual framework diagram is worth a thousand words of methodology.',
      ko: '훌륭한 개념적 프레임워크 다이어그램은 방법론의 천 단어 가치가 있습니다.',
    },
    catchphrase: {
      en: 'Don\'t just show your variables. Show how they dance together.',
      ko: '변수만 보여주지 마세요. 그들이 함께 춤추는 방식을 보여주세요.',
    },
  },

  quickSummary: {
    oneLiner: {
      en: 'Creates publication-ready conceptual framework diagrams that tell your research story visually.',
      ko: '연구 이야기를 시각적으로 전달하는 출판 가능한 개념적 프레임워크 다이어그램을 만듭니다.',
    },
    bestFor: [
      { en: 'Researchers who struggle to visualize complex relationships', ko: '복잡한 관계를 시각화하는 데 어려움을 겪는 연구자' },
      { en: 'Dissertations requiring conceptual framework figures', ko: '개념적 프레임워크 그림이 필요한 논문' },
      { en: 'Journal submissions needing professional diagrams', ko: '전문적인 다이어그램이 필요한 저널 제출' },
      { en: 'Presentations to committees or conferences', ko: '위원회 또는 학회 발표' },
      { en: 'Making mediation/moderation models visually clear', ko: '매개/조절 모델을 시각적으로 명확하게 만들기' },
    ],
    notFor: [
      { en: 'Purely exploratory research without defined variables', ko: '정의된 변수가 없는 순수 탐색적 연구' },
      { en: 'Grounded theory before categories emerge', ko: '범주가 나타나기 전의 근거이론' },
      { en: 'Simple bivariate relationships (overkill)', ko: '단순 이변량 관계 (과잉)' },
    ],
    timeToResult: '20-35 minutes',
  },

  useCases: [
    {
      title: { en: 'From Messy to Elegant', ko: '지저분함에서 우아함으로' },
      scenario: {
        en: 'Dr. Martinez had 7 variables in her study with complex mediation paths. Her hand-drawn diagram looked like spaghetti, and her committee kept asking her to "clarify the model."',
        ko: 'Martinez 박사는 연구에 복잡한 매개 경로를 가진 7개의 변수가 있었습니다. 손으로 그린 다이어그램은 스파게티처럼 보였고, 위원회는 계속 "모델을 명확히 하라"고 요청했습니다.',
      },
      outcome: {
        en: 'A6 generated an ASCII blueprint that organized variables spatially by temporal sequence and theoretical logic. The Nanobanana prompt then produced a clean, journal-ready diagram with proper layering. Her committee approved immediately.',
        ko: 'A6는 시간적 순서와 이론적 논리에 따라 변수를 공간적으로 구성하는 ASCII 청사진을 생성했습니다. 그런 다음 Nanobanana 프롬프트는 적절한 레이어링으로 깔끔하고 저널 준비가 된 다이어그램을 생성했습니다. 위원회는 즉시 승인했습니다.',
      },
      discipline: 'Management',
      complexity: 'intermediate',
    },
    {
      title: { en: 'The Multi-Level Model Visualization', ko: '다수준 모델 시각화' },
      scenario: {
        en: 'Ahmed was studying organizational climate effects on individual outcomes - a classic multi-level model. Existing templates showed either individual OR organizational level, but not both clearly.',
        ko: 'Ahmed는 개인 결과에 대한 조직 풍토 효과를 연구하고 있었습니다 - 전형적인 다수준 모델. 기존 템플릿은 개인 또는 조직 수준 중 하나만 보여주었지, 둘 다 명확하게 보여주지 않았습니다.',
      },
      outcome: {
        en: 'A6\'s creative layout phase generated a nested visualization showing team-level variables "containing" individual-level variables, with cross-level arrows clearly showing the multi-level effects. The diagram became a teaching example in his department.',
        ko: 'A6의 창의적 레이아웃 단계는 팀 수준 변수가 개인 수준 변수를 "포함"하고, 교차 수준 화살표가 다수준 효과를 명확히 보여주는 중첩 시각화를 생성했습니다. 다이어그램은 그의 학과에서 교육 예제가 되었습니다.',
      },
      discipline: 'Organizational Psychology',
      complexity: 'advanced',
    },
    {
      title: { en: 'The Theory-Driven Aesthetic', ko: '이론 기반 미학' },
      scenario: {
        en: 'Lin had a solid mediation model but it looked like every other SEM diagram - clinical boxes and arrows. She wanted something that reflected the "flow" nature of her learning transfer theory.',
        ko: 'Lin은 견고한 매개 모델이 있었지만 다른 모든 SEM 다이어그램처럼 보였습니다 - 임상적 상자와 화살표. 그녀는 학습 전이 이론의 "흐름" 특성을 반영하는 것을 원했습니다.',
      },
      outcome: {
        en: 'A6 suggested a river/tributary metaphor - knowledge flows from training (source) through mediators (tributaries) to transfer outcomes (delta). The visual metaphor made the abstract theory tangible and memorable.',
        ko: 'A6는 강/지류 은유를 제안했습니다 - 지식이 훈련(원천)에서 매개변수(지류)를 통해 전이 결과(삼각주)로 흐릅니다. 시각적 은유는 추상적 이론을 구체적이고 기억에 남게 만들었습니다.',
      },
      discipline: 'Human Resource Development',
      complexity: 'intermediate',
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'Create a conceptual framework visualization for my study. Research question: [RQ]. Variables: Independent: [X], Mediators: [M1, M2], Dependent: [Y]. Theory: [framework name].',
        ko: '제 연구를 위한 개념적 프레임워크 시각화를 만들어주세요. 연구 질문: [RQ]. 변수: 독립: [X], 매개: [M1, M2], 종속: [Y]. 이론: [프레임워크 이름].',
      },
      context: {
        en: 'When you have defined variables and need a professional diagram.',
        ko: '변수가 정의되어 있고 전문적인 다이어그램이 필요할 때.',
      },
      expectedResponse: {
        en: 'A6 will generate an ASCII blueprint showing relationships, then provide a Nanobanana/Gemini prompt to create a polished image.',
        ko: 'A6는 관계를 보여주는 ASCII 청사진을 생성한 다음, 정제된 이미지를 만들기 위한 Nanobanana/Gemini 프롬프트를 제공합니다.',
      },
    },
    {
      prompt: {
        en: 'I have a complex model with [number] variables. Help me find a creative visual layout that goes beyond standard box-and-arrow diagrams. Variables: [list all variables and relationships]',
        ko: '[숫자]개의 변수가 있는 복잡한 모델이 있습니다. 표준 상자-화살표 다이어그램을 넘어서는 창의적인 시각적 레이아웃을 찾도록 도와주세요. 변수: [모든 변수와 관계 나열]',
      },
      context: {
        en: 'When your model is too complex for simple representations.',
        ko: '모델이 단순한 표현에 비해 너무 복잡할 때.',
      },
      expectedResponse: {
        en: 'A6 will explore creative layouts: circular, nested, temporal flow, or metaphor-based designs that organize complexity elegantly.',
        ko: 'A6는 창의적 레이아웃을 탐구합니다: 원형, 중첩, 시간적 흐름, 또는 복잡성을 우아하게 구성하는 은유 기반 디자인.',
      },
    },
    {
      prompt: {
        en: 'Generate a Nanobanana/Gemini prompt for an academic conceptual framework diagram with these specifications: [describe style, colors, formality level, journal requirements]',
        ko: '이 사양으로 학술 개념적 프레임워크 다이어그램을 위한 Nanobanana/Gemini 프롬프트를 생성해주세요: [스타일, 색상, 격식 수준, 저널 요구사항 설명]',
      },
      context: {
        en: 'When you need a ready-to-use AI image generation prompt.',
        ko: '바로 사용할 수 있는 AI 이미지 생성 프롬프트가 필요할 때.',
      },
      expectedResponse: {
        en: 'A6 will craft a detailed prompt with academic style specifications, variable placement instructions, and annotation requirements.',
        ko: 'A6는 학술 스타일 사양, 변수 배치 지침, 주석 요구사항이 포함된 상세한 프롬프트를 작성합니다.',
      },
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'Your conceptual model needs a visual representation', ko: '개념 모델이 시각적 표현이 필요할 때' },
      { en: 'Committee requests "clearer" diagram of your framework', ko: '위원회가 프레임워크의 "더 명확한" 다이어그램을 요청할 때' },
      { en: 'Journal requires publication-quality figure', ko: '저널이 출판 품질의 그림을 요구할 때' },
      { en: 'Your hand-drawn sketch looks unprofessional', ko: '손으로 그린 스케치가 전문적으로 보이지 않을 때' },
      { en: 'Complex mediation/moderation model needs clarity', ko: '복잡한 매개/조절 모델이 명확성이 필요할 때' },
    ],
    dontUseWhen: [
      { en: 'Still in early conceptualization (variables not defined)', ko: '아직 초기 개념화 단계일 때 (변수가 정의되지 않음)' },
      { en: 'Qualitative study without predetermined framework', ko: '사전 결정된 프레임워크 없는 질적 연구' },
      { en: 'Simple X→Y relationship (doesn\'t need visualization)', ko: '단순 X→Y 관계 (시각화 필요 없음)' },
    ],
    alternativeAgents: [
      { agentId: 'A2', condition: { en: 'You need a theoretical framework, not a visualization of one', ko: '시각화가 아닌 이론적 프레임워크가 필요할 때' } },
      { agentId: 'A3', condition: { en: 'You want critique of your framework logic, not visualization', ko: '시각화가 아닌 프레임워크 논리의 비판을 원할 때' } },
    ],
  },

  journey: {
    startState: {
      en: 'You have variables and relationships in your head or in text, but no professional visual representation.',
      ko: '머리나 텍스트에 변수와 관계가 있지만, 전문적인 시각적 표현이 없습니다.',
    },
    transformation: [
      { en: 'Phase 1: Avoid generic box-and-arrow templates', ko: '1단계: 일반적인 상자-화살표 템플릿 피하기' },
      { en: 'Phase 2: Explore creative layouts (circular, nested, temporal)', ko: '2단계: 창의적 레이아웃 탐색 (원형, 중첩, 시간적)' },
      { en: 'Phase 3: Generate ASCII blueprint for structure', ko: '3단계: 구조를 위한 ASCII 청사진 생성' },
      { en: 'Phase 4: Craft Nanobanana/Gemini prompt for image generation', ko: '4단계: 이미지 생성을 위한 Nanobanana/Gemini 프롬프트 작성' },
      { en: 'Phase 5: Review for academic appropriateness', ko: '5단계: 학술적 적절성 검토' },
    ],
    endState: {
      en: 'A publication-ready conceptual framework diagram that clearly communicates your research model.',
      ko: '연구 모델을 명확하게 전달하는 출판 준비된 개념적 프레임워크 다이어그램.',
    },
    timeEstimate: '20-35 minutes',
  },

  analogies: [
    {
      metaphor: {
        en: 'Like an Architect\'s Blueprint',
        ko: '건축가의 청사진처럼',
      },
      explanation: {
        en: 'A builder doesn\'t work from a vague sketch - they need precise blueprints showing how everything connects. Your conceptual framework diagram is the blueprint for your research: showing readers exactly how your theoretical "building" is structured before they read the construction details.',
        ko: '건축업자는 모호한 스케치로 작업하지 않습니다 - 모든 것이 어떻게 연결되는지 보여주는 정밀한 청사진이 필요합니다. 개념적 프레임워크 다이어그램은 연구의 청사진입니다: 독자들이 건설 세부 사항을 읽기 전에 이론적 "건물"이 어떻게 구조화되어 있는지 정확히 보여줍니다.',
      },
    },
    {
      metaphor: {
        en: 'Like a Movie Trailer',
        ko: '영화 예고편처럼',
      },
      explanation: {
        en: 'A good trailer shows you the essence of a movie in 2 minutes - the characters, relationships, and tension. Your conceptual framework diagram should do the same: showing reviewers the essence of your research story at a glance, making them want to read the full manuscript.',
        ko: '좋은 예고편은 2분 안에 영화의 본질을 보여줍니다 - 캐릭터, 관계, 긴장감. 개념적 프레임워크 다이어그램도 마찬가지입니다: 리뷰어들에게 한눈에 연구 이야기의 본질을 보여주고, 전체 원고를 읽고 싶게 만듭니다.',
      },
    },
  ],

  proTips: [
    {
      tip: {
        en: 'Always include a legend for your diagram symbols, especially if using creative layouts. Reviewers shouldn\'t guess what shapes mean.',
        ko: '특히 창의적 레이아웃을 사용할 때 다이어그램 기호에 대한 범례를 항상 포함하세요. 리뷰어가 모양의 의미를 추측해서는 안 됩니다.',
      },
      source: { en: 'Journal figure guidelines', ko: '저널 그림 가이드라인' },
      difficulty: 'beginner',
    },
    {
      tip: {
        en: 'For SEM/path models, A6 can generate diagrams that match software conventions (AMOS, Mplus circles for latents, rectangles for observed). Specify your software in the prompt.',
        ko: 'SEM/경로 모델의 경우, A6는 소프트웨어 규칙(잠재 변수는 AMOS, Mplus 원, 관측 변수는 직사각형)에 맞는 다이어그램을 생성할 수 있습니다. 프롬프트에 소프트웨어를 지정하세요.',
      },
      source: { en: 'SEM visualization best practices', ko: 'SEM 시각화 모범 사례' },
      difficulty: 'intermediate',
    },
    {
      tip: {
        en: 'Run A6 AFTER finalizing your variables with A1-A3. A beautiful diagram of a flawed framework is still a flawed framework.',
        ko: 'A1-A3로 변수를 확정한 후 A6를 실행하세요. 결함 있는 프레임워크의 아름다운 다이어그램은 여전히 결함 있는 프레임워크입니다.',
      },
      source: { en: 'Diverga workflow optimization', ko: 'Diverga 워크플로우 최적화' },
      difficulty: 'beginner',
    },
  ],

  badges: [
    { type: 'popular' },
    { type: 'quick' },
  ],

  faq: [
    {
      question: {
        en: 'Can A6 create actual images or just prompts for image generators?',
        ko: 'A6가 실제 이미지를 만들 수 있나요, 아니면 이미지 생성기용 프롬프트만?',
      },
      answer: {
        en: 'A6 creates ASCII blueprints (text-based diagrams) directly, and provides detailed prompts for AI image generators like Gemini/Nanobanana. The final polished image comes from running that prompt through an image generation API.',
        ko: 'A6는 직접 ASCII 청사진(텍스트 기반 다이어그램)을 생성하고, Gemini/Nanobanana와 같은 AI 이미지 생성기를 위한 상세한 프롬프트를 제공합니다. 최종 정제된 이미지는 해당 프롬프트를 이미지 생성 API를 통해 실행하면 나옵니다.',
      },
    },
    {
      question: {
        en: 'What if the AI-generated image isn\'t quite right?',
        ko: 'AI가 생성한 이미지가 정확하지 않으면 어떻게 하나요?',
      },
      answer: {
        en: 'A6\'s Phase 5 includes quality review. If the generated image has issues, A6 can refine the Nanobanana prompt with more specific instructions. Usually 2-3 iterations produce publication-quality results.',
        ko: 'A6의 5단계는 품질 검토를 포함합니다. 생성된 이미지에 문제가 있으면 A6가 더 구체적인 지침으로 Nanobanana 프롬프트를 정제할 수 있습니다. 보통 2-3번의 반복으로 출판 품질의 결과가 나옵니다.',
      },
    },
    {
      question: {
        en: 'Is it acceptable to use AI-generated diagrams in academic publications?',
        ko: 'AI가 생성한 다이어그램을 학술 출판물에 사용해도 되나요?',
      },
      answer: {
        en: 'Yes, but disclose it. Many journals now accept AI-assisted figures with proper attribution. The conceptual work (what goes in the diagram) is yours; the visualization is AI-assisted. Check your target journal\'s AI policy.',
        ko: '네, 하지만 공개하세요. 많은 저널이 이제 적절한 귀속과 함께 AI 지원 그림을 수락합니다. 개념적 작업(다이어그램에 들어가는 것)은 당신 것이고; 시각화는 AI 지원입니다. 대상 저널의 AI 정책을 확인하세요.',
      },
    },
  ],

  outputFormat: {
    sections: [
      { title: 'Layout Options', content: { en: 'Creative visual approaches for your model', ko: '모델에 대한 창의적 시각적 접근 방식' } },
      { title: 'ASCII Blueprint', content: { en: 'Text-based diagram structure', ko: '텍스트 기반 다이어그램 구조' } },
      { title: 'Nanobanana Prompt', content: { en: 'Ready-to-use AI image generation prompt', ko: '바로 사용할 수 있는 AI 이미지 생성 프롬프트' } },
      { title: 'Quality Notes', content: { en: 'Academic style and format recommendations', ko: '학술 스타일 및 형식 권장사항' } },
    ],
  },
};
