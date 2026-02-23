'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BarChart3,
  Activity,
  TrendingUp,
  BookOpen,
  FlaskConical,
  Layers,
  Target,
  Gauge,
  Terminal,
  Fingerprint,
  MessageSquareQuote,
  Sigma,
  HelpCircle,
} from 'lucide-react';

interface Metric {
  name: string;
  description: string;
  humanRange: string;
  aiRange: string;
  humanValue: number;
  aiValue: number;
  icon: typeof BarChart3;
}

interface DisciplineProfile {
  name: string;
  burstiness: string;
  mtld: string;
  hedge: string;
  note: string;
}

interface ToolRef {
  name: string;
  description: string;
  example: string;
}

const content = {
  en: {
    back: 'Back to Humanization',
    title: 'Stylometric Metrics',
    subtitle: '13 quantitative metrics for AI detection assessment',

    intro: {
      title: 'Why Quantitative Metrics Matter',
      description:
        'Pattern-based detection alone has a ceiling of roughly 60% accuracy. Modern AI detectors combine pattern recognition with statistical analysis of writing features that systematically differ between human and AI text. These 13 stylometric metrics form the quantitative backbone of Diverga\'s humanization engine, enabling precise measurement and targeted transformation.',
    },

    originalTitle: 'Original Metrics (7)',
    originalSubtitle: 'Core metrics from the initial detection framework',
    originalMetrics: [
      {
        name: 'Burstiness CV',
        description:
          'Coefficient of variation of sentence lengths. Human writing naturally varies; AI tends toward uniform length.',
        humanRange: '> 0.45',
        aiRange: '< 0.30',
        humanValue: 72,
        aiValue: 25,
        icon: Activity,
      },
      {
        name: 'MTLD',
        description:
          'Measure of Textual Lexical Diversity. Tracks vocabulary richness across the full text span.',
        humanRange: '> 70',
        aiRange: '< 50',
        humanValue: 80,
        aiValue: 38,
        icon: BookOpen,
      },
      {
        name: 'Fano Factor',
        description:
          'Variance-to-mean ratio of sentence lengths. Captures irregularity beyond simple variance.',
        humanRange: '> 1.5',
        aiRange: '< 1.0',
        humanValue: 75,
        aiValue: 30,
        icon: TrendingUp,
      },
      {
        name: 'Sentence Length Range',
        description:
          'Difference between the longest and shortest sentences. AI rarely produces very short or very long sentences.',
        humanRange: '> 15 words',
        aiRange: '< 8 words',
        humanValue: 78,
        aiValue: 28,
        icon: BarChart3,
      },
      {
        name: 'Paragraph Opener Diversity',
        description:
          'Ratio of unique paragraph-opening structures. AI recycles "This study...", "The results..." patterns.',
        humanRange: '> 0.70',
        aiRange: '< 0.50',
        humanValue: 82,
        aiValue: 35,
        icon: Layers,
      },
      {
        name: 'Hedge Density',
        description:
          'Frequency of hedging expressions per sentence. AI either over-hedges or under-hedges compared to human norms.',
        humanRange: '0.05 - 0.15',
        aiRange: '> 0.20 or < 0.02',
        humanValue: 65,
        aiValue: 20,
        icon: Target,
      },
      {
        name: 'Composite Score (v3.0)',
        description:
          'Weighted aggregate of all metrics. The single number that summarizes detection probability.',
        humanRange: '< 30%',
        aiRange: '> 60%',
        humanValue: 85,
        aiValue: 15,
        icon: Gauge,
      },
    ] as Metric[],

    newTitle: 'New Metrics (6)',
    newSubtitle: 'Additional metrics introduced in v3.0 for deeper analysis',
    newMetrics: [
      {
        name: 'Hapax Rate',
        description:
          'Proportion of words used only once. Humans use more unique, one-off vocabulary choices.',
        humanRange: '> 0.50',
        aiRange: '< 0.35',
        humanValue: 75,
        aiValue: 28,
        icon: Fingerprint,
      },
      {
        name: 'Contraction Density',
        description:
          'Frequency of contractions (don\'t, it\'s, we\'re). AI avoids contractions even in informal contexts.',
        humanRange: '> 0.15',
        aiRange: '< 0.05',
        humanValue: 80,
        aiValue: 18,
        icon: MessageSquareQuote,
      },
      {
        name: 'Paragraph Length Variance',
        description:
          'Coefficient of variation of paragraph lengths. AI produces uniformly-sized paragraphs.',
        humanRange: '> 0.40',
        aiRange: '< 0.25',
        humanValue: 70,
        aiValue: 22,
        icon: BarChart3,
      },
      {
        name: 'Surprisal Proxy',
        description:
          'Approximation of information-theoretic surprisal. Human text has higher variance in word predictability.',
        humanRange: 'High variance',
        aiRange: 'Low variance',
        humanValue: 68,
        aiValue: 25,
        icon: FlaskConical,
      },
      {
        name: 'Connective Diversity',
        description:
          'Ratio of unique discourse connectives. AI overuses "Furthermore", "Moreover", "Additionally".',
        humanRange: '> 0.70',
        aiRange: '< 0.50',
        humanValue: 78,
        aiValue: 32,
        icon: Sigma,
      },
      {
        name: 'Question Ratio',
        description:
          'Proportion of interrogative sentences. Human academic writing includes rhetorical questions; AI rarely does.',
        humanRange: '> 0.03',
        aiRange: '< 0.01',
        humanValue: 72,
        aiValue: 15,
        icon: HelpCircle,
      },
    ] as Metric[],

    formula: {
      title: 'v3.0 Composite Score Formula',
      subtitle: 'Weighted combination of six detection dimensions',
      equation:
        'AI_Probability = 0.40 \u00d7 pattern + 0.15 \u00d7 burstiness + 0.10 \u00d7 vocab + 0.10 \u00d7 structural + 0.15 \u00d7 discourse + 0.10 \u00d7 psycholinguistic',
      weights: [
        { component: 'Pattern Score', weight: '0.40 (40%)', description: 'Matches against 24 known AI writing patterns' },
        { component: 'Burstiness', weight: '0.15 (15%)', description: 'Sentence length variation and rhythm' },
        { component: 'Vocabulary', weight: '0.10 (10%)', description: 'MTLD, hapax rate, lexical diversity' },
        { component: 'Structural', weight: '0.10 (10%)', description: 'Paragraph variance, opener diversity, sentence range' },
        { component: 'Discourse', weight: '0.15 (15%)', description: 'Connective diversity, argument flow, cohesion' },
        { component: 'Psycholinguistic', weight: '0.10 (10%)', description: 'Hedge density, surprisal proxy, question ratio' },
      ],
    },

    disciplines: {
      title: 'Discipline Profiles',
      subtitle: '7 calibrated profiles adjust thresholds for domain-specific norms',
      profiles: [
        { name: 'default', burstiness: '0.45', mtld: '70', hedge: '0.05-0.15', note: 'General academic writing' },
        { name: 'psychology', burstiness: '0.40', mtld: '65', hedge: '0.08-0.18', note: 'Higher hedging norms' },
        { name: 'management', burstiness: '0.42', mtld: '60', hedge: '0.06-0.14', note: 'Lower vocabulary diversity' },
        { name: 'education', burstiness: '0.43', mtld: '65', hedge: '0.07-0.16', note: 'Moderate hedging' },
        { name: 'stem', burstiness: '0.38', mtld: '55', hedge: '0.03-0.10', note: 'Lower burstiness, minimal hedging' },
        { name: 'humanities', burstiness: '0.50', mtld: '80', hedge: '0.08-0.18', note: 'Higher lexical diversity' },
        { name: 'social_sciences', burstiness: '0.44', mtld: '68', hedge: '0.06-0.15', note: 'Balanced profile' },
      ] as DisciplineProfile[],
    },

    tools: {
      title: 'MCP Tool Reference',
      subtitle: '5 tools for metric analysis and verification',
      items: [
        {
          name: 'humanizer_metrics',
          description: 'Run full 13-metric stylometric analysis on text',
          example: '"Analyze the metrics of my draft"',
        },
        {
          name: 'humanizer_verify',
          description: 'Check composite score against target threshold',
          example: '"Verify my paper passes the 30% threshold"',
        },
        {
          name: 'humanizer_diff',
          description: 'Compare metrics before and after transformation',
          example: '"Show me the metric diff for my humanized draft"',
        },
        {
          name: 'humanizer_status',
          description: 'Display current pipeline state and pass history',
          example: '"What is the humanization status?"',
        },
        {
          name: 'humanizer_discourse',
          description: 'Analyze discourse-level features and connective patterns',
          example: '"Run discourse analysis on my introduction"',
        },
      ] as ToolRef[],
    },

    cta: {
      title: 'Explore How Metrics Drive Transformation',
      description:
        'See how these metrics feed into the multi-pass pipeline to systematically reduce AI detection scores.',
      button: 'View Pipeline Architecture',
      href: 'pipeline',
    },
  },
  ko: {
    back: '\ud734\uba3c\ud654\ub85c \ub3cc\uc544\uac00\uae30',
    title: '\ubb38\uccb4 \uce21\uc815 \uba54\ud2b8\ub9ad',
    subtitle: 'AI \ud0d0\uc9c0 \ud3c9\uac00\ub97c \uc704\ud55c 13\uac1c \uc815\ub7c9\uc801 \uba54\ud2b8\ub9ad',

    intro: {
      title: '\uc815\ub7c9\uc801 \uba54\ud2b8\ub9ad\uc774 \uc911\uc694\ud55c \uc774\uc720',
      description:
        '\ud328\ud134 \uae30\ubc18 \ud0d0\uc9c0\ub9cc\uc73c\ub85c\ub294 \uc815\ud655\ub3c4\uac00 \uc57d 60%\uc5d0\uc11c \uc815\uccb4\ub429\ub2c8\ub2e4. \ud604\ub300 AI \ud0d0\uc9c0\uae30\ub294 \ud328\ud134 \uc778\uc2dd\uacfc \uc778\uac04 \ubc0f AI \ud14d\uc2a4\ud2b8 \uac04\uc5d0 \uccb4\uacc4\uc801\uc73c\ub85c \ub2e4\ub978 \uae00\uc4f0\uae30 \ud2b9\uc131\uc758 \ud1b5\uacc4 \ubd84\uc11d\uc744 \uacb0\ud569\ud569\ub2c8\ub2e4. \uc774 13\uac1c\uc758 \ubb38\uccb4 \uce21\uc815 \uba54\ud2b8\ub9ad\uc740 Diverga \ud734\uba3c\ud654 \uc5d4\uc9c4\uc758 \uc815\ub7c9\uc801 \ud575\uc2ec\uc744 \ud615\uc131\ud558\uc5ec \uc815\ubc00\ud55c \uce21\uc815\uacfc \ub300\uc0c1 \ubcc0\ud658\uc744 \uac00\ub2a5\ud558\uac8c \ud569\ub2c8\ub2e4.',
    },

    originalTitle: '\uae30\ubcf8 \uba54\ud2b8\ub9ad (7\uac1c)',
    originalSubtitle: '\ucd08\uae30 \ud0d0\uc9c0 \ud504\ub808\uc784\uc6cc\ud06c\uc758 \ud575\uc2ec \uba54\ud2b8\ub9ad',
    originalMetrics: [
      {
        name: '\ubc84\uc2a4\ud2f0\ub2c8\uc2a4 CV',
        description: '\ubb38\uc7a5 \uae38\uc774\uc758 \ubcc0\ub3d9 \uacc4\uc218. \uc778\uac04\uc758 \uae00\uc4f0\uae30\ub294 \uc790\uc5f0\uc2a4\ub7fd\uac8c \ubcc0\ud558\uc9c0\ub9cc AI\ub294 \uade0\uc77c\ud55c \uae38\uc774\ub97c \uc120\ud638\ud569\ub2c8\ub2e4.',
        humanRange: '> 0.45',
        aiRange: '< 0.30',
        humanValue: 72,
        aiValue: 25,
        icon: Activity,
      },
      {
        name: 'MTLD',
        description: '\ud14d\uc2a4\ud2b8 \uc5b4\ud718 \ub2e4\uc591\uc131 \uce21\uc815. \uc804\uccb4 \ud14d\uc2a4\ud2b8\uc5d0 \uac78\uccd0 \uc5b4\ud718 \ud48d\ubd80\uc131\uc744 \ucd94\uc801\ud569\ub2c8\ub2e4.',
        humanRange: '> 70',
        aiRange: '< 50',
        humanValue: 80,
        aiValue: 38,
        icon: BookOpen,
      },
      {
        name: '\ud30c\ub178 \ud329\ud130',
        description: '\ubb38\uc7a5 \uae38\uc774\uc758 \ubd84\uc0b0 \ub300 \ud3c9\uade0 \ube44\uc728. \ub2e8\uc21c \ubd84\uc0b0\uc744 \ub118\uc5b4 \ubd88\uaddc\uce59\uc131\uc744 \ud3ec\ucc29\ud569\ub2c8\ub2e4.',
        humanRange: '> 1.5',
        aiRange: '< 1.0',
        humanValue: 75,
        aiValue: 30,
        icon: TrendingUp,
      },
      {
        name: '\ubb38\uc7a5 \uae38\uc774 \ubc94\uc704',
        description: '\uac00\uc7a5 \uae34 \ubb38\uc7a5\uacfc \uac00\uc7a5 \uc9e7\uc740 \ubb38\uc7a5\uc758 \ucc28\uc774. AI\ub294 \ub9e4\uc6b0 \uc9e7\uac70\ub098 \uae34 \ubb38\uc7a5\uc744 \uac70\uc758 \uc0dd\uc131\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.',
        humanRange: '> 15\ub2e8\uc5b4',
        aiRange: '< 8\ub2e8\uc5b4',
        humanValue: 78,
        aiValue: 28,
        icon: BarChart3,
      },
      {
        name: '\ub2e8\ub77d \ub3c4\uc785\ubd80 \ub2e4\uc591\uc131',
        description: '\uace0\uc720\ud55c \ub2e8\ub77d \uc2dc\uc791 \uad6c\uc870\uc758 \ube44\uc728. AI\ub294 "\ubcf8 \uc5f0\uad6c\ub294...", "\uacb0\uacfc\ub294..." \ud328\ud134\uc744 \ubc18\ubcf5\ud569\ub2c8\ub2e4.',
        humanRange: '> 0.70',
        aiRange: '< 0.50',
        humanValue: 82,
        aiValue: 35,
        icon: Layers,
      },
      {
        name: '\ud5e4\uc9c0 \ubc00\ub3c4',
        description: '\ubb38\uc7a5\ub2f9 \ud5e4\uc9c0 \ud45c\ud604 \ube48\ub3c4. AI\ub294 \uc778\uac04 \uae30\uc900\uc5d0 \ube44\ud574 \uacfc\ub3c4\ud558\uac70\ub098 \ubd80\uc871\ud55c \ud5e4\uc9c0\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.',
        humanRange: '0.05 - 0.15',
        aiRange: '> 0.20 \ub610\ub294 < 0.02',
        humanValue: 65,
        aiValue: 20,
        icon: Target,
      },
      {
        name: '\ubcf5\ud569 \uc810\uc218 (v3.0)',
        description: '\ubaa8\ub4e0 \uba54\ud2b8\ub9ad\uc758 \uac00\uc911 \uc9d1\uacc4. \ud0d0\uc9c0 \ud655\ub960\uc744 \uc694\uc57d\ud558\ub294 \ub2e8\uc77c \uc218\uce58\uc785\ub2c8\ub2e4.',
        humanRange: '< 30%',
        aiRange: '> 60%',
        humanValue: 85,
        aiValue: 15,
        icon: Gauge,
      },
    ] as Metric[],

    newTitle: '\uc2e0\uaddc \uba54\ud2b8\ub9ad (6\uac1c)',
    newSubtitle: '\ub354 \uae4a\uc740 \ubd84\uc11d\uc744 \uc704\ud574 v3.0\uc5d0\uc11c \ub3c4\uc785\ub41c \ucd94\uac00 \uba54\ud2b8\ub9ad',
    newMetrics: [
      {
        name: '\ud569\uc545\uc2a4 \ube44\uc728',
        description: '\ud55c \ubc88\ub9cc \uc0ac\uc6a9\ub41c \ub2e8\uc5b4\uc758 \ube44\uc728. \uc778\uac04\uc740 \ub354 \ub9ce\uc740 \uace0\uc720\ud55c \uc77c\ud68c\uc131 \uc5b4\ud718 \uc120\ud0dd\uc744 \ud569\ub2c8\ub2e4.',
        humanRange: '> 0.50',
        aiRange: '< 0.35',
        humanValue: 75,
        aiValue: 28,
        icon: Fingerprint,
      },
      {
        name: '\ucd95\uc57d\ud615 \ubc00\ub3c4',
        description: '\ucd95\uc57d\ud615(don\'t, it\'s, we\'re) \ube48\ub3c4. AI\ub294 \ube44\uacf5\uc2dd\uc801 \ub9e5\ub77d\uc5d0\uc11c\ub3c4 \ucd95\uc57d\ud615\uc744 \ud53c\ud569\ub2c8\ub2e4.',
        humanRange: '> 0.15',
        aiRange: '< 0.05',
        humanValue: 80,
        aiValue: 18,
        icon: MessageSquareQuote,
      },
      {
        name: '\ub2e8\ub77d \uae38\uc774 \ubd84\uc0b0',
        description: '\ub2e8\ub77d \uae38\uc774\uc758 \ubcc0\ub3d9 \uacc4\uc218. AI\ub294 \uade0\uc77c\ud55c \ud06c\uae30\uc758 \ub2e8\ub77d\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.',
        humanRange: '> 0.40',
        aiRange: '< 0.25',
        humanValue: 70,
        aiValue: 22,
        icon: BarChart3,
      },
      {
        name: '\uc11c\ud504\ub77c\uc774\uc990 \ud504\ub85d\uc2dc',
        description: '\uc815\ubcf4 \uc774\ub860\uc801 \uc11c\ud504\ub77c\uc774\uc990\uc758 \uadfc\uc0ac\uce58. \uc778\uac04 \ud14d\uc2a4\ud2b8\ub294 \ub2e8\uc5b4 \uc608\uce21 \uac00\ub2a5\uc131\uc5d0\uc11c \ub354 \ub192\uc740 \ubd84\uc0b0\uc744 \ubcf4\uc785\ub2c8\ub2e4.',
        humanRange: '\ub192\uc740 \ubd84\uc0b0',
        aiRange: '\ub0ae\uc740 \ubd84\uc0b0',
        humanValue: 68,
        aiValue: 25,
        icon: FlaskConical,
      },
      {
        name: '\uc5f0\uacb0\uc5b4 \ub2e4\uc591\uc131',
        description: '\uace0\uc720\ud55c \ub2f4\ud654 \uc5f0\uacb0\uc5b4\uc758 \ube44\uc728. AI\ub294 "\ub610\ud55c", "\uac8c\ub2e4\uac00", "\ucd94\uac00\uc801\uc73c\ub85c"\ub97c \uacfc\ub2e4 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.',
        humanRange: '> 0.70',
        aiRange: '< 0.50',
        humanValue: 78,
        aiValue: 32,
        icon: Sigma,
      },
      {
        name: '\uc9c8\ubb38 \ube44\uc728',
        description: '\uc758\ubb38\ubb38 \ube44\uc728. \uc778\uac04 \ud559\uc220 \uae00\uc4f0\uae30\ub294 \uc218\uc0ac\uc801 \uc9c8\ubb38\uc744 \ud3ec\ud568\ud558\uc9c0\ub9cc AI\ub294 \uac70\uc758 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.',
        humanRange: '> 0.03',
        aiRange: '< 0.01',
        humanValue: 72,
        aiValue: 15,
        icon: HelpCircle,
      },
    ] as Metric[],

    formula: {
      title: 'v3.0 \ubcf5\ud569 \uc810\uc218 \uacf5\uc2dd',
      subtitle: '6\uac1c \ud0d0\uc9c0 \ucc28\uc6d0\uc758 \uac00\uc911 \uc870\ud569',
      equation:
        'AI_Probability = 0.40 \u00d7 \ud328\ud134 + 0.15 \u00d7 \ubc84\uc2a4\ud2f0\ub2c8\uc2a4 + 0.10 \u00d7 \uc5b4\ud718 + 0.10 \u00d7 \uad6c\uc870 + 0.15 \u00d7 \ub2f4\ud654 + 0.10 \u00d7 \uc2ec\ub9ac\uc5b8\uc5b4',
      weights: [
        { component: '\ud328\ud134 \uc810\uc218', weight: '0.40 (40%)', description: '24\uac1c \uc54c\ub824\uc9c4 AI \uae00\uc4f0\uae30 \ud328\ud134\uacfc \ub9e4\uce6d' },
        { component: '\ubc84\uc2a4\ud2f0\ub2c8\uc2a4', weight: '0.15 (15%)', description: '\ubb38\uc7a5 \uae38\uc774 \ubcc0\ub3d9\uacfc \ub9ac\ub4ec' },
        { component: '\uc5b4\ud718', weight: '0.10 (10%)', description: 'MTLD, \ud569\uc545\uc2a4 \ube44\uc728, \uc5b4\ud718 \ub2e4\uc591\uc131' },
        { component: '\uad6c\uc870', weight: '0.10 (10%)', description: '\ub2e8\ub77d \ubd84\uc0b0, \ub3c4\uc785\ubd80 \ub2e4\uc591\uc131, \ubb38\uc7a5 \ubc94\uc704' },
        { component: '\ub2f4\ud654', weight: '0.15 (15%)', description: '\uc5f0\uacb0\uc5b4 \ub2e4\uc591\uc131, \ub17c\uc99d \ud750\ub984, \uc751\uc9d1\uc131' },
        { component: '\uc2ec\ub9ac\uc5b8\uc5b4', weight: '0.10 (10%)', description: '\ud5e4\uc9c0 \ubc00\ub3c4, \uc11c\ud504\ub77c\uc774\uc990 \ud504\ub85d\uc2dc, \uc9c8\ubb38 \ube44\uc728' },
      ],
    },

    disciplines: {
      title: '\ud559\ubb38 \ubd84\uc57c \ud504\ub85c\ud544',
      subtitle: '7\uac1c\uc758 \ubcf4\uc815\ub41c \ud504\ub85c\ud544\uc774 \ubd84\uc57c\ubcc4 \uae30\uc900\uc5d0 \ub9de\ucdb0 \uc784\uacc4\uac12\uc744 \uc870\uc815\ud569\ub2c8\ub2e4',
      profiles: [
        { name: 'default', burstiness: '0.45', mtld: '70', hedge: '0.05-0.15', note: '\uc77c\ubc18 \ud559\uc220 \uae00\uc4f0\uae30' },
        { name: 'psychology', burstiness: '0.40', mtld: '65', hedge: '0.08-0.18', note: '\ub192\uc740 \ud5e4\uc9c0 \uae30\uc900' },
        { name: 'management', burstiness: '0.42', mtld: '60', hedge: '0.06-0.14', note: '\ub0ae\uc740 \uc5b4\ud718 \ub2e4\uc591\uc131' },
        { name: 'education', burstiness: '0.43', mtld: '65', hedge: '0.07-0.16', note: '\uc911\uac04 \ud5e4\uc9c0' },
        { name: 'stem', burstiness: '0.38', mtld: '55', hedge: '0.03-0.10', note: '\ub0ae\uc740 \ubc84\uc2a4\ud2f0\ub2c8\uc2a4, \ucd5c\uc18c \ud5e4\uc9c0' },
        { name: 'humanities', burstiness: '0.50', mtld: '80', hedge: '0.08-0.18', note: '\ub192\uc740 \uc5b4\ud718 \ub2e4\uc591\uc131' },
        { name: 'social_sciences', burstiness: '0.44', mtld: '68', hedge: '0.06-0.15', note: '\uade0\ud615 \ud504\ub85c\ud544' },
      ] as DisciplineProfile[],
    },

    tools: {
      title: 'MCP \ub3c4\uad6c \ucc38\uc870',
      subtitle: '\uba54\ud2b8\ub9ad \ubd84\uc11d \ubc0f \uac80\uc99d\uc744 \uc704\ud55c 5\uac1c \ub3c4\uad6c',
      items: [
        {
          name: 'humanizer_metrics',
          description: '\ud14d\uc2a4\ud2b8\uc5d0 \ub300\ud55c \uc804\uccb4 13\uac1c \uba54\ud2b8\ub9ad \ubb38\uccb4 \ubd84\uc11d \uc2e4\ud589',
          example: '"\ub0b4 \ucd08\uc548\uc758 \uba54\ud2b8\ub9ad\uc744 \ubd84\uc11d\ud574\uc918"',
        },
        {
          name: 'humanizer_verify',
          description: '\ubcf5\ud569 \uc810\uc218\ub97c \ubaa9\ud45c \uc784\uacc4\uac12\uacfc \ube44\uad50 \ud655\uc778',
          example: '"\ub0b4 \ub17c\ubb38\uc774 30% \uc784\uacc4\uac12\uc744 \ud1b5\uacfc\ud558\ub294\uc9c0 \ud655\uc778\ud574\uc918"',
        },
        {
          name: 'humanizer_diff',
          description: '\ubcc0\ud658 \uc804\ud6c4 \uba54\ud2b8\ub9ad \ube44\uad50',
          example: '"\ud734\uba3c\ud654\ub41c \ucd08\uc548\uc758 \uba54\ud2b8\ub9ad \ucc28\uc774\ub97c \ubcf4\uc5ec\uc918"',
        },
        {
          name: 'humanizer_status',
          description: '\ud604\uc7ac \ud30c\uc774\ud504\ub77c\uc778 \uc0c1\ud0dc \ubc0f \ud328\uc2a4 \uae30\ub85d \ud45c\uc2dc',
          example: '"\ud734\uba3c\ud654 \uc0c1\ud0dc\uac00 \uc5b4\ub5bb\uac8c \ub3fc?"',
        },
        {
          name: 'humanizer_discourse',
          description: '\ub2f4\ud654 \uc218\uc900 \ud2b9\uc131 \ubc0f \uc5f0\uacb0\uc5b4 \ud328\ud134 \ubd84\uc11d',
          example: '"\ub0b4 \uc11c\ub860\uc5d0 \ub300\ud55c \ub2f4\ud654 \ubd84\uc11d \uc2e4\ud589\ud574\uc918"',
        },
      ] as ToolRef[],
    },

    cta: {
      title: '\uba54\ud2b8\ub9ad\uc774 \ubcc0\ud658\uc744 \uc8fc\ub3c4\ud558\ub294 \ubc29\uc2dd \ud0d0\uc0c9',
      description:
        '\uc774\ub7ec\ud55c \uba54\ud2b8\ub9ad\uc774 \ub2e4\uc911 \ud328\uc2a4 \ud30c\uc774\ud504\ub77c\uc778\uc5d0 \uc5b4\ub5bb\uac8c \ud1b5\ud569\ub418\uc5b4 AI \ud0d0\uc9c0 \uc810\uc218\ub97c \uccb4\uacc4\uc801\uc73c\ub85c \uc904\uc774\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694.',
      button: '\ud30c\uc774\ud504\ub77c\uc778 \uc544\ud0a4\ud14d\ucc98 \ubcf4\uae30',
      href: 'pipeline',
    },
  },
};

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="border border-stellar-faint/10 bg-void-elevated p-5"
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-stellar-faint/20"
          style={{ backgroundColor: 'rgba(34, 204, 255, 0.1)' }}
        >
          <metric.icon className="h-5 w-5" style={{ color: '#22ccff' }} />
        </div>
        <div>
          <h3 className="text-body font-semibold text-stellar-core">{metric.name}</h3>
          <p className="text-caption text-stellar-dim mt-1">{metric.description}</p>
        </div>
      </div>

      {/* Comparison Bars */}
      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-caption text-[#44ffaa] font-mono">Human</span>
            <span className="text-caption text-stellar-dim font-mono">{metric.humanRange}</span>
          </div>
          <div className="h-2 bg-void-surface border border-stellar-faint/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${metric.humanValue}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.06 + 0.2 }}
              className="h-full"
              style={{ backgroundColor: '#44ffaa' }}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-caption text-[#ff8844] font-mono">AI</span>
            <span className="text-caption text-stellar-dim font-mono">{metric.aiRange}</span>
          </div>
          <div className="h-2 bg-void-surface border border-stellar-faint/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${metric.aiValue}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.06 + 0.3 }}
              className="h-full"
              style={{ backgroundColor: '#ff8844' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StylometricMetricsPage() {
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

        {/* Original Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-2">{t.originalTitle}</h2>
          <p className="text-body text-stellar-dim mb-8">{t.originalSubtitle}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {t.originalMetrics.map((metric, index) => (
              <MetricCard key={metric.name} metric={metric} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* New Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-2">{t.newTitle}</h2>
          <p className="text-body text-stellar-dim mb-8">{t.newSubtitle}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {t.newMetrics.map((metric, index) => (
              <MetricCard key={metric.name} metric={metric} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Composite Score Formula */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-2">{t.formula.title}</h2>
          <p className="text-body text-stellar-dim mb-6">{t.formula.subtitle}</p>

          {/* Formula Display */}
          <div
            className="border p-6 mb-8 overflow-x-auto"
            style={{
              backgroundColor: 'rgba(34, 204, 255, 0.05)',
              borderColor: 'rgba(34, 204, 255, 0.2)',
            }}
          >
            <code className="text-sm md:text-base font-mono text-[#22ccff] whitespace-nowrap">
              {t.formula.equation}
            </code>
          </div>

          {/* Weight Breakdown */}
          <div className="space-y-3">
            {t.formula.weights.map((w, index) => (
              <motion.div
                key={w.component}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-start gap-4 border border-stellar-faint/10 bg-void-elevated p-4"
              >
                <div className="shrink-0">
                  <span className="font-mono text-lg font-bold text-[#44ffaa]">{w.weight}</span>
                </div>
                <div>
                  <p className="text-body font-semibold text-stellar-core">{w.component}</p>
                  <p className="text-caption text-stellar-dim">{w.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Discipline Profiles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-2">{t.disciplines.title}</h2>
          <p className="text-body text-stellar-dim mb-6">{t.disciplines.subtitle}</p>

          <div className="overflow-x-auto">
            <table className="w-full border border-stellar-faint/10">
              <thead>
                <tr className="bg-void-surface">
                  <th className="border border-stellar-faint/10 p-3 text-left text-caption font-semibold text-stellar-faint">
                    {locale === 'ko' ? '\ud504\ub85c\ud544' : 'Profile'}
                  </th>
                  <th className="border border-stellar-faint/10 p-3 text-center text-caption font-semibold text-[#22ccff]">
                    {locale === 'ko' ? '\ubc84\uc2a4\ud2f0\ub2c8\uc2a4' : 'Burstiness'}
                  </th>
                  <th className="border border-stellar-faint/10 p-3 text-center text-caption font-semibold text-[#22ccff]">
                    MTLD
                  </th>
                  <th className="border border-stellar-faint/10 p-3 text-center text-caption font-semibold text-[#22ccff]">
                    {locale === 'ko' ? '\ud5e4\uc9c0' : 'Hedge'}
                  </th>
                  <th className="border border-stellar-faint/10 p-3 text-left text-caption font-semibold text-stellar-faint">
                    {locale === 'ko' ? '\ube44\uace0' : 'Note'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.disciplines.profiles.map((profile, index) => (
                  <tr key={index} className="border-t border-stellar-faint/10">
                    <td className="border border-stellar-faint/10 p-3 font-mono text-body text-stellar-core font-semibold">
                      {profile.name}
                    </td>
                    <td className="border border-stellar-faint/10 p-3 text-center font-mono text-body text-stellar-dim">
                      {profile.burstiness}
                    </td>
                    <td className="border border-stellar-faint/10 p-3 text-center font-mono text-body text-stellar-dim">
                      {profile.mtld}
                    </td>
                    <td className="border border-stellar-faint/10 p-3 text-center font-mono text-body text-stellar-dim">
                      {profile.hedge}
                    </td>
                    <td className="border border-stellar-faint/10 p-3 text-body text-stellar-dim">
                      {profile.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* MCP Tool Reference */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-2">{t.tools.title}</h2>
          <p className="text-body text-stellar-dim mb-6">{t.tools.subtitle}</p>

          <div className="space-y-4">
            {t.tools.items.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border border-stellar-faint/10 bg-void-elevated p-5"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center border border-stellar-faint/20"
                    style={{ backgroundColor: 'rgba(34, 204, 255, 0.1)' }}
                  >
                    <Terminal className="h-5 w-5" style={{ color: '#22ccff' }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono font-bold text-stellar-core mb-1">{tool.name}</h3>
                    <p className="text-caption text-stellar-dim mb-2">{tool.description}</p>
                    <code className="block bg-void-surface border border-stellar-faint/10 p-3 text-sm text-[#22ccff]">
                      {tool.example}
                    </code>
                  </div>
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
            <p className="text-body text-stellar-dim mb-6 max-w-2xl mx-auto">{t.cta.description}</p>
            <Link
              href={`/${locale}/docs/humanization/${t.cta.href}`}
              className="void-btn void-btn-accent inline-flex items-center gap-2"
            >
              {t.cta.button}
              <BarChart3 className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
