'use client';

import { motion } from 'framer-motion';
import { supportedDatabases } from '@/lib/data/features';

interface DatabaseLogosProps {
  locale: string;
}

export function DatabaseLogos({ locale }: DatabaseLogosProps) {
  return (
    <div className="relative w-full py-12">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 font-display text-heading-2 font-bold text-stellar-core">
          {locale === 'ko' ? '지원 데이터베이스' : 'Supported Databases'}
        </h2>
        <p className="mx-auto max-w-2xl text-body text-stellar-dim">
          {locale === 'ko'
            ? 'API 기반 자동 검색 및 PDF 다운로드를 지원하는 세 가지 주요 학술 데이터베이스'
            : 'Three major academic databases with API-based automated retrieval and PDF download support'}
        </p>
      </motion.div>

      {/* Database Cards Grid */}
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {supportedDatabases.map((database, index) => (
            <motion.div
              key={database.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden border border-stellar-faint/20 bg-void-elevated p-6 transition-all duration-300 hover:border-tscore-creative/40 hover:bg-void-hover"
            >
              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(68, 255, 170, 0.1), transparent 70%)',
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Database Icon/Logo Placeholder */}
                <div className="mb-4 flex h-16 items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center border border-tscore-creative/30 bg-void-deep text-2xl transition-all duration-300 group-hover:border-tscore-creative group-hover:shadow-glow-prisma">
                    {database.id === 'semantic-scholar' && '🎓'}
                    {database.id === 'openalex' && '🔬'}
                    {database.id === 'arxiv' && '📄'}
                  </div>
                </div>

                {/* Database Name */}
                <h3 className="mb-3 text-center font-display text-lg font-bold text-stellar-core transition-colors duration-300 group-hover:text-tscore-creative">
                  {database.name}
                </h3>

                {/* Open Access Rate Badge */}
                <div className="mb-4 flex justify-center">
                  <div className="border border-tscore-creative/40 bg-tscore-creative/10 px-3 py-1.5">
                    <div className="text-center">
                      <div className="font-mono text-xl font-bold text-tscore-creative">
                        {database.openAccessRate}
                      </div>
                      <div className="text-micro uppercase tracking-wider text-stellar-dim">
                        {locale === 'ko' ? '오픈 액세스' : 'Open Access'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* API Status Badge */}
                <div className="flex items-center justify-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      database.requiresKey
                        ? 'bg-checkpoint-optional'
                        : 'bg-tscore-creative'
                    }`}
                  />
                  <span className="font-mono text-caption text-stellar-dim">
                    {database.requiresKey
                      ? locale === 'ko'
                        ? 'API 키 필요'
                        : 'API Key Required'
                      : locale === 'ko'
                      ? 'API 키 불필요'
                      : 'No API Key'}
                  </span>
                </div>

                {/* API Endpoint (Hover Detail) */}
                <div className="mt-4 border-t border-stellar-faint/10 pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="font-mono text-micro text-stellar-dim">
                    {locale === 'ko' ? 'API 엔드포인트' : 'API Endpoint'}
                  </div>
                  <div className="mt-1 break-all font-mono text-caption text-tscore-creative/80">
                    {database.apiEndpoint}
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div
                className="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-tscore-creative opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                style={{ filter: 'blur(20px)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Database Strategy Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 border border-tscore-creative/30 bg-void-elevated/50 p-6 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="h-2 w-2 rounded-full bg-tscore-creative" />
            </div>
            <div>
              <h4 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-tscore-creative">
                {locale === 'ko' ? '자동화 우선 전략' : 'Automation-First Strategy'}
              </h4>
              <p className="text-caption leading-relaxed text-stellar-dim">
                {locale === 'ko'
                  ? '이 세 데이터베이스는 REST API와 오픈 액세스 PDF를 제공하여 완전 자동화된 체계적 문헌고찰을 가능하게 합니다. PubMed, Scopus, ERIC와 같은 전통적 데이터베이스는 자동 PDF 접근을 제공하지 않습니다. 세 데이터베이스를 결합하면 전체적으로 50-60%의 PDF 검색 성공률을 달성합니다.'
                  : 'These three databases provide REST APIs and open access PDFs, enabling fully automated systematic reviews. Traditional databases like PubMed, Scopus, and ERIC do not provide automated PDF access. Combined, these three databases achieve 50-60% overall PDF retrieval success rate.'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Rate Limit Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 border border-stellar-faint/20 bg-void-elevated/30 p-5"
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 text-xl">⚡</div>
            <div>
              <h4 className="mb-1 font-display text-sm font-bold text-stellar-core">
                {locale === 'ko' ? '속도 제한 자동 관리' : 'Automated Rate Limit Handling'}
              </h4>
              <p className="text-caption leading-relaxed text-stellar-dim">
                {locale === 'ko'
                  ? 'Diverga는 각 데이터베이스의 속도 제한을 자동으로 관리합니다. OpenAlex는 polite pool을 위한 mailto 파라미터를 사용하며, arXiv는 요청 간 3초 지연을 구현합니다.'
                  : 'Diverga automatically manages rate limits for each database. OpenAlex uses mailto parameter for polite pool, and arXiv implements 3-second delays between requests.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
