'use client';

import { motion } from 'framer-motion';
import type { TutorialStep, Locale } from './types';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: TutorialStep[];
  onStepClick?: (step: number) => void;
  locale: Locale;
}

export default function StepIndicator({
  currentStep,
  totalSteps,
  steps,
  onStepClick,
  locale
}: StepIndicatorProps) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full space-y-4">
      {/* Progress Bar */}
      <div className="relative h-1 bg-void-200 dark:bg-void-800 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-purple to-accent-blue"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Step Dots */}
      <div className="flex items-center justify-between">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => onStepClick?.(step.id)}
            disabled={!onStepClick}
            className={`group flex flex-col items-center gap-2 transition-all ${
              onStepClick ? 'cursor-pointer hover:scale-110' : 'cursor-default'
            }`}
          >
            {/* Dot */}
            <div className="relative">
              <motion.div
                className={`w-3 h-3 rounded-full border-2 transition-colors ${
                  step.id === currentStep
                    ? 'border-accent-purple bg-accent-purple'
                    : step.id < currentStep
                    ? 'border-accent-blue bg-accent-blue'
                    : 'border-void-300 dark:border-void-700 bg-transparent'
                }`}
                whileHover={onStepClick ? { scale: 1.2 } : {}}
              />
              {step.id === currentStep && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-accent-purple"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </div>

            {/* Step Number */}
            <span
              className={`text-xs font-mono transition-colors ${
                step.id === currentStep
                  ? 'text-accent-purple font-semibold'
                  : step.id < currentStep
                  ? 'text-accent-blue'
                  : 'text-void-500 dark:text-void-500'
              }`}
            >
              {step.id}
            </span>
          </button>
        ))}
      </div>

      {/* Current Step Info */}
      <div className="text-center space-y-1">
        <div className="text-sm text-void-500 dark:text-void-400 font-mono">
          Step {currentStep} / {totalSteps}
          {steps[currentStep - 1]?.duration && (
            <span className="ml-2">• {steps[currentStep - 1].duration}</span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-void-900 dark:text-void-50">
          {steps[currentStep - 1]?.title[locale]}
        </h3>
      </div>
    </div>
  );
}
