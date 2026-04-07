'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function OrchestratorPage() {
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

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Orchestrator</h1>
        <p className="text-lg text-gray-600 mb-12">
          <code className="text-base bg-gray-100 px-2 py-0.5 rounded">/diverga:orchestrator</code> is the execution layer.
          It receives agent IDs, picks a dispatch strategy, and manages the team or subagent lifecycle.
          Introduced in v12.0 to replace the separate <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">research-orchestrator</code>{' '}
          and <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">vs-arena</code> skills.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What it does</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Agent Teams dispatch when <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1</code> is set</li>
            <li>Sequential or parallel subagent dispatch as fallback</li>
            <li>VS Arena debate (a 7-stage protocol where multiple persona agents argue methodology trade-offs)</li>
            <li>Token cost confirmation before spawning a team</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What it does not do</h2>
          <p className="text-gray-700 mb-3">
            The orchestrator is execution only. It does not handle:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Paradigm detection (handled by <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">research-coordinator</code>)</li>
            <li>Checkpoint enforcement (handled by <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">research-coordinator</code> and PreToolUse hooks)</li>
            <li>Agent selection logic (handled by <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">research-coordinator</code>)</li>
          </ul>
          <p className="text-gray-700 mt-3">
            The dependency runs one direction: coordinator calls orchestrator, never the reverse.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to invoke directly</h2>
          <p className="text-gray-700 mb-3">
            Most users describe what they want in natural language and let <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">research-coordinator</code> route the request.
            Direct invocation is useful when you already know you want parallel or debate execution:
          </p>
          <pre className="bg-gray-900 text-gray-100 text-sm p-4 rounded-lg overflow-x-auto">
            <code>{`/diverga:orchestrator
  agents: [C1, C2, C3]
  mode: parallel
  task: "evaluate this RQ for each design paradigm"`}</code>
          </pre>
          <p className="text-gray-700 mt-3">
            The orchestrator confirms token cost before spawning the team and presents results at a checkpoint.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">See also</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <Link href={`/${locale}/docs/agent-teams`} className="text-violet-700 hover:underline">
                Agent Teams
              </Link>{' '}
              — dispatch model and Team Dispatch Bypass
            </li>
            <li>
              <Link href={`/${locale}/docs/cli`} className="text-violet-700 hover:underline">
                CLI Reference
              </Link>{' '}
              — full command list
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
