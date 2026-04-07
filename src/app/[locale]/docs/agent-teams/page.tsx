'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AgentTeamsPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href={`/${locale}/docs`}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Docs
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Agent Teams</h1>
        <p className="text-lg text-gray-600 mb-12">
          Agent Teams runs multiple Diverga agents in parallel through Claude Code's experimental teams feature.
          Dispatched by <Link href={`/${locale}/docs/orchestrator`} className="text-violet-700 hover:underline">/diverga:orchestrator</Link>.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Activation</h2>
          <p className="text-gray-700 mb-3">
            Agent Teams is gated behind an environment variable. Set it in your shell or Claude Code launch environment:
          </p>
          <pre className="bg-gray-900 text-gray-100 text-sm p-4 rounded-lg overflow-x-auto">
            <code>export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1</code>
          </pre>
          <p className="text-gray-700 mt-3">
            When unset, the orchestrator falls back to sequential or parallel subagent dispatch (Task tool with{' '}
            <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">run_in_background</code>).
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">When the orchestrator picks teams over subagents</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Inter-agent debate</strong>: VS Arena, cross-method comparison, competing hypotheses</li>
            <li><strong>Parallel independent work</strong>: multi-database paper fetch, parallel review, concurrent analysis</li>
            <li><strong>Sequential pipelines</strong>: subagents are used (e.g., G5 → G6 → F5 humanization)</li>
            <li><strong>Single agent calls</strong>: direct Task dispatch, no team needed</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Team Dispatch Bypass</h2>
          <p className="text-gray-700 mb-3">
            When the orchestrator dispatches a team, it injects <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">DIVERGA_TEAM_DISPATCH=1</code> into
            each agent prompt. The PreToolUse prerequisite hook reads this flag and skips the per-agent checkpoint check.
          </p>
          <p className="text-gray-700 mb-3">
            This is intentional: the orchestrator already obtained user approval for the dispatch as a whole, so re-checking
            each individual agent would block the team from running. Without this bypass, non-entry-point agents (A2, B2, E1, and
            others) would be hard-blocked when dispatched as a team because their downstream checkpoints are not yet approved.
          </p>
          <div className="border-l-4 border-amber-400 bg-amber-50 p-4 rounded">
            <p className="text-sm text-amber-900">
              The bypass applies <strong>only</strong> when the orchestrator dispatches a team. Direct user calls like{' '}
              <code className="text-xs bg-amber-100 px-1.5 py-0.5 rounded">/diverga:e1</code> still go through the normal
              prerequisite enforcement (see Checkpoint Rule 7).
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Token cost</h2>
          <p className="text-gray-700">
            Before spawning a team, the orchestrator prompts for explicit confirmation. Each teammate runs as an independent
            session and consumes its own context window.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">See also</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <Link href={`/${locale}/docs/orchestrator`} className="text-violet-700 hover:underline">
                Orchestrator
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/docs/checkpoints`} className="text-violet-700 hover:underline">
                Checkpoints
              </Link>{' '}
              — Rule 7 documents the bypass
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
