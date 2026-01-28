import type { ExtendedAgentContent } from '../types';

export const b5Content: ExtendedAgentContent = {
  agentId: 'B5',
  vsProcess: {
    type: 'LIGHT',
    phases: [
      { number: 1, title: { en: 'Workload Distribution', ko: '작업 부하 분배' }, purpose: { en: 'Split large document sets across parallel workers', ko: '대규모 문서 세트를 병렬 작업자에 분배' } },
      { number: 2, title: { en: 'Parallel Extraction', ko: '병렬 추출' }, purpose: { en: 'Extract data from multiple PDFs simultaneously', ko: '여러 PDF에서 동시에 데이터 추출' } },
      { number: 3, title: { en: 'Result Aggregation', ko: '결과 집계' }, purpose: { en: 'Merge extracted data with conflict resolution', ko: '충돌 해결과 함께 추출된 데이터 병합' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'document_collection', description: { en: 'PDF files or URLs to process', ko: '처리할 PDF 파일 또는 URL' } },
      { name: 'extraction_schema', description: { en: 'What data to extract from each document', ko: '각 문서에서 추출할 데이터' } },
    ],
  },
};
