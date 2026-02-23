'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Layers,
  Type,
  LayoutGrid,
  MessageSquare,
  Sparkles,
  RotateCcw,
  TrendingDown,
  CheckCircle2,
  AlertCircle,
  Shield,
  Target,
  Gauge,
} from 'lucide-react';

interface Pass {
  number: number;
  name: string;
  intensity: string;
  color: string;
  icon: typeof Type;
  steps: string[];
  checkpoint: string;
  description: string;
}

interface ScoreExample {
  label: string;
  initial: number;
  pass1: number;
  pass23: number;
  color: string;
}

const content = {
  en: {
    back: 'Back to Humanization',
    title: 'Multi-Pass Pipeline',
    subtitle: '4-pass architecture for comprehensive transformation',

    intro: {
      title: 'Why Multi-Pass?',
      description:
        'A single transformation pass cannot address all detection layers simultaneously. Lexical changes may introduce new structural patterns; structural changes may disrupt discourse flow. The multi-pass architecture solves this by dedicating each pass to a specific layer, with feedback loops that detect and revert counterproductive changes. Each pass builds on the previous, progressively reducing the composite score while preserving academic integrity. The entire pipeline is orchestrated by the /diverga:humanize skill, which enforces mandatory checkpoints between every pass.',
    },

    flowTitle: '4-Pass Flow',
    flowSubtitle: 'Each pass targets a specific transformation layer with increasing intensity',
    passes: [
      {
        number: 1,
        name: 'Lexical (Conservative)',
        intensity: 'Conservative',
        color: '#22ccff',
        icon: Type,
        steps: [
          'G5 initial scan — full 13-metric stylometric analysis',
          'G6 Layer 1-2 — lexical substitution and phrase rewriting',
          'F5 quick check — verify citations preserved, score delta',
          'CP_PASS1_REVIEW — checkpoint for human review',
        ],
        checkpoint: 'CP_PASS1_REVIEW',
        description:
          'Targets surface-level AI patterns: cliche phrases, hedging overuse, vocabulary uniformity. Aims for 15-25% composite score reduction with minimal text disruption.',
      },
      {
        number: 2,
        name: 'Structural (Balanced)',
        intensity: 'Balanced',
        color: '#44ffaa',
        icon: LayoutGrid,
        steps: [
          'G5 delta scan — measure improvement from Pass 1',
          'G6 Layer 3 — sentence restructuring, paragraph rebalancing',
          'F5 full check — comprehensive metric verification',
          'CP_PASS2_REVIEW — checkpoint for human review',
        ],
        checkpoint: 'CP_PASS2_REVIEW',
        description:
          'Restructures sentence patterns, paragraph lengths, and opener diversity. Addresses burstiness CV, Fano factor, and paragraph length variance.',
      },
      {
        number: 3,
        name: 'Discourse (Aggressive)',
        intensity: 'Aggressive',
        color: '#ff8844',
        icon: MessageSquare,
        steps: [
          'G5 delta scan — measure improvement from Pass 2',
          'humanizer_discourse() — dedicated discourse analysis',
          'G6 Layer 4 — rhetorical reordering, digression injection, connective reduction',
          'F5 full check — comprehensive metric verification',
          'CP_PASS3_REVIEW — checkpoint for human review',
        ],
        checkpoint: 'CP_PASS3_REVIEW',
        description:
          'Applies the four discourse strategies (DT1-DT4): rhetorical move reordering, digression injection, argument diversification, and connective reduction. The most impactful pass for reducing detection.',
      },
      {
        number: 4,
        name: 'Polish (Optional)',
        intensity: 'Fine-tuning',
        color: '#cc88ff',
        icon: Sparkles,
        steps: [
          'G5 audit — final comprehensive analysis',
          'G6 fine-tuning — micro-adjustments for remaining signals',
          'F5 full check — final metric verification',
          'CP_FINAL_REVIEW — final checkpoint for human review',
        ],
        checkpoint: 'CP_FINAL_REVIEW',
        description:
          'Optional refinement pass for texts that need to reach sub-25% scores. Fine-tunes remaining signals while ensuring no regression from previous passes.',
      },
    ] as Pass[],

    feedback: {
      title: 'Detector-Based Feedback Loop',
      subtitle: 'Automatic reversion prevents counterproductive changes',
      description:
        'After each G6 transformation, G5 rescans the modified text. If the composite score increases — meaning the transformation made the text more detectable — the change is automatically reverted. This feedback loop ensures monotonic score improvement across passes.',
      steps: [
        { label: 'G6 Transform', description: 'Apply transformation to target text region', icon: Sparkles },
        { label: 'G5 Rescan', description: 'Re-analyze transformed text with full metric suite', icon: Gauge },
        { label: 'Score Compare', description: 'Compare new score against pre-transformation baseline', icon: Target },
        { label: 'Accept / Revert', description: 'If score decreased: accept. If score increased: REVERT.', icon: RotateCcw },
      ],
      warning:
        'If a transformation increases the detection score, it is reverted immediately. No counterproductive changes are ever committed to the output.',
    },

    progression: {
      title: 'Score Progression Examples',
      subtitle: 'Real-world composite score reduction across passes',
      examples: [
        {
          label: 'Paper 1 (Management)',
          initial: 80,
          pass1: 62,
          pass23: 31,
          color: '#22ccff',
        },
        {
          label: 'Paper 2 (Psychology)',
          initial: 82,
          pass1: 61,
          pass23: 22,
          color: '#44ffaa',
        },
      ] as ScoreExample[],
    },

    criteria: {
      title: 'Success Criteria',
      subtitle: 'Three conditions that must be met for pipeline completion',
      items: [
        {
          criterion: 'Final Score',
          target: '< 30%',
          description: 'Composite score must fall below the 30% threshold',
          icon: TrendingDown,
          color: '#44ffaa',
        },
        {
          criterion: 'Pass Limit',
          target: '\u2264 3 passes',
          description: 'Target should be met within 3 passes; Pass 4 is optional refinement only',
          icon: Layers,
          color: '#22ccff',
        },
        {
          criterion: 'Citation Preservation',
          target: '100%',
          description: 'Every citation, reference, and statistic must be preserved exactly',
          icon: Shield,
          color: '#cc88ff',
        },
      ],
    },

    cta: {
      title: 'Dive Deeper Into Each Layer',
      description:
        'Explore the metrics that drive each pass, or learn about the discourse strategies used in Pass 3.',
      buttons: [
        { label: 'Stylometric Metrics', href: 'metrics' },
        { label: 'Discourse Strategies', href: 'discourse' },
      ],
    },
  },
  ko: {
    back: '\ud734\uba3c\ud654\ub85c \ub3cc\uc544\uac00\uae30',
    title: '\ub2e4\uc911 \ud328\uc2a4 \ud30c\uc774\ud504\ub77c\uc778',
    subtitle: '\ud3ec\uad04\uc801 \ubcc0\ud658\uc744 \uc704\ud55c 4\ud328\uc2a4 \uc544\ud0a4\ud14d\ucc98',

    intro: {
      title: '\uc65c \ub2e4\uc911 \ud328\uc2a4\uc778\uac00?',
      description:
        '\ub2e8\uc77c \ubcc0\ud658 \ud328\uc2a4\ub85c\ub294 \ubaa8\ub4e0 \ud0d0\uc9c0 \ub808\uc774\uc5b4\ub97c \ub3d9\uc2dc\uc5d0 \ud574\uacb0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc5b4\ud718 \ubcc0\uacbd\uc774 \uc0c8\ub85c\uc6b4 \uad6c\uc870\uc801 \ud328\ud134\uc744 \ub3c4\uc785\ud560 \uc218 \uc788\uace0, \uad6c\uc870\uc801 \ubcc0\uacbd\uc774 \ub2f4\ud654 \ud750\ub984\uc744 \ubc29\ud574\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc911 \ud328\uc2a4 \uc544\ud0a4\ud14d\ucc98\ub294 \uac01 \ud328\uc2a4\ub97c \ud2b9\uc815 \ub808\uc774\uc5b4\uc5d0 \ud560\ub2f9\ud558\uace0, \uc5ed\ud6a8\uacfc\uc801\uc778 \ubcc0\uacbd\uc744 \uac10\uc9c0\ud558\uace0 \ub418\ub3cc\ub9ac\ub294 \ud53c\ub4dc\ubc31 \ub8e8\ud504\ub97c \ud1b5\ud574 \uc774\ub97c \ud574\uacb0\ud569\ub2c8\ub2e4. \uac01 \ud328\uc2a4\ub294 \uc774\uc804 \ud328\uc2a4\ub97c \uae30\ubc18\uc73c\ub85c \ud559\uc220\uc801 \ubb34\uacb0\uc131\uc744 \ubcf4\uc874\ud558\uba74\uc11c \ubcf5\ud569 \uc810\uc218\ub97c \uc810\uc9c4\uc801\uc73c\ub85c \ub0ae\ucda5\ub2c8\ub2e4. \uc804\uccb4 \ud30c\uc774\ud504\ub77c\uc778\uc740 /diverga:humanize \uc2a4\ud82c\uc5d0 \uc758\ud574 \uc624\ucf00\uc2a4\ud2b8\ub808\uc774\uc158\ub418\uba70, \ubaa8\ub4e0 \ud328\uc2a4 \uc0ac\uc774\uc5d0 \ud544\uc218 \uccb4\ud06c\ud3ec\uc778\ud2b8\ub97c \uac15\uc81c\ud569\ub2c8\ub2e4.',
    },

    flowTitle: '4\ud328\uc2a4 \ud750\ub984',
    flowSubtitle: '\uac01 \ud328\uc2a4\ub294 \uc99d\uac00\ud558\ub294 \uac15\ub3c4\ub85c \ud2b9\uc815 \ubcc0\ud658 \ub808\uc774\uc5b4\ub97c \ub300\uc0c1\uc73c\ub85c \ud569\ub2c8\ub2e4',
    passes: [
      {
        number: 1,
        name: '\uc5b4\ud718\uc801 (\ubcf4\uc218\uc801)',
        intensity: '\ubcf4\uc218\uc801',
        color: '#22ccff',
        icon: Type,
        steps: [
          'G5 \ucd08\uae30 \uc2a4\ucea0 \u2014 \uc804\uccb4 13\uac1c \uba54\ud2b8\ub9ad \ubb38\uccb4 \ubd84\uc11d',
          'G6 \ub808\uc774\uc5b4 1-2 \u2014 \uc5b4\ud718 \uce58\ud658 \ubc0f \uad6c\ubb38 \uc7ac\uc791\uc131',
          'F5 \ube60\ub978 \ud655\uc778 \u2014 \uc778\uc6a9 \ubcf4\uc874 \ud655\uc778, \uc810\uc218 \ub378\ud0c0',
          'CP_PASS1_REVIEW \u2014 \uc778\uac04 \uac80\ud1a0 \uccb4\ud06c\ud3ec\uc778\ud2b8',
        ],
        checkpoint: 'CP_PASS1_REVIEW',
        description:
          '\ud45c\uba74 \uc218\uc900 AI \ud328\ud134 \ub300\uc0c1: \uc0c1\ud22c\uc801 \ud45c\ud604, \ud5e4\uc9c0 \uacfc\ub2e4 \uc0ac\uc6a9, \uc5b4\ud718 \uade0\uc77c\uc131. \ucd5c\uc18c\ud55c\uc758 \ud14d\uc2a4\ud2b8 \ubcc0\uacbd\uc73c\ub85c 15-25% \ubcf5\ud569 \uc810\uc218 \uac10\uc18c\ub97c \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4.',
      },
      {
        number: 2,
        name: '\uad6c\uc870\uc801 (\uade0\ud615\uc801)',
        intensity: '\uade0\ud615\uc801',
        color: '#44ffaa',
        icon: LayoutGrid,
        steps: [
          'G5 \ub378\ud0c0 \uc2a4\ucea0 \u2014 \ud328\uc2a4 1\uc5d0\uc11c\uc758 \uac1c\uc120 \uce21\uc815',
          'G6 \ub808\uc774\uc5b4 3 \u2014 \ubb38\uc7a5 \uc7ac\uad6c\uc870\ud654, \ub2e8\ub77d \uc7ac\uade0\ud615',
          'F5 \uc804\uccb4 \ud655\uc778 \u2014 \ud3ec\uad04\uc801 \uba54\ud2b8\ub9ad \uac80\uc99d',
          'CP_PASS2_REVIEW \u2014 \uc778\uac04 \uac80\ud1a0 \uccb4\ud06c\ud3ec\uc778\ud2b8',
        ],
        checkpoint: 'CP_PASS2_REVIEW',
        description:
          '\ubb38\uc7a5 \ud328\ud134, \ub2e8\ub77d \uae38\uc774, \ub3c4\uc785\ubd80 \ub2e4\uc591\uc131\uc744 \uc7ac\uad6c\uc131\ud569\ub2c8\ub2e4. \ubc84\uc2a4\ud2f0\ub2c8\uc2a4 CV, \ud30c\ub178 \ud329\ud130, \ub2e8\ub77d \uae38\uc774 \ubd84\uc0b0\uc744 \ub2e4\ub8f9\ub2c8\ub2e4.',
      },
      {
        number: 3,
        name: '\ub2f4\ud654\uc801 (\uc801\uadf9\uc801)',
        intensity: '\uc801\uadf9\uc801',
        color: '#ff8844',
        icon: MessageSquare,
        steps: [
          'G5 \ub378\ud0c0 \uc2a4\ucea0 \u2014 \ud328\uc2a4 2\uc5d0\uc11c\uc758 \uac1c\uc120 \uce21\uc815',
          'humanizer_discourse() \u2014 \uc804\uc6a9 \ub2f4\ud654 \ubd84\uc11d',
          'G6 \ub808\uc774\uc5b4 4 \u2014 \uc218\uc0ac\uc801 \uc7ac\ubc30\uc5f4, \uc77c\ud0c8 \uc8fc\uc785, \uc5f0\uacb0\uc5b4 \ucd95\uc18c',
          'F5 \uc804\uccb4 \ud655\uc778 \u2014 \ud3ec\uad04\uc801 \uba54\ud2b8\ub9ad \uac80\uc99d',
          'CP_PASS3_REVIEW \u2014 \uc778\uac04 \uac80\ud1a0 \uccb4\ud06c\ud3ec\uc778\ud2b8',
        ],
        checkpoint: 'CP_PASS3_REVIEW',
        description:
          '4\uac00\uc9c0 \ub2f4\ud654 \uc804\ub7b5(DT1-DT4)\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4: \uc218\uc0ac\uc801 \uc774\ub3d9 \uc7ac\ubc30\uc5f4, \uc77c\ud0c8 \uc8fc\uc785, \ub17c\uc99d \ub2e4\uc591\ud654, \uc5f0\uacb0\uc5b4 \ucd95\uc18c. \ud0d0\uc9c0 \uac10\uc18c\uc5d0 \uac00\uc7a5 \ud6a8\uacfc\uc801\uc778 \ud328\uc2a4\uc785\ub2c8\ub2e4.',
      },
      {
        number: 4,
        name: '\ub2e4\ub4ec\uae30 (\uc120\ud0dd\uc801)',
        intensity: '\ubbf8\uc138 \uc870\uc815',
        color: '#cc88ff',
        icon: Sparkles,
        steps: [
          'G5 \uac10\uc0ac \u2014 \ucd5c\uc885 \ud3ec\uad04 \ubd84\uc11d',
          'G6 \ubbf8\uc138 \uc870\uc815 \u2014 \ub0a8\uc740 \uc2e0\ud638\uc5d0 \ub300\ud55c \ubbf8\uc138 \uc870\uc815',
          'F5 \uc804\uccb4 \ud655\uc778 \u2014 \ucd5c\uc885 \uba54\ud2b8\ub9ad \uac80\uc99d',
          'CP_FINAL_REVIEW \u2014 \ucd5c\uc885 \uc778\uac04 \uac80\ud1a0 \uccb4\ud06c\ud3ec\uc778\ud2b8',
        ],
        checkpoint: 'CP_FINAL_REVIEW',
        description:
          '25% \uc774\ud558 \uc810\uc218\uc5d0 \ub3c4\ub2ec\ud574\uc57c \ud558\ub294 \ud14d\uc2a4\ud2b8\ub97c \uc704\ud55c \uc120\ud0dd\uc801 \ub2e4\ub4ec\uae30 \ud328\uc2a4. \uc774\uc804 \ud328\uc2a4\uc5d0\uc11c\uc758 \ud68c\uadc0\ub97c \ubc29\uc9c0\ud558\uba74\uc11c \ub0a8\uc740 \uc2e0\ud638\ub97c \ubbf8\uc138 \uc870\uc815\ud569\ub2c8\ub2e4.',
      },
    ] as Pass[],

    feedback: {
      title: '\ud0d0\uc9c0\uae30 \uae30\ubc18 \ud53c\ub4dc\ubc31 \ub8e8\ud504',
      subtitle: '\uc5ed\ud6a8\uacfc\uc801 \ubcc0\uacbd\uc744 \ubc29\uc9c0\ud558\ub294 \uc790\ub3d9 \ubcf5\uc6d0',
      description:
        '\uac01 G6 \ubcc0\ud658 \ud6c4 G5\uac00 \uc218\uc815\ub41c \ud14d\uc2a4\ud2b8\ub97c \ub2e4\uc2dc \uc2a4\ucea0\ud569\ub2c8\ub2e4. \ubcf5\ud569 \uc810\uc218\uac00 \uc99d\uac00\ud558\uba74 \u2014 \uc989, \ubcc0\ud658\uc774 \ud14d\uc2a4\ud2b8\ub97c \ub354 \ud0d0\uc9c0 \uac00\ub2a5\ud558\uac8c \ub9cc\ub4e4\uc5c8\ub2e4\uba74 \u2014 \ubcc0\uacbd\uc740 \uc790\ub3d9\uc73c\ub85c \ubcf5\uc6d0\ub429\ub2c8\ub2e4. \uc774 \ud53c\ub4dc\ubc31 \ub8e8\ud504\ub294 \ud328\uc2a4 \uc804\ubc18\uc5d0 \uac78\uccd0 \ub2e8\uc870\uc801 \uc810\uc218 \uac1c\uc120\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4.',
      steps: [
        { label: 'G6 \ubcc0\ud658', description: '\ub300\uc0c1 \ud14d\uc2a4\ud2b8 \uc601\uc5ed\uc5d0 \ubcc0\ud658 \uc801\uc6a9', icon: Sparkles },
        { label: 'G5 \uc7ac\uc2a4\ucea0', description: '\uc804\uccb4 \uba54\ud2b8\ub9ad \uc2a4\uc704\ud2b8\ub85c \ubcc0\ud658\ub41c \ud14d\uc2a4\ud2b8 \uc7ac\ubd84\uc11d', icon: Gauge },
        { label: '\uc810\uc218 \ube44\uad50', description: '\uc0c8 \uc810\uc218\ub97c \ubcc0\ud658 \uc804 \uae30\uc900\uc120\uacfc \ube44\uad50', icon: Target },
        { label: '\uc218\ub77d / \ubcf5\uc6d0', description: '\uc810\uc218 \uac10\uc18c: \uc218\ub77d. \uc810\uc218 \uc99d\uac00: \ubcf5\uc6d0.', icon: RotateCcw },
      ],
      warning:
        '\ubcc0\ud658\uc774 \ud0d0\uc9c0 \uc810\uc218\ub97c \ub192\uc774\uba74 \uc989\uc2dc \ubcf5\uc6d0\ub429\ub2c8\ub2e4. \uc5ed\ud6a8\uacfc\uc801\uc778 \ubcc0\uacbd\uc740 \ucd9c\ub825\uc5d0 \uc808\ub300 \ubc18\uc601\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.',
    },

    progression: {
      title: '\uc810\uc218 \uc9c4\ud589 \uc608\uc2dc',
      subtitle: '\ud328\uc2a4\ubcc4 \uc2e4\uc81c \ubcf5\ud569 \uc810\uc218 \uac10\uc18c',
      examples: [
        {
          label: '\ub17c\ubb38 1 (\uacbd\uc601\ud559)',
          initial: 80,
          pass1: 62,
          pass23: 31,
          color: '#22ccff',
        },
        {
          label: '\ub17c\ubb38 2 (\uc2ec\ub9ac\ud559)',
          initial: 82,
          pass1: 61,
          pass23: 22,
          color: '#44ffaa',
        },
      ] as ScoreExample[],
    },

    criteria: {
      title: '\uc131\uacf5 \uae30\uc900',
      subtitle: '\ud30c\uc774\ud504\ub77c\uc778 \uc644\ub8cc\ub97c \uc704\ud574 \ucda9\uc871\ud574\uc57c \ud560 3\uac00\uc9c0 \uc870\uac74',
      items: [
        {
          criterion: '\ucd5c\uc885 \uc810\uc218',
          target: '< 30%',
          description: '\ubcf5\ud569 \uc810\uc218\uac00 30% \uc784\uacc4\uac12 \uc774\ud558\ub85c \ub0b4\ub824\uac00\uc57c \ud569\ub2c8\ub2e4',
          icon: TrendingDown,
          color: '#44ffaa',
        },
        {
          criterion: '\ud328\uc2a4 \uc81c\ud55c',
          target: '\u2264 3\ud328\uc2a4',
          description: '3\ud328\uc2a4 \uc774\ub0b4\uc5d0 \ubaa9\ud45c\ub97c \ub2ec\uc131\ud574\uc57c \ud569\ub2c8\ub2e4; \ud328\uc2a4 4\ub294 \uc120\ud0dd\uc801 \ub2e4\ub4ec\uae30\ub9cc',
          icon: Layers,
          color: '#22ccff',
        },
        {
          criterion: '\uc778\uc6a9 \ubcf4\uc874',
          target: '100%',
          description: '\ubaa8\ub4e0 \uc778\uc6a9, \ucc38\uc870, \ud1b5\uacc4\uac00 \uc815\ud655\ud558\uac8c \ubcf4\uc874\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4',
          icon: Shield,
          color: '#cc88ff',
        },
      ],
    },

    cta: {
      title: '\uac01 \ub808\uc774\uc5b4 \ub354 \uae4a\uc774 \ud0d0\uc0c9',
      description:
        '\uac01 \ud328\uc2a4\ub97c \uc8fc\ub3c4\ud558\ub294 \uba54\ud2b8\ub9ad\uc744 \ud0d0\uc0c9\ud558\uac70\ub098 \ud328\uc2a4 3\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ub2f4\ud654 \uc804\ub7b5\uc744 \uc54c\uc544\ubcf4\uc138\uc694.',
      buttons: [
        { label: '\ubb38\uccb4 \uce21\uc815 \uba54\ud2b8\ub9ad', href: 'metrics' },
        { label: '\ub2f4\ud654 \uc804\ub7b5', href: 'discourse' },
      ],
    },
  },
};

export default function MultiPassPipelinePage() {
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

        {/* 4-Pass Flow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-2">{t.flowTitle}</h2>
          <p className="text-body text-stellar-dim mb-8">{t.flowSubtitle}</p>

          <div className="space-y-6">
            {t.passes.map((pass, index) => (
              <motion.div
                key={pass.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div
                  className="border bg-void-elevated p-6"
                  style={{ borderColor: `${pass.color}30` }}
                >
                  {/* Pass Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center border"
                      style={{
                        backgroundColor: `${pass.color}15`,
                        borderColor: `${pass.color}30`,
                      }}
                    >
                      <pass.icon className="h-6 w-6" style={{ color: pass.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className="font-mono text-xs font-bold px-2 py-0.5 border"
                          style={{
                            color: pass.color,
                            backgroundColor: `${pass.color}15`,
                            borderColor: `${pass.color}30`,
                          }}
                        >
                          PASS {pass.number}
                        </span>
                        <h3 className="void-heading-3 text-stellar-core">{pass.name}</h3>
                      </div>
                      <p className="text-caption text-stellar-dim">{pass.description}</p>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="ml-16 space-y-2">
                    {pass.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className="mt-1.5 h-2 w-2 shrink-0"
                          style={{ backgroundColor: pass.color }}
                        />
                        <p className="text-body text-stellar-dim font-mono text-sm">{step}</p>
                      </div>
                    ))}
                  </div>

                  {/* Checkpoint Badge */}
                  <div className="ml-16 mt-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs border"
                      style={{
                        color: pass.color,
                        backgroundColor: `${pass.color}10`,
                        borderColor: `${pass.color}25`,
                      }}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {pass.checkpoint}
                    </span>
                  </div>
                </div>

                {/* Arrow between passes */}
                {index < t.passes.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight
                      className="h-5 w-5 rotate-90"
                      style={{ color: 'rgba(68, 68, 90, 0.5)' }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Feedback Loop */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-2">{t.feedback.title}</h2>
          <p className="text-body text-stellar-dim mb-4">{t.feedback.subtitle}</p>
          <p className="text-body text-stellar-dim leading-relaxed mb-8">
            {t.feedback.description}
          </p>

          {/* Feedback Steps */}
          <div className="grid gap-4 md:grid-cols-4 mb-6">
            {t.feedback.steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative border border-stellar-faint/10 bg-void-elevated p-4 text-center"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20 mx-auto mb-3"
                  style={{ backgroundColor: 'rgba(34, 204, 255, 0.1)' }}
                >
                  <step.icon className="h-5 w-5" style={{ color: '#22ccff' }} />
                </div>
                <p className="text-body font-semibold text-stellar-core mb-1">{step.label}</p>
                <p className="text-caption text-stellar-dim">{step.description}</p>
                {index < t.feedback.steps.length - 1 && (
                  <ArrowRight
                    className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5"
                    style={{ color: 'rgba(68, 68, 90, 0.5)' }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Warning */}
          <div
            className="flex items-start gap-3 p-4 border"
            style={{
              backgroundColor: 'rgba(255, 136, 68, 0.05)',
              borderColor: 'rgba(255, 136, 68, 0.2)',
            }}
          >
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#ff8844' }} />
            <p className="text-body" style={{ color: '#ff8844' }}>
              {t.feedback.warning}
            </p>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Score Progression */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-2">{t.progression.title}</h2>
          <p className="text-body text-stellar-dim mb-8">{t.progression.subtitle}</p>

          <div className="space-y-6">
            {t.progression.examples.map((example, index) => (
              <motion.div
                key={example.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="border border-stellar-faint/10 bg-void-elevated p-6"
              >
                <h3 className="text-body font-semibold text-stellar-core mb-4">{example.label}</h3>

                {/* Score Stages */}
                <div className="space-y-4">
                  {/* Initial */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-caption text-stellar-faint font-mono">
                        {locale === 'ko' ? '\ucd08\uae30' : 'Initial'}
                      </span>
                      <span className="font-mono text-lg font-bold text-[#ff8844]">
                        {example.initial}%
                      </span>
                    </div>
                    <div className="h-3 bg-void-surface border border-stellar-faint/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${example.initial}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-full"
                        style={{ backgroundColor: '#ff8844' }}
                      />
                    </div>
                  </div>

                  {/* After Pass 1 */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-caption text-stellar-faint font-mono">
                        {locale === 'ko' ? '\ud328\uc2a4 1 \ud6c4' : 'After Pass 1'}
                      </span>
                      <span className="font-mono text-lg font-bold" style={{ color: example.color }}>
                        {example.pass1}%
                      </span>
                    </div>
                    <div className="h-3 bg-void-surface border border-stellar-faint/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${example.pass1}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full"
                        style={{ backgroundColor: example.color }}
                      />
                    </div>
                  </div>

                  {/* After Pass 2+3 */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-caption text-stellar-faint font-mono">
                        {locale === 'ko' ? '\ud328\uc2a4 2+3 \ud6c4' : 'After Pass 2+3'}
                      </span>
                      <span className="font-mono text-lg font-bold text-[#44ffaa]">
                        {example.pass23}%
                      </span>
                    </div>
                    <div className="h-3 bg-void-surface border border-stellar-faint/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${example.pass23}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-full"
                        style={{ backgroundColor: '#44ffaa' }}
                      />
                    </div>
                  </div>

                  {/* 30% threshold line */}
                  <div className="relative h-0.5 bg-void-surface mt-2">
                    <div
                      className="absolute left-[30%] -top-3 h-7 border-l-2 border-dashed"
                      style={{ borderColor: 'rgba(68, 255, 170, 0.5)' }}
                    />
                    <span
                      className="absolute left-[30%] -top-6 -translate-x-1/2 text-xs font-mono"
                      style={{ color: '#44ffaa' }}
                    >
                      30%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Success Criteria */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-2">{t.criteria.title}</h2>
          <p className="text-body text-stellar-dim mb-6">{t.criteria.subtitle}</p>

          <div className="grid gap-4 md:grid-cols-3">
            {t.criteria.items.map((item, index) => (
              <motion.div
                key={item.criterion}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border bg-void-elevated p-5 text-center"
                style={{ borderColor: `${item.color}30` }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center border mx-auto mb-4"
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}30`,
                  }}
                >
                  <item.icon className="h-6 w-6" style={{ color: item.color }} />
                </div>
                <p className="text-caption font-semibold text-stellar-faint mb-1">
                  {item.criterion}
                </p>
                <p className="font-mono text-2xl font-bold mb-2" style={{ color: item.color }}>
                  {item.target}
                </p>
                <p className="text-caption text-stellar-dim">{item.description}</p>
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
            <div className="flex flex-wrap justify-center gap-4">
              {t.cta.buttons.map((btn) => (
                <Link
                  key={btn.href}
                  href={`/${locale}/docs/humanization/${btn.href}`}
                  className="void-btn void-btn-accent inline-flex items-center gap-2"
                >
                  {btn.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
