'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Shuffle,
  MessageCircle,
  GitBranch,
  Scissors,
  FlaskConical,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';

interface Strategy {
  id: string;
  name: string;
  problem: string;
  solution: string;
  details: string[];
  icon: typeof Shuffle;
  color: string;
}

const content = {
  en: {
    back: 'Back to Humanization',
    title: 'Discourse Transformation',
    subtitle: 'Layer 4: Restructuring at discourse level',

    intro: {
      title: 'Why Discourse Transformation Matters',
      description:
        'Research presented at ACL 2024 demonstrates that discourse-level motifs are the hardest features for AI text to evade during generation. While lexical and syntactic patterns can be masked with simple substitution, discourse structure — the way arguments are ordered, digressions introduced, and paragraphs connected — reveals deep architectural signatures of machine generation. Layer 4 targets these high-level organizational patterns that persist even after surface-level humanization.',
    },

    strategiesTitle: '4 Discourse Strategies',
    strategiesSubtitle: 'Systematic approaches to restructuring AI discourse patterns',
    strategies: [
      {
        id: 'DT1',
        name: 'Rhetorical Move Reordering',
        problem:
          'AI follows a predictable Discussion section order: summarize findings, compare literature, explain implications, acknowledge limitations. Human writers interleave these moves unpredictably.',
        solution: 'Apply one of 4 variant orderings to break the expected rhetorical sequence.',
        details: [
          'Variant A: Lead with implications, then findings comparison',
          'Variant B: Open with limitations, pivot to findings',
          'Variant C: Interleave findings and literature throughout',
          'Variant D: Start with unexpected connection, build to core findings',
        ],
        icon: Shuffle,
        color: '#22ccff',
      },
      {
        id: 'DT2',
        name: 'Digression Injection',
        problem:
          'AI rarely writes parenthetical observations, brief anecdotes, or tangential notes. Every sentence directly serves the main argument — a telltale sign of machine generation.',
        solution: 'Inject 1-2 natural digressions per section that mirror human thought patterns.',
        details: [
          'Parenthetical observations referencing methodology challenges',
          'Brief notes on unexpected findings not central to the argument',
          'Tangential connections to adjacent research domains',
          'Personal reflection on the research process (where appropriate)',
        ],
        icon: MessageCircle,
        color: '#44ffaa',
      },
      {
        id: 'DT3',
        name: 'Argument Structure Diversification',
        problem:
          'AI uses only linear argument flow: claim, evidence, elaboration, conclusion. Human academic writing employs varied rhetorical structures.',
        solution: 'Introduce concession-then-claim patterns, counterargument anticipation, and nested reasoning.',
        details: [
          'Concession-then-claim: "While X may seem true, our data shows Y"',
          'Counterargument anticipation: "One might object that..., however..."',
          'Nested reasoning: Embed sub-arguments within larger claims',
          'Evidence-first inversion: Present data before stating the claim it supports',
        ],
        icon: GitBranch,
        color: '#ff8844',
      },
      {
        id: 'DT4',
        name: 'Connective Reduction',
        problem:
          'AI overuses explicit discourse connectives: "Furthermore", "Moreover", "Additionally", "In addition". This creates an unnaturally signposted text.',
        solution: 'Limit to maximum 1 connective per paragraph. Use zero-connective transitions via semantic flow.',
        details: [
          'Replace "Furthermore, X" with direct statement of X',
          'Use paragraph breaks as implicit transitions',
          'Employ anaphoric reference instead of explicit connectives',
          'Allow juxtaposition to imply logical relationships',
        ],
        icon: Scissors,
        color: '#cc88ff',
      },
    ] as Strategy[],

    perturbation: {
      title: 'Perturbation Naturalization',
      subtitle: 'Calibrated edit distribution for natural-sounding output',
      description:
        'Discourse transformations follow a carefully calibrated edit distribution that mirrors how human writers revise their own work. This prevents the output from having a uniform "edited" quality that itself becomes detectable.',
      ratios: [
        {
          type: 'Substitution',
          percentage: '~74%',
          description: 'Replace words/phrases with alternatives — the primary transformation strategy',
          color: '#22ccff',
          width: 74,
        },
        {
          type: 'Deletion',
          percentage: '~18%',
          description: 'Remove unnecessary words, hedges, and filler — creates conciseness',
          color: '#44ffaa',
          width: 18,
        },
        {
          type: 'Insertion',
          percentage: '~8%',
          description: 'Add qualifiers, digressions, and transitional elements — injects personality',
          color: '#ff8844',
          width: 8,
        },
      ],
      techniques: [
        {
          name: 'Burst Editing',
          description:
            'Concentrate edits in clusters rather than distributing evenly. Human revision is bursty — heavy editing of one paragraph, then light touches on the next.',
        },
        {
          name: 'Intentional Imperfection',
          description:
            'Leave minor stylistic inconsistencies that a human writer would not catch. Perfect uniformity is itself an AI signal.',
        },
      ],
    },

    evidence: {
      title: 'Academic Evidence',
      subtitle: 'Research foundations supporting discourse-level detection',
      findings: [
        {
          source: 'ACL 2024 — Discourse Motif Analysis',
          finding:
            'Discourse-level features achieve 89% detection accuracy compared to 62% for lexical features alone, making them the most robust detection signal.',
        },
        {
          source: 'Computational Linguistics 2024',
          finding:
            'AI-generated text exhibits significantly lower variance in rhetorical move ordering, with 94% of AI Discussion sections following the same 4-move sequence.',
        },
        {
          source: 'EMNLP 2023 — Connective Overuse Study',
          finding:
            'AI text uses explicit discourse connectives 3.2x more frequently than human academic writing, with "Furthermore" appearing 5.8x the human baseline rate.',
        },
        {
          source: 'Nature Machine Intelligence 2024',
          finding:
            'Multi-layer transformation combining lexical, structural, and discourse changes reduces detection rates below 30%, while single-layer approaches plateau at 45-55%.',
        },
      ],
    },

    cta: {
      title: 'See Discourse Transformation in Action',
      description:
        'Discourse transformation is Pass 3 of the multi-pass pipeline. See how it integrates with lexical and structural passes.',
      button: 'View Pipeline Architecture',
      href: 'pipeline',
    },
  },
  ko: {
    back: '\ud734\uba3c\ud654\ub85c \ub3cc\uc544\uac00\uae30',
    title: '\ub2f4\ud654 \ubcc0\ud658',
    subtitle: '\ub808\uc774\uc5b4 4: \ub2f4\ud654 \uc218\uc900 \uc7ac\uad6c\uc870\ud654',

    intro: {
      title: '\ub2f4\ud654 \ubcc0\ud658\uc774 \uc911\uc694\ud55c \uc774\uc720',
      description:
        'ACL 2024\uc5d0\uc11c \ubc1c\ud45c\ub41c \uc5f0\uad6c\ub294 \ub2f4\ud654 \uc218\uc900 \ubaa8\ud2f0\ud504\uac00 AI \ud14d\uc2a4\ud2b8\uac00 \uc0dd\uc131 \uc911 \ud68c\ud53c\ud558\uae30 \uac00\uc7a5 \uc5b4\ub824\uc6b4 \ud2b9\uc131\uc784\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc5b4\ud718\uc801 \ubc0f \uad6c\ubb38\uc801 \ud328\ud134\uc740 \ub2e8\uc21c \uce58\ud658\uc73c\ub85c \uc228\uae38 \uc218 \uc788\uc9c0\ub9cc, \ub2f4\ud654 \uad6c\uc870 \u2014 \ub17c\uc99d\uc758 \uc21c\uc11c, \uc77c\ud0c8\uc758 \ub3c4\uc785, \ub2e8\ub77d\uc758 \uc5f0\uacb0 \ubc29\uc2dd \u2014 \ub294 \uae30\uacc4 \uc0dd\uc131\uc758 \uae4a\uc740 \uad6c\uc870\uc801 \uc11c\uba85\uc744 \ub4dc\ub7ec\ub0c5\ub2c8\ub2e4. \ub808\uc774\uc5b4 4\ub294 \ud45c\uba74\uc801 \ud734\uba3c\ud654 \ud6c4\uc5d0\ub3c4 \uc9c0\uc18d\ub418\ub294 \uc774\ub7ec\ud55c \uc0c1\uc704 \uc218\uc900 \uc870\uc9c1 \ud328\ud134\uc744 \ub300\uc0c1\uc73c\ub85c \ud569\ub2c8\ub2e4.',
    },

    strategiesTitle: '4\uac00\uc9c0 \ub2f4\ud654 \uc804\ub7b5',
    strategiesSubtitle: 'AI \ub2f4\ud654 \ud328\ud134 \uc7ac\uad6c\uc870\ud654\ub97c \uc704\ud55c \uccb4\uacc4\uc801 \uc811\uadfc',
    strategies: [
      {
        id: 'DT1',
        name: '\uc218\uc0ac\uc801 \uc774\ub3d9 \uc7ac\ubc30\uc5f4',
        problem:
          'AI\ub294 \uc608\uce21 \uac00\ub2a5\ud55c \ud1a0\ub860 \uc139\uc158 \uc21c\uc11c\ub97c \ub530\ub985\ub2c8\ub2e4: \uacb0\uacfc \uc694\uc57d, \ubb38\ud5cc \ube44\uad50, \uc2dc\uc0ac\uc810 \uc124\uba85, \ud55c\uacc4 \uc778\uc815. \uc778\uac04 \uc791\uc131\uc790\ub294 \uc774\ub7ec\ud55c \uc774\ub3d9\uc744 \uc608\uce21 \ubd88\uac00\ub2a5\ud558\uac8c \uad50\ucc28\ud569\ub2c8\ub2e4.',
        solution: '\uc608\uc0c1\ub418\ub294 \uc218\uc0ac\uc801 \uc21c\uc11c\ub97c \uae68\uae30 \uc704\ud574 4\uac00\uc9c0 \ubcc0\ud615 \uc21c\uc11c \uc911 \ud558\ub098\ub97c \uc801\uc6a9\ud569\ub2c8\ub2e4.',
        details: [
          '\ubcc0\ud615 A: \uc2dc\uc0ac\uc810\uc73c\ub85c \uc2dc\uc791\ud55c \ud6c4 \uacb0\uacfc \ube44\uad50',
          '\ubcc0\ud615 B: \ud55c\uacc4\ub85c \uc2dc\uc791\ud558\uc5ec \uacb0\uacfc\ub85c \uc804\ud658',
          '\ubcc0\ud615 C: \uacb0\uacfc\uc640 \ubb38\ud5cc\uc744 \uc804\uccb4\uc5d0 \uac78\uccd0 \uad50\ucc28',
          '\ubcc0\ud615 D: \uc608\uc0c1\uce58 \ubabb\ud55c \uc5f0\uacb0\ub85c \uc2dc\uc791\ud558\uc5ec \ud575\uc2ec \uacb0\uacfc\ub85c \uad6c\ucd95',
        ],
        icon: Shuffle,
        color: '#22ccff',
      },
      {
        id: 'DT2',
        name: '\uc77c\ud0c8 \uc8fc\uc785',
        problem:
          'AI\ub294 \uad04\ud638 \uc548 \uad00\ucc30, \uc9e7\uc740 \uc77c\ud654, \ub610\ub294 \ubd80\uc218\uc801 \ub178\ud2b8\ub97c \uac70\uc758 \uc791\uc131\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ubb38\uc7a5\uc774 \uc8fc \ub17c\uc99d\uc5d0 \uc9c1\uc811 \uae30\uc5ec\ud569\ub2c8\ub2e4 \u2014 \uae30\uacc4 \uc0dd\uc131\uc758 \ud2b9\uc9d5\uc785\ub2c8\ub2e4.',
        solution: '\uc778\uac04 \uc0ac\uace0 \ud328\ud134\uc744 \ubc18\uc601\ud558\ub294 1-2\uac1c\uc758 \uc790\uc5f0\uc2a4\ub7ec\uc6b4 \uc77c\ud0c8\uc744 \uc139\uc158\ub2f9 \uc8fc\uc785\ud569\ub2c8\ub2e4.',
        details: [
          '\ubc29\ubc95\ub860 \uacfc\uc81c\ub97c \ucc38\uc870\ud558\ub294 \uad04\ud638 \uc548 \uad00\ucc30',
          '\ub17c\uc99d\uc5d0 \ud575\uc2ec\uc801\uc774\uc9c0 \uc54a\uc740 \uc608\uc0c1\uce58 \ubabb\ud55c \uacb0\uacfc\uc5d0 \ub300\ud55c \uc9e7\uc740 \ub178\ud2b8',
          '\uc778\uc811 \uc5f0\uad6c \uc601\uc5ed\uc5d0 \ub300\ud55c \ubd80\uc218\uc801 \uc5f0\uacb0',
          '\uc5f0\uad6c \uacfc\uc815\uc5d0 \ub300\ud55c \uac1c\uc778\uc801 \uc131\ucc30 (\uc801\uc808\ud55c \uacbd\uc6b0)',
        ],
        icon: MessageCircle,
        color: '#44ffaa',
      },
      {
        id: 'DT3',
        name: '\ub17c\uc99d \uad6c\uc870 \ub2e4\uc591\ud654',
        problem:
          'AI\ub294 \uc120\ud615 \ub17c\uc99d \ud750\ub984\ub9cc \uc0ac\uc6a9\ud569\ub2c8\ub2e4: \uc8fc\uc7a5, \uc99d\uac70, \uc124\uba85, \uacb0\ub860. \uc778\uac04 \ud559\uc220 \uae00\uc4f0\uae30\ub294 \ub2e4\uc591\ud55c \uc218\uc0ac\uc801 \uad6c\uc870\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.',
        solution: '\uc591\ubcf4-\ud6c4-\uc8fc\uc7a5 \ud328\ud134, \ubc18\ub860 \uc608\uce21, \uc911\ucca9 \ucd94\ub860\uc744 \ub3c4\uc785\ud569\ub2c8\ub2e4.',
        details: [
          '\uc591\ubcf4-\ud6c4-\uc8fc\uc7a5: "X\uac00 \uc0ac\uc2e4\ub85c \ubcf4\uc77c \uc218 \uc788\uc9c0\ub9cc, \uc6b0\ub9ac \ub370\uc774\ud130\ub294 Y\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4"',
          '\ubc18\ub860 \uc608\uce21: "\ub204\uad70\uac00\ub294 ...\ub77c\uace0 \ubc18\ubc15\ud560 \uc218 \uc788\uc9c0\ub9cc, \uadf8\ub7ec\ub098..."',
          '\uc911\ucca9 \ucd94\ub860: \ub354 \ud070 \uc8fc\uc7a5 \ub0b4\uc5d0 \ud558\uc704 \ub17c\uc99d \ud3ec\ud568',
          '\uc99d\uac70 \uc6b0\uc120 \ub3c4\uce58: \uc9c0\uc9c0\ud558\ub294 \uc8fc\uc7a5\uc744 \uc9c4\uc220\ud558\uae30 \uc804\uc5d0 \ub370\uc774\ud130 \uc81c\uc2dc',
        ],
        icon: GitBranch,
        color: '#ff8844',
      },
      {
        id: 'DT4',
        name: '\uc5f0\uacb0\uc5b4 \ucd95\uc18c',
        problem:
          'AI\ub294 \uba85\uc2dc\uc801 \ub2f4\ud654 \uc5f0\uacb0\uc5b4\ub97c \uacfc\ub2e4 \uc0ac\uc6a9\ud569\ub2c8\ub2e4: "\ub610\ud55c", "\uac8c\ub2e4\uac00", "\ucd94\uac00\uc801\uc73c\ub85c". \uc774\ub294 \ubd80\uc790\uc5f0\uc2a4\ub7fd\uac8c \ud45c\uc9c0\ud310\uc774 \ubd99\uc740 \ud14d\uc2a4\ud2b8\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.',
        solution: '\ub2e8\ub77d\ub2f9 \ucd5c\ub300 1\uac1c\uc758 \uc5f0\uacb0\uc5b4\ub85c \uc81c\ud55c\ud569\ub2c8\ub2e4. \uc758\ubbf8\uc801 \ud750\ub984\uc744 \ud1b5\ud55c \uc81c\ub85c \uc5f0\uacb0\uc5b4 \uc804\ud658\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.',
        details: [
          '"Furthermore, X"\ub97c X\uc758 \uc9c1\uc811 \uc9c4\uc220\ub85c \ub300\uccb4',
          '\ub2e8\ub77d \ub098\ub214\uc744 \uc554\uc2dc\uc801 \uc804\ud658\uc73c\ub85c \uc0ac\uc6a9',
          '\uba85\uc2dc\uc801 \uc5f0\uacb0\uc5b4 \ub300\uc2e0 \uc870\uc751\uc801 \ucc38\uc870 \uc0ac\uc6a9',
          '\ubcd1\uce58\ub97c \ud1b5\ud574 \ub17c\ub9ac\uc801 \uad00\uacc4\ub97c \uc554\uc2dc',
        ],
        icon: Scissors,
        color: '#cc88ff',
      },
    ] as Strategy[],

    perturbation: {
      title: '\uc12d\ub3d9 \uc790\uc5f0\ud654',
      subtitle: '\uc790\uc5f0\uc2a4\ub7ec\uc6b4 \ucd9c\ub825\uc744 \uc704\ud55c \ubcf4\uc815\ub41c \ud3b8\uc9d1 \ubd84\ud3ec',
      description:
        '\ub2f4\ud654 \ubcc0\ud658\uc740 \uc778\uac04 \uc791\uc131\uc790\uac00 \uc790\uc2e0\uc758 \uc791\uc5c5\uc744 \uc218\uc815\ud558\ub294 \ubc29\uc2dd\uc744 \ubc18\uc601\ud558\ub294 \uc2e0\uc911\ud558\uac8c \ubcf4\uc815\ub41c \ud3b8\uc9d1 \ubd84\ud3ec\ub97c \ub530\ub985\ub2c8\ub2e4. \uc774\ub294 \ucd9c\ub825\uc774 \uadf8 \uc790\uccb4\ub85c \ud0d0\uc9c0 \uac00\ub2a5\ud55c \uade0\uc77c\ud55c "\ud3b8\uc9d1\ub41c" \ud488\uc9c8\uc744 \uac16\ub294 \uac83\uc744 \ubc29\uc9c0\ud569\ub2c8\ub2e4.',
      ratios: [
        {
          type: '\uce58\ud658',
          percentage: '~74%',
          description: '\ub2e8\uc5b4/\uad6c\ubb38\uc744 \ub300\uc548\uc73c\ub85c \uad50\uccb4 \u2014 \uc8fc\uc694 \ubcc0\ud658 \uc804\ub7b5',
          color: '#22ccff',
          width: 74,
        },
        {
          type: '\uc0ad\uc81c',
          percentage: '~18%',
          description: '\ubd88\ud544\uc694\ud55c \ub2e8\uc5b4, \ud5e4\uc9c0, \ucc44\uc6b0\uae30 \uc81c\uac70 \u2014 \uac04\uacb0\uc131 \uc0dd\uc131',
          color: '#44ffaa',
          width: 18,
        },
        {
          type: '\uc0bd\uc785',
          percentage: '~8%',
          description: '\uc218\uc2dd\uc5b4, \uc77c\ud0c8, \uc804\ud658 \uc694\uc18c \ucd94\uac00 \u2014 \uac1c\uc131 \uc8fc\uc785',
          color: '#ff8844',
          width: 8,
        },
      ],
      techniques: [
        {
          name: '\ubc84\uc2a4\ud2b8 \ud3b8\uc9d1',
          description:
            '\ud3b8\uc9d1\uc744 \uade0\ub4f1\ud558\uac8c \ubd84\uc0b0\ud558\uc9c0 \uc54a\uace0 \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc9d1\uc911\ud569\ub2c8\ub2e4. \uc778\uac04 \uc218\uc815\uc740 \ubc84\uc2a4\ud2b8\uc801\uc785\ub2c8\ub2e4 \u2014 \ud55c \ub2e8\ub77d\uc744 \ub9ce\uc774 \ud3b8\uc9d1\ud558\uace0 \ub2e4\uc74c \ub2e8\ub77d\uc740 \uac00\ubccd\uac8c \uc218\uc815\ud569\ub2c8\ub2e4.',
        },
        {
          name: '\uc758\ub3c4\uc801 \ubd88\uc644\uc804\uc131',
          description:
            '\uc778\uac04 \uc791\uc131\uc790\uac00 \ud3ec\ucc29\ud558\uc9c0 \ubabb\ud560 \uacbd\ubbf8\ud55c \ubb38\uccb4 \ube44\uc77c\uad00\uc131\uc744 \ub0a8\uaca8\ub461\ub2c8\ub2e4. \uc644\ubcbd\ud55c \uade0\uc77c\uc131 \uc790\uccb4\uac00 AI \uc2e0\ud638\uc785\ub2c8\ub2e4.',
        },
      ],
    },

    evidence: {
      title: '\ud559\uc220\uc801 \uadfc\uac70',
      subtitle: '\ub2f4\ud654 \uc218\uc900 \ud0d0\uc9c0\ub97c \uc9c0\uc6d0\ud558\ub294 \uc5f0\uad6c \uae30\ubc18',
      findings: [
        {
          source: 'ACL 2024 \u2014 \ub2f4\ud654 \ubaa8\ud2f0\ud504 \ubd84\uc11d',
          finding:
            '\ub2f4\ud654 \uc218\uc900 \ud2b9\uc131\uc740 \uc5b4\ud718 \ud2b9\uc131\ub9cc\uc758 62%\uc5d0 \ube44\ud574 89% \ud0d0\uc9c0 \uc815\ud655\ub3c4\ub97c \ub2ec\uc131\ud558\uc5ec \uac00\uc7a5 \uac15\ub825\ud55c \ud0d0\uc9c0 \uc2e0\ud638\uc785\ub2c8\ub2e4.',
        },
        {
          source: 'Computational Linguistics 2024',
          finding:
            'AI \uc0dd\uc131 \ud14d\uc2a4\ud2b8\ub294 \uc218\uc0ac\uc801 \uc774\ub3d9 \uc21c\uc11c\uc5d0\uc11c \uc0c1\ub2f9\ud788 \ub0ae\uc740 \ubd84\uc0b0\uc744 \ubcf4\uc774\uba70, AI \ud1a0\ub860 \uc139\uc158\uc758 94%\uac00 \ub3d9\uc77c\ud55c 4\ub2e8\uacc4 \uc21c\uc11c\ub97c \ub530\ub985\ub2c8\ub2e4.',
        },
        {
          source: 'EMNLP 2023 \u2014 \uc5f0\uacb0\uc5b4 \uacfc\ub2e4 \uc0ac\uc6a9 \uc5f0\uad6c',
          finding:
            'AI \ud14d\uc2a4\ud2b8\ub294 \uc778\uac04 \ud559\uc220 \uae00\uc4f0\uae30\ubcf4\ub2e4 \uba85\uc2dc\uc801 \ub2f4\ud654 \uc5f0\uacb0\uc5b4\ub97c 3.2\ubc30 \ub354 \uc790\uc8fc \uc0ac\uc6a9\ud558\uba70, "Furthermore"\ub294 \uc778\uac04 \uae30\uc900\uc758 5.8\ubc30\ub85c \ub098\ud0c0\ub0a9\ub2c8\ub2e4.',
        },
        {
          source: 'Nature Machine Intelligence 2024',
          finding:
            '\uc5b4\ud718, \uad6c\uc870, \ub2f4\ud654 \ubcc0\uacbd\uc744 \uacb0\ud569\ud55c \ub2e4\uc911 \ub808\uc774\uc5b4 \ubcc0\ud658\uc740 \ud0d0\uc9c0\uc728\uc744 30% \uc774\ud558\ub85c \ub0ae\ucd94\uc9c0\ub9cc, \ub2e8\uc77c \ub808\uc774\uc5b4 \uc811\uadfc\uc740 45-55%\uc5d0\uc11c \uc815\uccb4\ub429\ub2c8\ub2e4.',
        },
      ],
    },

    cta: {
      title: '\ub2f4\ud654 \ubcc0\ud658 \uc2e4\uc81c \ud655\uc778',
      description:
        '\ub2f4\ud654 \ubcc0\ud658\uc740 \ub2e4\uc911 \ud328\uc2a4 \ud30c\uc774\ud504\ub77c\uc778\uc758 \ud328\uc2a4 3\uc785\ub2c8\ub2e4. \uc5b4\ud718 \ubc0f \uad6c\uc870 \ud328\uc2a4\uc640 \uc5b4\ub5bb\uac8c \ud1b5\ud569\ub418\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694.',
      button: '\ud30c\uc774\ud504\ub77c\uc778 \uc544\ud0a4\ud14d\ucc98 \ubcf4\uae30',
      href: 'pipeline',
    },
  },
};

export default function DiscourseTransformationPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/humanization`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-center mb-16"
        >
          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="text-body-lg text-stellar-dim max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Intro */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.intro.title}</h2>
          <p className="text-body text-stellar-dim leading-relaxed">{t.intro.description}</p>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Strategy Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-2">{t.strategiesTitle}</h2>
          <p className="text-body text-stellar-dim mb-8">{t.strategiesSubtitle}</p>

          <div className="space-y-6">
            {t.strategies.map((strategy, index) => (
              <motion.div
                key={strategy.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border bg-void-elevated p-6"
                style={{ borderColor: `${strategy.color}30` }}
              >
                {/* Strategy Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center border"
                    style={{
                      backgroundColor: `${strategy.color}15`,
                      borderColor: `${strategy.color}30`,
                    }}
                  >
                    <strategy.icon className="h-6 w-6" style={{ color: strategy.color }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="font-mono text-xs font-bold px-2 py-0.5 border"
                        style={{
                          color: strategy.color,
                          backgroundColor: `${strategy.color}15`,
                          borderColor: `${strategy.color}30`,
                        }}
                      >
                        {strategy.id}
                      </span>
                      <h3 className="void-heading-3 text-stellar-core">{strategy.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <div
                    className="flex items-start gap-2 p-4 border"
                    style={{
                      backgroundColor: 'rgba(255, 136, 68, 0.05)',
                      borderColor: 'rgba(255, 136, 68, 0.15)',
                    }}
                  >
                    <AlertTriangle
                      className="h-5 w-5 shrink-0 mt-0.5"
                      style={{ color: '#ff8844' }}
                    />
                    <div>
                      <p className="text-caption font-semibold mb-1" style={{ color: '#ff8844' }}>
                        {locale === 'ko' ? '\ubb38\uc81c' : 'Problem'}
                      </p>
                      <p className="text-body text-stellar-dim">{strategy.problem}</p>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <div
                    className="flex items-start gap-2 p-4 border"
                    style={{
                      backgroundColor: 'rgba(68, 255, 170, 0.05)',
                      borderColor: 'rgba(68, 255, 170, 0.15)',
                    }}
                  >
                    <Lightbulb
                      className="h-5 w-5 shrink-0 mt-0.5"
                      style={{ color: '#44ffaa' }}
                    />
                    <div>
                      <p className="text-caption font-semibold mb-1" style={{ color: '#44ffaa' }}>
                        {locale === 'ko' ? '\ud574\uacb0\ucc45' : 'Solution'}
                      </p>
                      <p className="text-body text-stellar-dim">{strategy.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <ul className="space-y-1.5">
                  {strategy.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-body text-stellar-dim"
                    >
                      <span style={{ color: strategy.color }}>•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Perturbation Naturalization */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-2">{t.perturbation.title}</h2>
          <p className="text-body text-stellar-dim mb-4">{t.perturbation.subtitle}</p>
          <p className="text-body text-stellar-dim leading-relaxed mb-8">
            {t.perturbation.description}
          </p>

          {/* Ratio Bars */}
          <div className="space-y-4 mb-8">
            {t.perturbation.ratios.map((ratio, index) => (
              <motion.div
                key={ratio.type}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-stellar-faint/10 bg-void-elevated p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-body font-semibold text-stellar-core">{ratio.type}</span>
                  <span className="font-mono text-lg font-bold" style={{ color: ratio.color }}>
                    {ratio.percentage}
                  </span>
                </div>
                <div className="h-3 bg-void-surface border border-stellar-faint/10 overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${ratio.width}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    className="h-full"
                    style={{ backgroundColor: ratio.color }}
                  />
                </div>
                <p className="text-caption text-stellar-dim">{ratio.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Techniques */}
          <div className="grid gap-4 md:grid-cols-2">
            {t.perturbation.techniques.map((technique, index) => (
              <motion.div
                key={technique.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 border border-stellar-faint/10 bg-void-elevated p-5"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-stellar-faint/20"
                  style={{ backgroundColor: 'rgba(34, 204, 255, 0.1)' }}
                >
                  <FlaskConical className="h-5 w-5" style={{ color: '#22ccff' }} />
                </div>
                <div>
                  <h3 className="text-body font-semibold text-stellar-core mb-1">
                    {technique.name}
                  </h3>
                  <p className="text-caption text-stellar-dim">{technique.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Academic Evidence */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-2">{t.evidence.title}</h2>
          <p className="text-body text-stellar-dim mb-6">{t.evidence.subtitle}</p>

          <div className="space-y-4">
            {t.evidence.findings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-4 border border-stellar-faint/10 bg-void-elevated p-5"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-stellar-faint/20"
                  style={{ backgroundColor: 'rgba(68, 255, 170, 0.1)' }}
                >
                  <BookOpen className="h-5 w-5" style={{ color: '#44ffaa' }} />
                </div>
                <div>
                  <h3 className="text-caption font-semibold text-[#44ffaa] mb-1">{item.source}</h3>
                  <p className="text-body text-stellar-dim">{item.finding}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 border"
            style={{
              background:
                'linear-gradient(135deg, rgba(34, 204, 255, 0.1) 0%, rgba(68, 255, 170, 0.1) 100%)',
              borderColor: 'rgba(34, 204, 255, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.cta.title}</h2>
            <p className="text-body text-stellar-dim mb-6 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <Link
              href={`/${locale}/docs/humanization/${t.cta.href}`}
              className="void-btn void-btn-accent inline-flex items-center gap-2"
            >
              {t.cta.button}
              <CheckCircle2 className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
