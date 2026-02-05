'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = 'typescript',
  filename,
  showLineNumbers = true
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  // Simple syntax highlighting with CSS classes
  const highlightLine = (line: string) => {
    // Keywords
    line = line.replace(
      /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|interface|type|enum)\b/g,
      '<span class="syntax-keyword">$1</span>'
    );

    // Strings
    line = line.replace(
      /(["'`])(?:(?=(\\?))\2.)*?\1/g,
      '<span class="syntax-string">$&</span>'
    );

    // Comments
    line = line.replace(
      /(\/\/.*$|\/\*[\s\S]*?\*\/)/g,
      '<span class="syntax-comment">$1</span>'
    );

    // Numbers
    line = line.replace(
      /\b(\d+)\b/g,
      '<span class="syntax-number">$1</span>'
    );

    return line;
  };

  return (
    <div className="relative group rounded-lg overflow-hidden border border-void-200 dark:border-void-800 bg-void-50 dark:bg-void-950">
      {/* Header */}
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-void-200 dark:border-void-800 bg-void-100 dark:bg-void-900">
          <div className="flex items-center gap-3">
            {filename && (
              <span className="text-sm font-mono text-void-700 dark:text-void-300">
                {filename}
              </span>
            )}
            {language && (
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-accent-purple/10 text-accent-purple">
                {language}
              </span>
            )}
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded hover:bg-void-200 dark:hover:bg-void-800"
            title="Copy code"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.svg
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="w-4 h-4 text-accent-green"
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
                </motion.svg>
              ) : (
                <motion.svg
                  key="copy"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="w-4 h-4 text-void-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      )}

      {/* Code Content */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm font-mono">
          <code>
            {lines.map((line, index) => (
              <div key={index} className="flex">
                {showLineNumbers && (
                  <span className="inline-block w-8 text-right mr-4 text-void-400 dark:text-void-600 select-none">
                    {index + 1}
                  </span>
                )}
                <span
                  className="flex-1 text-void-800 dark:text-void-200"
                  dangerouslySetInnerHTML={{ __html: highlightLine(line) || ' ' }}
                />
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Syntax Highlighting Styles */}
      <style jsx>{`
        :global(.syntax-keyword) {
          color: #c678dd;
          font-weight: 600;
        }
        :global(.syntax-string) {
          color: #98c379;
        }
        :global(.syntax-comment) {
          color: #5c6370;
          font-style: italic;
        }
        :global(.syntax-number) {
          color: #d19a66;
        }
      `}</style>
    </div>
  );
}
