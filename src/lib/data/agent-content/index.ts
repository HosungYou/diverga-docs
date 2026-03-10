import type { ExtendedAgentContent } from '../types';

// Import individual agent content files
import { a1Content } from './a1-content';
import { a2Content } from './a2-content';
import { a5Content } from './a5-content';
import { b1Content } from './b1-content';
import { b2Content } from './b2-content';
import { c1Content } from './c1-content';
import { c2Content } from './c2-content';
import { c3Content } from './c3-content';
import { c5Content } from './c5-content';
import { d2Content } from './d2-content';
import { d4Content } from './d4-content';
import { e1Content } from './e1-content';
import { e2Content } from './e2-content';
import { e3Content } from './e3-content';
import { f5Content } from './f5-content';
import { g1Content } from './g1-content';
import { g2Content } from './g2-content';
import { g5Content } from './g5-content';
import { g6Content } from './g6-content';
import { i0Content } from './i0-content';
import { i1Content } from './i1-content';
import { i2Content } from './i2-content';
import { i3Content } from './i3-content';
import { x1Content } from './x1-content';

const allContent: Record<string, ExtendedAgentContent> = {
  A1: a1Content,
  A2: a2Content,
  A5: a5Content,
  B1: b1Content,
  B2: b2Content,
  C1: c1Content,
  C2: c2Content,
  C3: c3Content,
  C5: c5Content,
  D2: d2Content,
  D4: d4Content,
  E1: e1Content,
  E2: e2Content,
  E3: e3Content,
  F5: f5Content,
  G1: g1Content,
  G2: g2Content,
  G5: g5Content,
  G6: g6Content,
  I0: i0Content,
  I1: i1Content,
  I2: i2Content,
  I3: i3Content,
  X1: x1Content,
};

export function getAgentContent(agentId: string): ExtendedAgentContent | undefined {
  return allContent[agentId];
}

export { allContent };
