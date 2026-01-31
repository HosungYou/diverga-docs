import type { ExtendedAgentContent } from '../types';

// Import individual agent content files
import { a1Content } from './a1-content';
import { a2Content } from './a2-content';
import { a3Content } from './a3-content';
import { a4Content } from './a4-content';
import { a5Content } from './a5-content';
import { a6Content } from './a6-content';
import { b1Content } from './b1-content';
import { b2Content } from './b2-content';
import { b3Content } from './b3-content';
import { b4Content } from './b4-content';
import { b5Content } from './b5-content';
import { c1Content } from './c1-content';
import { c2Content } from './c2-content';
import { c3Content } from './c3-content';
import { c4Content } from './c4-content';
import { c5Content } from './c5-content';
import { c6Content } from './c6-content';
import { c7Content } from './c7-content';
import { d1Content } from './d1-content';
import { d2Content } from './d2-content';
import { d3Content } from './d3-content';
import { d4Content } from './d4-content';
import { e1Content } from './e1-content';
import { e2Content } from './e2-content';
import { e3Content } from './e3-content';
import { e4Content } from './e4-content';
import { e5Content } from './e5-content';
import { f1Content } from './f1-content';
import { f2Content } from './f2-content';
import { f3Content } from './f3-content';
import { f4Content } from './f4-content';
import { f5Content } from './f5-content';
import { g1Content } from './g1-content';
import { g2Content } from './g2-content';
import { g3Content } from './g3-content';
import { g4Content } from './g4-content';
import { g5Content } from './g5-content';
import { g6Content } from './g6-content';
import { h1Content } from './h1-content';
import { h2Content } from './h2-content';
import { i0Content } from './i0-content';
import { i1Content } from './i1-content';
import { i2Content } from './i2-content';
import { i3Content } from './i3-content';

const allContent: Record<string, ExtendedAgentContent> = {
  A1: a1Content,
  A2: a2Content,
  A3: a3Content,
  A4: a4Content,
  A5: a5Content,
  A6: a6Content,
  B1: b1Content,
  B2: b2Content,
  B3: b3Content,
  B4: b4Content,
  B5: b5Content,
  C1: c1Content,
  C2: c2Content,
  C3: c3Content,
  C4: c4Content,
  C5: c5Content,
  C6: c6Content,
  C7: c7Content,
  D1: d1Content,
  D2: d2Content,
  D3: d3Content,
  D4: d4Content,
  E1: e1Content,
  E2: e2Content,
  E3: e3Content,
  E4: e4Content,
  E5: e5Content,
  F1: f1Content,
  F2: f2Content,
  F3: f3Content,
  F4: f4Content,
  F5: f5Content,
  G1: g1Content,
  G2: g2Content,
  G3: g3Content,
  G4: g4Content,
  G5: g5Content,
  G6: g6Content,
  H1: h1Content,
  H2: h2Content,
  I0: i0Content,
  I1: i1Content,
  I2: i2Content,
  I3: i3Content,
};

export function getAgentContent(agentId: string): ExtendedAgentContent | undefined {
  return allContent[agentId];
}

export { allContent };
