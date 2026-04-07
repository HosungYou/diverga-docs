'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const COORDINATION_SKILLS = [
  { command: '/diverga:orchestrator', description: 'Unified orchestrator. Replaces /diverga-research-orchestrator and /diverga-vs-arena. Dispatches Agent Teams, runs VS Arena debate, falls back to subagents.' },
  { command: '/diverga:research-coordinator', description: 'Routes natural-language research requests to the right agents.' },
  { command: '/diverga:setup', description: 'Two-step researcher profile interview (discipline, experience, stats software, database access).' },
  { command: '/diverga:doctor', description: 'System diagnostics and health checks.' },
  { command: '/diverga:humanize', description: 'Multi-pass humanization pipeline (G5 audit, G6 transform, F5 verify).' },
  { command: '/diverga:memory', description: 'Memory system inspection and management.' },
  { command: '/diverga:hud', description: 'HUD statusline configuration.' },
  { command: '/diverga:diverga', description: 'Dashboard. Live config status and feature overview.' },
  { command: '/diverga:help', description: 'List all 24 agents and 10 coordination skills.' },
  { command: '/diverga:universal-ma-codebook', description: 'Meta-analysis codebook for AI-human extraction collaboration.' },
];

const AGENT_SKILLS = [
  { id: 'A1', command: '/diverga:a1', name: 'Research Question Refiner' },
  { id: 'A2', command: '/diverga:a2', name: 'Theory and Critique Architect' },
  { id: 'A5', command: '/diverga:a5', name: 'Paradigm and Worldview Advisor' },
  { id: 'B1', command: '/diverga:b1', name: 'Literature Review Strategist' },
  { id: 'B2', command: '/diverga:b2', name: 'Evidence Quality Appraiser' },
  { id: 'C1', command: '/diverga:c1', name: 'Quantitative Design Consultant' },
  { id: 'C2', command: '/diverga:c2', name: 'Qualitative Design Consultant' },
  { id: 'C3', command: '/diverga:c3', name: 'Mixed Methods Design Consultant' },
  { id: 'C5', command: '/diverga:c5', name: 'Meta-Analysis Master' },
  { id: 'D2', command: '/diverga:d2', name: 'Data Collection Specialist' },
  { id: 'D4', command: '/diverga:d4', name: 'Measurement Instrument Developer' },
  { id: 'E1', command: '/diverga:e1', name: 'Quantitative Analysis Guide' },
  { id: 'E2', command: '/diverga:e2', name: 'Qualitative Coding Specialist' },
  { id: 'E3', command: '/diverga:e3', name: 'Mixed Methods Integration Specialist' },
  { id: 'F5', command: '/diverga:f5', name: 'Humanization Quality Verifier' },
  { id: 'G1', command: '/diverga:g1', name: 'Journal Matcher' },
  { id: 'G2', command: '/diverga:g2', name: 'Publication Specialist' },
  { id: 'G5', command: '/diverga:g5', name: 'Academic Style Auditor' },
  { id: 'G6', command: '/diverga:g6', name: 'Academic Style Humanizer' },
  { id: 'I0', command: '/diverga:i0', name: 'Systematic Review Pipeline Orchestrator' },
  { id: 'I1', command: '/diverga:i1', name: 'Paper Retrieval Agent' },
  { id: 'I2', command: '/diverga:i2', name: 'Screening Assistant' },
  { id: 'I3', command: '/diverga:i3', name: 'RAG Builder' },
  { id: 'X1', command: '/diverga:x1', name: 'Research Guardian' },
];

const ENV_VARS = [
  {
    name: 'CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS',
    value: '1',
    description: 'Enables the Agent Teams dispatch path. The orchestrator runs multiple agents in parallel via Claude Code teams. Falls back to sequential subagent dispatch when unset.',
  },
  {
    name: 'DIVERGA_TEAM_DISPATCH',
    value: '1',
    description: 'Set internally by /diverga:orchestrator when dispatching a team. Bypasses individual agent prerequisite checks because the orchestrator already obtained user approval. Do not set this manually.',
  },
];

export default function CLIPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href={`/${locale}/docs`}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Docs
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">CLI Reference</h1>
        <p className="text-lg text-gray-600 mb-12">
          All Diverga skills available as <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">/diverga:&lt;name&gt;</code> commands in Claude Code.
          v12 unified <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">research-orchestrator</code> and{' '}
          <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">vs-arena</code> into{' '}
          <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">/diverga:orchestrator</code>.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Coordination and pipelines</h2>
          <p className="text-gray-600 mb-6">Ten skills that orchestrate multi-agent workflows or manage system state.</p>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {COORDINATION_SKILLS.map((skill, i) => (
                  <tr key={skill.command} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-mono text-violet-700 align-top whitespace-nowrap">
                      {skill.command}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{skill.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Agent skills</h2>
          <p className="text-gray-600 mb-6">
            Twenty-four agents across nine categories (A, B, C, D, E, F, G, I, X). Each can be invoked directly,
            but most users describe what they need in natural language and let{' '}
            <Link href={`/${locale}/docs/orchestrator`} className="text-violet-700 hover:underline">
              the orchestrator
            </Link>{' '}
            route the request.
          </p>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {AGENT_SKILLS.map((agent, i) => (
                  <tr key={agent.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-mono text-gray-500 w-12">{agent.id}</td>
                    <td className="px-4 py-3 font-mono text-violet-700 whitespace-nowrap">{agent.command}</td>
                    <td className="px-4 py-3 text-gray-700">{agent.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Environment variables</h2>
          <p className="text-gray-600 mb-6">Two flags control orchestration behavior. Set them in your shell or Claude Code launch environment.</p>
          <div className="space-y-4">
            {ENV_VARS.map((envVar) => (
              <div key={envVar.name} className="border border-gray-200 rounded-lg p-4">
                <div className="font-mono text-sm text-violet-700 mb-2">
                  {envVar.name}={envVar.value}
                </div>
                <p className="text-sm text-gray-700">{envVar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Removed in v12</h2>
          <p className="text-gray-600 mb-4">
            The following commands no longer exist. Use <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">/diverga:orchestrator</code> instead.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">/diverga:research-orchestrator</code>{' '}
              (merged into orchestrator)
            </li>
            <li>
              <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">/diverga:vs-arena</code>{' '}
              (now a mode of orchestrator)
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
