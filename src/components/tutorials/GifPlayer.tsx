'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import type { Locale } from './types';

interface GifPlayerProps {
  src: string;
  alt: string;
  caption?: { en: string; ko: string };
  locale: Locale;
}

export default function GifPlayer({ src, alt, caption, locale }: GifPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isGif = src.toLowerCase().endsWith('.gif');

  const togglePlay = () => {
    if (!isGif) return;

    const img = document.querySelector(`img[alt="${alt}"]`) as HTMLImageElement;
    if (!img) return;

    if (isPlaying) {
      // Pause by replacing src with static version
      const staticSrc = src.replace('.gif', '-static.png');
      img.src = staticSrc;
    } else {
      // Resume by adding timestamp to force reload
      img.src = src + '?t=' + Date.now();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="relative group rounded-lg overflow-hidden border border-void-200 dark:border-void-800 bg-void-50 dark:bg-void-950">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-void-100 dark:bg-void-900">
            <motion.div
              className="w-8 h-8 border-4 border-accent-purple/30 border-t-accent-purple rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        )}

        {/* Image/GIF */}
        <div
          className="relative cursor-pointer"
          onClick={() => setIsZoomed(true)}
        >
          <Image
            src={src}
            alt={alt}
            width={800}
            height={600}
            className="w-full h-auto"
            onLoad={() => setIsLoading(false)}
            unoptimized={isGif}
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-black/50 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Controls */}
        {isGif && (
          <div className="absolute top-3 right-3 flex gap-2">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? (
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </motion.button>
          </div>
        )}

        {/* Caption */}
        {caption && (
          <div className="px-4 py-3 border-t border-void-200 dark:border-void-800 bg-void-100 dark:bg-void-900">
            <p className="text-sm text-void-600 dark:text-void-400 text-center">
              {caption[locale]}
            </p>
          </div>
        )}
      </div>

      {/* Zoomed Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                width={1600}
                height={1200}
                className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg"
                unoptimized={isGif}
              />

              {/* Close Button */}
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-center">{caption[locale]}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
