'use client';

import { useLocale } from 'next-intl';

export default function AIPatternsPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'AI Pattern Detection',
      subtitle: '28 Pattern Categories for Academic Writing',
      intro:
        'Based on Wikipedia\'s AI Cleanup initiative, adapted for academic writing. G5-AcademicStyleAuditor detects these patterns to identify AI-generated text.',
      categories: [
        {
          name: 'Content Patterns (C1-C6)',
          patterns: [
            {
              id: 'C1',
              name: 'Significance Inflation',
              risk: 'HIGH',
              description: 'Exaggerated claims about research impact',
              examples: [
                'groundbreaking',
                'revolutionary',
                'paradigm shift',
              ],
              before: 'This groundbreaking research revolutionizes...',
              after: 'This research advances understanding of...',
            },
            {
              id: 'C2',
              name: 'Notability Claims',
              risk: 'MEDIUM',
              description: 'Vague assertions of importance without evidence',
              examples: ['widely recognized', 'notable', 'well-known'],
              before: 'This widely recognized approach...',
              after: 'This approach, used in multiple studies...',
            },
            {
              id: 'C3',
              name: 'Superficial -ing Constructions',
              risk: 'MEDIUM',
              description: 'Generic present participle phrases',
              examples: [
                'highlighting the importance',
                'demonstrating the value',
              ],
              before: 'The findings, highlighting the importance of...',
              after: 'The findings show that...',
            },
            {
              id: 'C4',
              name: 'Promotional Language',
              risk: 'HIGH',
              description: 'Subjective evaluative language',
              examples: ['impressive', 'remarkable', 'outstanding'],
              before: 'The results show impressive improvements...',
              after: 'The results show substantial improvements...',
            },
            {
              id: 'C5',
              name: 'Vague Attributions',
              risk: 'HIGH',
              description: 'Non-specific source references',
              examples: ['some researchers suggest', 'it is believed'],
              before: 'Some researchers suggest that...',
              after: 'Smith et al. (2023) found that...',
            },
            {
              id: 'C6',
              name: 'Formulaic Section Openings',
              risk: 'LOW',
              description: 'Predictable transition phrases',
              examples: ['In conclusion', 'It is worth noting'],
              before: 'In conclusion, this study...',
              after: 'This study demonstrates...',
            },
          ],
        },
        {
          name: 'Language Patterns (L1-L6)',
          patterns: [
            {
              id: 'L1',
              name: 'AI Vocabulary Clustering',
              risk: 'HIGH',
              description: 'Overuse of AI-favored words',
              examples: [
                'delve',
                'crucial',
                'leverage',
                'foster',
                'intricate',
              ],
              before: 'This study delves into the crucial role of...',
              after: 'This study examines the important role of...',
            },
            {
              id: 'L2',
              name: 'Copula Avoidance',
              risk: 'MEDIUM',
              description: 'Avoiding simple "is/are" verbs',
              examples: ['serves as', 'acts as', 'functions as'],
              before: 'The framework serves as a guide...',
              after: 'The framework guides...',
            },
            {
              id: 'L3',
              name: 'Negative Parallelism',
              risk: 'LOW',
              description: 'Overuse of "not just X but also Y"',
              examples: ['not just X but also Y', 'not only X but Y'],
              before: 'Not just effective but also efficient...',
              after: 'Both effective and efficient...',
            },
            {
              id: 'L4',
              name: 'Rule of Three',
              risk: 'MEDIUM',
              description: 'Excessive triplet patterns',
              examples: ['"X, Y, and Z" in every paragraph'],
              before: 'The method is robust, reliable, and rigorous...',
              after: 'The method is reliable...',
            },
            {
              id: 'L5',
              name: 'Elegant Variation',
              risk: 'LOW',
              description: 'Excessive synonym substitution',
              examples: ['study/research/investigation in same paragraph'],
              before:
                'This research... The investigation... The study...',
              after: 'This study... The study... Our research...',
            },
            {
              id: 'L6',
              name: 'False Ranges',
              risk: 'MEDIUM',
              description: 'Generic opposing pairs',
              examples: ['challenges and opportunities', 'risks and benefits'],
              before: 'AI presents both challenges and opportunities...',
              after: 'AI implementation requires addressing...',
            },
          ],
        },
        {
          name: 'Style Patterns (S1-S6)',
          patterns: [
            {
              id: 'S1',
              name: 'Em Dash Overuse',
              risk: 'MEDIUM',
              description: 'Multiple em dashes per paragraph',
              examples: ['Multiple — dashes — per paragraph'],
              before: 'The results — as expected — show...',
              after: 'The results, as expected, show...',
            },
            {
              id: 'S2',
              name: 'Excessive Boldface',
              risk: 'LOW',
              description: 'Over-emphasis with formatting',
              examples: ['**overly** **emphasized** text'],
              before: '**Significant** improvements in **all** measures',
              after: 'Significant improvements in all measures',
            },
            {
              id: 'S3',
              name: 'Inline-Header Lists',
              risk: 'MEDIUM',
              description: 'Numbered lists in prose',
              examples: ['First, ... Second, ... Third, ...'],
              before: 'First, we analyzed... Second, we compared...',
              after: 'We analyzed X and compared Y...',
            },
            {
              id: 'S4',
              name: 'Title Case Overuse',
              risk: 'LOW',
              description: 'Unnecessary capitalization',
              examples: ['The Importance Of This Finding'],
              before: 'The Key Findings of This Study',
              after: 'The key findings of this study',
            },
            {
              id: 'S5',
              name: 'Emoji Usage',
              risk: 'HIGH',
              description: 'Emojis in academic text',
              examples: ['📊', '✅', '🔬'],
              before: 'The results show 📊 significant...',
              after: 'The results show significant...',
            },
            {
              id: 'S6',
              name: 'Curly Quote Artifacts',
              risk: 'LOW',
              description: 'Mixed quote styles',
              examples: ['Mixed "straight" and "curly" quotes'],
              before: '"This" and "that" with "mixed" styles',
              after: '"This" and "that" with consistent styles',
            },
          ],
        },
        {
          name: 'Structural Patterns (S7-S10)',
          patterns: [
            {
              id: 'S7',
              name: 'Enumeration as Prose',
              risk: 'HIGH',
              description: 'Lists disguised within paragraph form',
              examples: ['Three factors contribute: first... second... third...'],
              before: 'Three key factors contribute to this outcome. First, the methodology ensures... Second, the sample size provides... Third, the analysis technique allows...',
              after: 'The methodology, sample adequacy, and analysis technique each strengthen different aspects of this outcome. The approach ensures rigor while the breadth of data supports generalizability.',
            },
            {
              id: 'S8',
              name: 'Repetitive Paragraph Openers',
              risk: 'HIGH',
              description: 'Same opening pattern repeated across consecutive paragraphs',
              examples: ['This study... This research... This analysis...', 'The results show... The findings indicate... The data suggest...'],
              before: 'The results show that X. ... The results indicate that Y. ... The results suggest that Z.',
              after: 'X emerged as a consistent pattern. Meanwhile, Y offers a contrasting perspective. Perhaps most striking, Z challenges the prevailing assumption.',
            },
            {
              id: 'S9',
              name: 'Formulaic Section Structure',
              risk: 'MEDIUM',
              description: 'Predictable IMRaD layout with template-like transitions',
              examples: ['In this section, we present...', 'The purpose of this study...'],
              before: 'In this section, we present the results of our analysis. The purpose of this study was to examine...',
              after: 'Our analysis yielded three main findings. We set out to examine...',
            },
            {
              id: 'S10',
              name: 'Hypothesis Checklist',
              risk: 'HIGH',
              description: 'Systematic hypothesis-by-hypothesis reporting in identical format',
              examples: ['H1 was supported (p < .05). H2 was not supported (p > .05). H3 was partially supported...'],
              before: 'Hypothesis 1 was supported (β = 0.45, p < .001). Hypothesis 2 was not supported (β = 0.12, p = .34). Hypothesis 3 was partially supported...',
              after: 'Self-efficacy emerged as the strongest predictor (β = 0.45, p < .001), confirming our primary hypothesis. The expected effect of prior experience, however, did not materialize (β = 0.12, p = .34)—a finding we revisit in light of the sample demographics.',
            },
          ],
        },
        {
          name: 'Communication Patterns (M1-M3)',
          patterns: [
            {
              id: 'M1',
              name: 'Meta-Commentary',
              risk: 'HIGH',
              description: 'AI self-reference',
              examples: ['As an AI language model', 'I cannot...'],
              before: 'As an AI language model, I would suggest...',
              after: '[Remove entirely]',
            },
            {
              id: 'M2',
              name: 'Excessive Affirmation',
              risk: 'HIGH',
              description: 'Conversational enthusiasm',
              examples: ['Great question!', 'Absolutely!', 'Indeed!'],
              before: 'Great question! The results show...',
              after: 'The results show...',
            },
            {
              id: 'M3',
              name: 'Apology Hedging',
              risk: 'MEDIUM',
              description: 'Unnecessary apologetic language',
              examples: ['I apologize if this...', 'Sorry for...'],
              before: 'I apologize if this explanation is unclear...',
              after: 'This explanation demonstrates...',
            },
          ],
        },
        {
          name: 'Filler/Hedging Patterns (H1-H3)',
          patterns: [
            {
              id: 'H1',
              name: 'Realm/Landscape Language',
              risk: 'MEDIUM',
              description: 'Generic domain references',
              examples: ['in the realm of', 'landscape of', 'sphere of'],
              before: 'In the realm of educational technology...',
              after: 'In educational technology research...',
            },
            {
              id: 'H2',
              name: 'Excessive Hedging',
              risk: 'MEDIUM',
              description: 'Stacked qualifiers',
              examples: ['could potentially perhaps', 'may possibly'],
              before: 'This could potentially perhaps suggest...',
              after: 'This may suggest...',
            },
            {
              id: 'H3',
              name: 'Redundant Intensifiers',
              risk: 'LOW',
              description: 'Contradictory modifiers',
              examples: ['very unique', 'extremely essential'],
              before: 'This is very unique approach...',
              after: 'This is a unique approach...',
            },
          ],
        },
        {
          name: 'Academic-Specific Patterns (A1-A6)',
          patterns: [
            {
              id: 'A1',
              name: 'Overclaiming',
              risk: 'HIGH',
              description: 'Causal language without evidence',
              examples: ['"X causes Y", "X leads to Y" (in correlational studies)'],
              before: 'AI use causes improved learning outcomes...',
              after: 'AI use is associated with improved outcomes...',
            },
            {
              id: 'A2',
              name: 'Underclaiming',
              risk: 'LOW',
              description: 'Excessive hedging of clear findings',
              examples: ['might possibly suggest', 'could indicate'],
              before: 'Results might possibly suggest a trend...',
              after: 'Results indicate a trend...',
            },
            {
              id: 'A3',
              name: 'Citation Clustering',
              risk: 'LOW',
              description: 'Too many citations in one sentence',
              examples: ['(Author1, 2020; Author2, 2021; Author3, 2022; ...)'],
              before: 'AI is effective (A, 2020; B, 2021; C, 2022; D, 2023)...',
              after: 'Multiple studies support AI effectiveness (A, 2020; B, 2021)...',
            },
            {
              id: 'A4',
              name: 'Methods Boilerplate',
              risk: 'MEDIUM',
              description: 'Generic methodology descriptions',
              examples: ['standard procedures', 'appropriate methods'],
              before: 'Standard procedures were followed...',
              after: 'We conducted semi-structured interviews...',
            },
            {
              id: 'A5',
              name: 'Discussion Formula',
              risk: 'MEDIUM',
              description: 'Predictable discussion structure',
              examples: [
                'Findings align with', 'Consistent with literature',
              ],
              before: 'These findings align with previous research...',
              after: 'Our results extend Smith\'s (2020) findings by...',
            },
            {
              id: 'A6',
              name: 'Implications Inflation',
              risk: 'HIGH',
              description: 'Overstating practical impact',
              examples: [
                'profound implications',
                'transform education',
                'revolutionize',
              ],
              before: 'This has profound implications for society...',
              after: 'This suggests implications for classroom practice...',
            },
          ],
        },
      ],
      vocabularyTiers: {
        title: 'Vocabulary Tier Classification',
        description:
          'G5 categorizes AI-favored vocabulary into three alerting tiers',
        tiers: [
          {
            level: 'Tier 1 - High Alert',
            action: 'Always flag these words',
            words: [
              'delve',
              'dive into',
              'crucial',
              'foster',
              'intricate',
              'intricacies',
              'realm',
              'landscape',
              'multifaceted',
              'comprehensive',
              'underscore',
              'noteworthy',
              'meticulous',
              'leverage',
              'utilize',
              'pivotal',
              'embark',
              'endeavor',
              'unveil',
              'unravel',
              'intriguing',
            ],
          },
          {
            level: 'Tier 2 - Moderate Alert',
            action: 'Flag if clustered (3+ in paragraph)',
            words: [
              'robust',
              'streamline',
              'facilitate',
              'enhance',
              'fundamental',
              'substantial',
              'significant',
              'paramount',
              'innovative',
              'nuanced',
              'sophisticated',
              'compelling',
              'profound',
            ],
          },
          {
            level: 'Tier 3 - Context Check',
            action: 'Evaluate in context only',
            words: [
              'important',
              'effective',
              'relevant',
              'appropriate',
              'demonstrate',
              'indicate',
              'suggest',
              'reveal',
            ],
          },
        ],
      },
      riskLevels: {
        title: 'Risk Level Classification',
        description:
          'Patterns are classified by detection risk and transformation priority',
        levels: [
          {
            risk: 'HIGH',
            color: 'red',
            action: 'Transform in conservative+ modes',
            patterns: [
              'C1 (Significance Inflation)',
              'C4 (Promotional Language)',
              'C5 (Vague Attributions)',
              'L1-Tier1 (AI Vocabulary)',
              'S5 (Emoji Usage)',
              'M1 (Meta-Commentary)',
              'M2 (Excessive Affirmation)',
              'A1 (Overclaiming)',
              'A6 (Implications Inflation)',
              'S7 (Enumeration as Prose)',
              'S8 (Repetitive Paragraph Openers)',
              'S10 (Hypothesis Checklist)',
            ],
          },
          {
            risk: 'MEDIUM',
            color: 'yellow',
            action: 'Transform in balanced+ modes',
            patterns: [
              'C2, C3 (Content)',
              'L2, L4, L6 (Language)',
              'S1, S3 (Style)',
              'S9 (Formulaic Section Structure)',
              'H1, H2 (Hedging)',
              'A4, A5 (Academic)',
            ],
          },
          {
            risk: 'LOW',
            color: 'blue',
            action: 'Transform in aggressive mode only',
            patterns: [
              'C6 (Content)',
              'L3, L5 (Language)',
              'S2, S4, S6 (Style)',
              'H3 (Hedging)',
              'A2, A3 (Academic)',
            ],
          },
        ],
      },
    },
    ko: {
      title: 'AI 패턴 감지',
      subtitle: '학술 글쓰기를 위한 28가지 패턴 카테고리',
      intro:
        'Wikipedia의 AI Cleanup 이니셔티브를 기반으로 학술 글쓰기에 맞게 조정되었습니다. G5-AcademicStyleAuditor가 이러한 패턴을 감지하여 AI 생성 텍스트를 식별합니다.',
      categories: [
        {
          name: '콘텐츠 패턴 (C1-C6)',
          patterns: [
            {
              id: 'C1',
              name: '중요성 과장',
              risk: '높음',
              description: '연구 영향력에 대한 과장된 주장',
              examples: ['획기적인', '혁명적인', '패러다임 전환'],
              before: '이 획기적인 연구는 혁명적으로...',
              after: '이 연구는 이해를 발전시키며...',
            },
            {
              id: 'C2',
              name: '주목성 주장',
              risk: '중간',
              description: '증거 없는 막연한 중요성 주장',
              examples: ['널리 인정받는', '주목할 만한', '잘 알려진'],
              before: '이 널리 인정받는 접근법은...',
              after: '여러 연구에서 사용된 이 접근법은...',
            },
            {
              id: 'C3',
              name: '피상적 -ing 구문',
              risk: '중간',
              description: '일반적인 현재분사 구문',
              examples: ['중요성을 강조하며', '가치를 입증하며'],
              before: '연구 결과는 중요성을 강조하며...',
              after: '연구 결과는 다음을 보여줍니다...',
            },
            {
              id: 'C4',
              name: '홍보성 언어',
              risk: '높음',
              description: '주관적 평가 언어',
              examples: ['인상적인', '놀라운', '뛰어난'],
              before: '결과는 인상적인 개선을 보여줍니다...',
              after: '결과는 상당한 개선을 보여줍니다...',
            },
            {
              id: 'C5',
              name: '모호한 귀속',
              risk: '높음',
              description: '구체적이지 않은 출처 참조',
              examples: ['일부 연구자들은 제안한다', '믿어진다'],
              before: '일부 연구자들은 제안한다...',
              after: 'Smith 등(2023)은 발견했다...',
            },
            {
              id: 'C6',
              name: '형식적 섹션 시작',
              risk: '낮음',
              description: '예측 가능한 전환 구문',
              examples: ['결론적으로', '주목할 만한 것은'],
              before: '결론적으로, 이 연구는...',
              after: '이 연구는 다음을 입증합니다...',
            },
          ],
        },
        {
          name: '언어 패턴 (L1-L6)',
          patterns: [
            {
              id: 'L1',
              name: 'AI 선호 어휘 클러스터링',
              risk: '높음',
              description: 'AI가 선호하는 단어의 과용',
              examples: ['탐구하다', '중요한', '활용하다', '촉진하다', '복잡한'],
              before: '이 연구는 중요한 역할을 탐구합니다...',
              after: '이 연구는 중요한 역할을 검토합니다...',
            },
            {
              id: 'L2',
              name: '연결어 회피',
              risk: '중간',
              description: '단순한 "이다/있다" 동사 회피',
              examples: ['~로서 기능한다', '~로 작용한다'],
              before: '프레임워크는 가이드로서 기능한다...',
              after: '프레임워크는 안내한다...',
            },
            {
              id: 'L3',
              name: '부정적 병렬구조',
              risk: '낮음',
              description: '"X뿐만 아니라 Y도"의 과용',
              examples: ['X뿐만 아니라 Y도', '단지 X만이 아니라 Y도'],
              before: '효과적일 뿐만 아니라 효율적이기도...',
              after: '효과적이고 효율적인...',
            },
            {
              id: 'L4',
              name: '3의 법칙',
              risk: '중간',
              description: '과도한 삼중 패턴',
              examples: ['모든 단락에 X, Y, Z 패턴'],
              before: '방법론은 견고하고, 신뢰할 수 있으며, 엄격합니다...',
              after: '방법론은 신뢰할 수 있습니다...',
            },
            {
              id: 'L5',
              name: '우아한 변주',
              risk: '낮음',
              description: '과도한 동의어 대체',
              examples: ['같은 단락에서 연구/조사/탐구'],
              before: '이 연구는... 조사에서... 탐구는...',
              after: '이 연구는... 연구에서... 우리 연구는...',
            },
            {
              id: 'L6',
              name: '가짜 범위',
              risk: '중간',
              description: '일반적인 대조 쌍',
              examples: ['도전과 기회', '위험과 이익'],
              before: 'AI는 도전과 기회를 모두 제시합니다...',
              after: 'AI 구현은 다음을 다루어야 합니다...',
            },
          ],
        },
        {
          name: '스타일 패턴 (S1-S6)',
          patterns: [
            {
              id: 'S1',
              name: '엠 대시 과용',
              risk: '중간',
              description: '단락당 여러 개의 엠 대시',
              examples: ['단락당 여러 개의 — 대시 —'],
              before: '결과는 — 예상대로 — 보여줍니다...',
              after: '결과는, 예상대로, 보여줍니다...',
            },
            {
              id: 'S2',
              name: '과도한 볼드체',
              risk: '낮음',
              description: '서식을 통한 과도한 강조',
              examples: ['**과도하게** **강조된** 텍스트'],
              before: '**모든** 측정에서 **상당한** 개선',
              after: '모든 측정에서 상당한 개선',
            },
            {
              id: 'S3',
              name: '인라인 헤더 목록',
              risk: '중간',
              description: '산문 내 번호 목록',
              examples: ['첫째, ... 둘째, ... 셋째, ...'],
              before: '첫째, 우리는 분석했고... 둘째, 비교했습니다...',
              after: '우리는 X를 분석하고 Y를 비교했습니다...',
            },
            {
              id: 'S4',
              name: '제목 대문자 과용',
              risk: '낮음',
              description: '불필요한 대문자 사용',
              examples: ['이 발견의 중요성 (각 단어 대문자)'],
              before: '이 연구의 주요 발견',
              after: '이 연구의 주요 발견',
            },
            {
              id: 'S5',
              name: '이모지 사용',
              risk: '높음',
              description: '학술 텍스트의 이모지',
              examples: ['📊', '✅', '🔬'],
              before: '결과는 📊 유의미한...',
              after: '결과는 유의미한...',
            },
            {
              id: 'S6',
              name: '곡선 따옴표 아티팩트',
              risk: '낮음',
              description: '혼합된 따옴표 스타일',
              examples: ['직선 "따옴표"와 곡선 "따옴표" 혼용'],
              before: '"이것"과 \'저것\'과 "혼합된" 스타일',
              after: '"이것"과 "저것"과 일관된 스타일',
            },
          ],
        },
        {
          name: '구조적 패턴 (S7-S10)',
          patterns: [
            {
              id: 'S7',
              name: '산문 내 열거',
              risk: '높음',
              description: '문단 형태로 위장된 목록',
              examples: ['세 가지 요인이 기여합니다: 첫째... 둘째... 셋째...'],
              before: '세 가지 핵심 요인이 이 결과에 기여합니다. 첫째, 방법론이 보장합니다... 둘째, 표본 크기가 제공합니다... 셋째, 분석 기법이 허용합니다...',
              after: '방법론, 표본 적절성, 분석 기법이 각각 이 결과의 다른 측면을 강화합니다. 접근법은 엄밀성을 보장하는 동시에 데이터의 폭이 일반화 가능성을 지원합니다.',
            },
            {
              id: 'S8',
              name: '반복적 문단 시작',
              risk: '높음',
              description: '연속 문단에서 반복되는 동일한 시작 패턴',
              examples: ['이 연구는... 이 연구는... 이 분석은...', '결과는 보여준다... 발견은 나타낸다... 데이터는 시사한다...'],
              before: '결과는 X를 보여준다. ... 결과는 Y를 나타낸다. ... 결과는 Z를 시사한다.',
              after: 'X가 일관된 패턴으로 나타났다. 한편 Y는 대조적 관점을 제공한다. 가장 주목할 만한 것은 Z가 지배적 가정에 도전한다는 점이다.',
            },
            {
              id: 'S9',
              name: '공식적 섹션 구조',
              risk: '중간',
              description: '템플릿 같은 전환이 있는 예측 가능한 IMRaD 레이아웃',
              examples: ['이 섹션에서는 결과를 제시한다...', '이 연구의 목적은...'],
              before: '이 섹션에서는 분석 결과를 제시합니다. 이 연구의 목적은 검토하는 것이었습니다...',
              after: '분석에서 세 가지 주요 발견이 도출되었습니다. 우리는 다음을 검토하고자 했습니다...',
            },
            {
              id: 'S10',
              name: '가설 체크리스트',
              risk: '높음',
              description: '동일한 형식의 체계적 가설별 보고',
              examples: ['가설 1이 지지되었다 (p < .05). 가설 2는 지지되지 않았다 (p > .05). 가설 3은 부분적으로 지지되었다...'],
              before: '가설 1이 지지되었다 (β = 0.45, p < .001). 가설 2는 지지되지 않았다 (β = 0.12, p = .34). 가설 3은 부분적으로 지지되었다...',
              after: '자기효능감이 가장 강력한 예측 변인으로 나타나 (β = 0.45, p < .001) 주요 가설을 확인했다. 그러나 사전 경험의 예상 효과는 나타나지 않았으며 (β = 0.12, p = .34), 이는 표본 인구통계학적 특성을 고려하여 재검토한다.',
            },
          ],
        },
        {
          name: '커뮤니케이션 패턴 (M1-M3)',
          patterns: [
            {
              id: 'M1',
              name: '메타 주석',
              risk: '높음',
              description: 'AI 자기 참조',
              examples: ['AI 언어 모델로서', '저는 ~할 수 없습니다'],
              before: 'AI 언어 모델로서, 제안하자면...',
              after: '[완전히 제거]',
            },
            {
              id: 'M2',
              name: '과도한 긍정',
              risk: '높음',
              description: '대화적 열정',
              examples: ['좋은 질문입니다!', '물론입니다!', '정말로!'],
              before: '좋은 질문입니다! 결과는 보여줍니다...',
              after: '결과는 보여줍니다...',
            },
            {
              id: 'M3',
              name: '사과 헤징',
              risk: '중간',
              description: '불필요한 사과 언어',
              examples: ['죄송합니다만', '미안하지만'],
              before: '이 설명이 불명확하다면 죄송합니다...',
              after: '이 설명은 다음을 보여줍니다...',
            },
          ],
        },
        {
          name: '필러/헤징 패턴 (H1-H3)',
          patterns: [
            {
              id: 'H1',
              name: '영역/풍경 언어',
              risk: '중간',
              description: '일반적인 도메인 참조',
              examples: ['~의 영역에서', '~의 풍경', '~의 영역'],
              before: '교육 기술의 영역에서...',
              after: '교육 기술 연구에서...',
            },
            {
              id: 'H2',
              name: '과도한 헤징',
              risk: '중간',
              description: '누적된 한정사',
              examples: ['~할 수 있을 것으로 아마도', '~일 가능성이'],
              before: '이것은 아마도 제안할 수 있을 것입니다...',
              after: '이것은 제안할 수 있습니다...',
            },
            {
              id: 'H3',
              name: '중복 강화어',
              risk: '낮음',
              description: '모순된 수식어',
              examples: ['매우 독특한', '극도로 필수적인'],
              before: '이것은 매우 독특한 접근법입니다...',
              after: '이것은 독특한 접근법입니다...',
            },
          ],
        },
        {
          name: '학술 특정 패턴 (A1-A6)',
          patterns: [
            {
              id: 'A1',
              name: '과장된 주장',
              risk: '높음',
              description: '증거 없는 인과 언어',
              examples: ['X가 Y를 야기한다', 'X가 Y로 이어진다 (상관관계에서)'],
              before: 'AI 사용이 학습 결과 개선을 야기합니다...',
              after: 'AI 사용은 학습 결과 개선과 관련이 있습니다...',
            },
            {
              id: 'A2',
              name: '과소 주장',
              risk: '낮음',
              description: '명확한 발견의 과도한 헤징',
              examples: ['~일 수도 있다', '~을 나타낼 수 있다'],
              before: '결과는 경향을 제안할 수도 있습니다...',
              after: '결과는 경향을 나타냅니다...',
            },
            {
              id: 'A3',
              name: '인용 클러스터링',
              risk: '낮음',
              description: '한 문장에 너무 많은 인용',
              examples: ['(저자1, 2020; 저자2, 2021; 저자3, 2022; ...)'],
              before: 'AI는 효과적입니다 (A, 2020; B, 2021; C, 2022; D, 2023)...',
              after: '여러 연구가 AI 효과성을 지지합니다 (A, 2020; B, 2021)...',
            },
            {
              id: 'A4',
              name: '방법론 상투어',
              risk: '중간',
              description: '일반적인 방법론 설명',
              examples: ['표준 절차', '적절한 방법'],
              before: '표준 절차가 따라졌습니다...',
              after: '우리는 반구조화된 인터뷰를 수행했습니다...',
            },
            {
              id: 'A5',
              name: '논의 공식',
              risk: '중간',
              description: '예측 가능한 논의 구조',
              examples: ['발견은 일치한다', '문헌과 일관되다'],
              before: '이러한 발견은 이전 연구와 일치합니다...',
              after: '우리의 결과는 Smith(2020)의 발견을 확장합니다...',
            },
            {
              id: 'A6',
              name: '함의 과장',
              risk: '높음',
              description: '실용적 영향의 과장',
              examples: ['심오한 함의', '교육을 변혁', '혁명화'],
              before: '이것은 사회에 심오한 함의를 갖습니다...',
              after: '이것은 교실 실천에 대한 함의를 제안합니다...',
            },
          ],
        },
      ],
      vocabularyTiers: {
        title: '어휘 계층 분류',
        description: 'G5는 AI 선호 어휘를 세 가지 경고 계층으로 분류합니다',
        tiers: [
          {
            level: '계층 1 - 높은 경고',
            action: '항상 이러한 단어를 표시',
            words: [
              'delve (탐구하다)',
              'crucial (중요한)',
              'leverage (활용하다)',
              'foster (촉진하다)',
              'intricate (복잡한)',
              'realm (영역)',
              'landscape (풍경)',
              'multifaceted (다면적인)',
              'comprehensive (포괄적인)',
              'underscore (강조하다)',
              'noteworthy (주목할 만한)',
              'meticulous (세심한)',
              'utilize (활용하다)',
              'pivotal (중추적인)',
              'embark (착수하다)',
              'endeavor (노력)',
              'unveil (드러내다)',
              'unravel (풀다)',
              'intriguing (흥미로운)',
            ],
          },
          {
            level: '계층 2 - 중간 경고',
            action: '클러스터된 경우 표시 (단락당 3개 이상)',
            words: [
              'robust (견고한)',
              'streamline (간소화하다)',
              'facilitate (촉진하다)',
              'enhance (향상시키다)',
              'fundamental (근본적인)',
              'substantial (상당한)',
              'significant (유의미한)',
              'paramount (가장 중요한)',
              'innovative (혁신적인)',
              'nuanced (미묘한)',
              'sophisticated (정교한)',
              'compelling (설득력 있는)',
              'profound (심오한)',
            ],
          },
          {
            level: '계층 3 - 맥락 확인',
            action: '맥락에서만 평가',
            words: [
              'important (중요한)',
              'effective (효과적인)',
              'relevant (관련된)',
              'appropriate (적절한)',
              'demonstrate (입증하다)',
              'indicate (나타내다)',
              'suggest (제안하다)',
              'reveal (드러내다)',
            ],
          },
        ],
      },
      riskLevels: {
        title: '위험 수준 분류',
        description: '패턴은 감지 위험과 변환 우선순위에 따라 분류됩니다',
        levels: [
          {
            risk: '높음',
            color: 'red',
            action: '보수적+ 모드에서 변환',
            patterns: [
              'C1 (중요성 과장)',
              'C4 (홍보성 언어)',
              'C5 (모호한 귀속)',
              'L1-계층1 (AI 어휘)',
              'S5 (이모지 사용)',
              'M1 (메타 주석)',
              'M2 (과도한 긍정)',
              'A1 (과장된 주장)',
              'A6 (함의 과장)',
              'S7 (산문 내 열거)',
              'S8 (반복적 문단 시작)',
              'S10 (가설 체크리스트)',
            ],
          },
          {
            risk: '중간',
            color: 'yellow',
            action: '균형+ 모드에서 변환',
            patterns: [
              'C2, C3 (콘텐츠)',
              'L2, L4, L6 (언어)',
              'S1, S3 (스타일)',
              'S9 (공식적 섹션 구조)',
              'H1, H2 (헤징)',
              'A4, A5 (학술)',
            ],
          },
          {
            risk: '낮음',
            color: 'blue',
            action: '공격적 모드에서만 변환',
            patterns: [
              'C6 (콘텐츠)',
              'L3, L5 (언어)',
              'S2, S4, S6 (스타일)',
              'H3 (헤징)',
              'A2, A3 (학술)',
            ],
          },
        ],
      },
    },
  };

  const t = content[locale];

  const getRiskColor = (risk: string) => {
    const riskLower = risk.toLowerCase();
    if (riskLower === 'high' || risk === '높음') return 'text-red-600 dark:text-red-400';
    if (riskLower === 'medium' || risk === '중간') return 'text-yellow-600 dark:text-yellow-400';
    return 'text-blue-600 dark:text-blue-400';
  };

  const getRiskBadgeColor = (risk: string) => {
    const riskLower = risk.toLowerCase();
    if (riskLower === 'high' || risk === '높음')
      return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
    if (riskLower === 'medium' || risk === '중간')
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-xl text-muted-foreground mb-4">{t.subtitle}</p>
        <p className="text-muted-foreground">{t.intro}</p>
      </div>

      {/* Pattern Categories */}
      <div className="space-y-12 mb-16">
        {t.categories.map((category) => (
          <div key={category.name}>
            <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
            <div className="space-y-6">
              {category.patterns.map((pattern) => (
                <div
                  key={pattern.id}
                  className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  {/* Pattern Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-muted-foreground">
                          {pattern.id}
                        </span>
                        <h3 className="text-lg font-semibold">
                          {pattern.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {pattern.description}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskBadgeColor(
                        pattern.risk
                      )}`}
                    >
                      {pattern.risk}
                    </span>
                  </div>

                  {/* Examples */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">
                      {locale === 'en' ? 'Examples' : '예시'}:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pattern.examples.map((example, idx) => (
                        <code
                          key={idx}
                          className="px-2 py-1 bg-muted rounded text-xs"
                        >
                          {example}
                        </code>
                      ))}
                    </div>
                  </div>

                  {/* Before/After */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-semibold text-red-600 dark:text-red-400 mb-2">
                        {locale === 'en' ? '❌ Before' : '❌ 변환 전'}
                      </h4>
                      <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded p-3 text-sm text-red-900 dark:text-red-200">
                        {pattern.before}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2">
                        {locale === 'en' ? '✅ After' : '✅ 변환 후'}
                      </h4>
                      <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded p-3 text-sm text-green-900 dark:text-green-200">
                        {pattern.after}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Vocabulary Tiers */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {t.vocabularyTiers.title}
        </h2>
        <p className="text-muted-foreground mb-6">
          {t.vocabularyTiers.description}
        </p>
        <div className="space-y-6">
          {t.vocabularyTiers.tiers.map((tier, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{tier.level}</h3>
                <span className="text-sm text-muted-foreground">
                  {tier.action}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tier.words.map((word, wordIdx) => (
                  <code
                    key={wordIdx}
                    className={`px-3 py-1 rounded text-sm ${
                      idx === 0
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                        : idx === 1
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}
                  >
                    {word}
                  </code>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Levels */}
      <div>
        <h2 className="text-3xl font-bold mb-4">{t.riskLevels.title}</h2>
        <p className="text-muted-foreground mb-6">
          {t.riskLevels.description}
        </p>
        <div className="space-y-6">
          {t.riskLevels.levels.map((level) => (
            <div
              key={level.risk}
              className="border border-border rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${getRiskColor(level.risk)}`}>
                  {level.risk === 'HIGH' || level.risk === '높음'
                    ? '🔴 '
                    : level.risk === 'MEDIUM' || level.risk === '중간'
                    ? '🟡 '
                    : '🔵 '}
                  {level.risk}{' '}
                  {locale === 'en' ? 'RISK' : '위험'}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {level.action}
                </span>
              </div>
              <div className="space-y-1">
                {level.patterns.map((pattern, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-muted-foreground pl-4 border-l-2 border-border"
                  >
                    {pattern}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
