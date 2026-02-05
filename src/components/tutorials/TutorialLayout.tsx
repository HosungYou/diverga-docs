'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StepIndicator from './StepIndicator';
import CodeBlock from './CodeBlock';
import GifPlayer from './GifPlayer';
import type { Tutorial, Locale } from './types';

interface TutorialLayoutProps {
  tutorial: Tutorial;
  locale: Locale;
  onComplete?: () => void;
}

export default function TutorialLayout({
  tutorial,
  locale,
  onComplete
}: TutorialLayoutProps) {
  const [currentStep, setCurrentStep] = useState(1);

  const currentStepData = tutorial.steps.find(s => s.id === currentStep);
  const isLastStep = currentStep === tutorial.steps.length;
  const isFirstStep = currentStep === 1;

  const handleNext = () => {
    if (isLastStep) {
      onComplete?.();
    } else {
      setCurrentStep(prev => Math.min(prev + 1, tutorial.steps.length));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold text-void-900 dark:text-void-50">
            {tutorial.title[locale]}
          </h1>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            tutorial.difficulty === 'beginner'
              ? 'bg-accent-green/10 text-accent-green border border-accent-green/20'
              : tutorial.difficulty === 'intermediate'
              ? 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20'
              : 'bg-accent-purple/10 text-accent-purple border border-accent-purple/20'
          }`}>
            {tutorial.difficulty === 'beginner'
              ? locale === 'en' ? 'Beginner' : '초급'
              : tutorial.difficulty === 'intermediate'
              ? locale === 'en' ? 'Intermediate' : '중급'
              : locale === 'en' ? 'Advanced' : '고급'
            }
          </span>
        </div>
        <p className="text-lg text-void-600 dark:text-void-400">
          {tutorial.description[locale]}
        </p>
      </div>

      {/* Step Indicator */}
      <div className="mb-12">
        <StepIndicator
          currentStep={currentStep}
          totalSteps={tutorial.steps.length}
          steps={tutorial.steps}
          onStepClick={handleStepClick}
          locale={locale}
        />
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        {currentStepData && (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Step Description */}
            <div className="prose prose-void dark:prose-invert max-w-none">
              <p className="text-lg text-void-700 dark:text-void-300">
                {currentStepData.description[locale]}
              </p>
            </div>

            {/* Code Block */}
            {currentStepData.code && (
              <CodeBlock
                code={currentStepData.code}
                language="typescript"
                showLineNumbers={true}
              />
            )}

            {/* GIF/Image */}
            {currentStepData.gif && (
              <GifPlayer
                src={currentStepData.gif}
                alt={currentStepData.title[locale]}
                locale={locale}
              />
            )}

            {/* Image (static) */}
            {currentStepData.image && !currentStepData.gif && (
              <GifPlayer
                src={currentStepData.image}
                alt={currentStepData.title[locale]}
                locale={locale}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-12 pt-8 border-t border-void-200 dark:border-void-800">
        <button
          onClick={handlePrevious}
          disabled={isFirstStep}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
            isFirstStep
              ? 'opacity-50 cursor-not-allowed text-void-400'
              : 'hover:bg-void-100 dark:hover:bg-void-900 text-void-700 dark:text-void-300'
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {locale === 'en' ? 'Previous' : '이전'}
        </button>

        <div className="flex items-center gap-2 text-sm text-void-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {currentStepData?.duration || tutorial.duration}
        </div>

        <motion.button
          onClick={handleNext}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
            isLastStep
              ? 'bg-accent-green hover:bg-accent-green/90 text-white'
              : 'bg-accent-purple hover:bg-accent-purple/90 text-white'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLastStep ? (
            <>
              <span>{locale === 'en' ? 'Complete' : '완료'}</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </>
          ) : (
            <>
              <span>{locale === 'en' ? 'Next' : '다음'}</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}
