'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function DevModePage() {
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

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Dev Mode and Deploy</h1>
        <p className="text-lg text-gray-600 mb-12">
          For developers contributing to Diverga itself. Dev mode replaces the installed plugin with symlinks to a working
          tree, so edits in your repo are picked up immediately. Deploy is a single-command release pipeline.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Selective symlink dev mode</h2>
          <p className="text-gray-700 mb-3">
            <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">scripts/dev.js</code> creates symlinks for
            allowlisted paths only — agents, skills, mcp, hooks, config — into a dev cache. Build artifacts and session
            data are blocked from leaking into the production install.
          </p>
          <p className="text-gray-700 mb-3">Commands:</p>
          <pre className="bg-gray-900 text-gray-100 text-sm p-4 rounded-lg overflow-x-auto">
            <code>{`pnpm dev:on       # activate dev mode
pnpm dev:off      # deactivate, restore previous plugin
pnpm dev:status   # show current dev mode state`}</code>
          </pre>
          <p className="text-gray-700 mt-3">
            Use dev mode for plugin development. Use the regular <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">/plugin update</code>{' '}
            for end-user installs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">One-command deploy</h2>
          <p className="text-gray-700 mb-3">
            <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">scripts/deploy.js</code> runs a six-stage release pipeline:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Pre-flight checks (clean working tree, branch on main, tests passing)</li>
            <li>Build and validate (skill structure, version consistency)</li>
            <li>Version sync across all manifests (<code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">plugin.json</code>, <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">package.json</code>, etc.)</li>
            <li>Git commit, tag, push</li>
            <li>GitHub Release creation</li>
            <li>Cache refresh (reinstall MCP server dependencies)</li>
          </ol>
          <pre className="bg-gray-900 text-gray-100 text-sm p-4 rounded-lg overflow-x-auto mt-4">
            <code>pnpm deploy</code>
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to use which</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Dev mode</strong>: editing skills, agents, hooks, or MCP servers in your local Diverga clone</li>
            <li><strong>Plugin update</strong>: pulling the latest official release as an end user</li>
            <li><strong>Deploy</strong>: cutting a new release from the Diverga repo (maintainers only)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">See also</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <a href="https://github.com/HosungYou/Diverga/blob/main/docs/DEVELOPER.md" target="_blank" rel="noopener noreferrer" className="text-violet-700 hover:underline">
                DEVELOPER.md
              </a>{' '}
              in the Diverga repo
            </li>
            <li>
              <a href="https://github.com/HosungYou/Diverga/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-violet-700 hover:underline">
                CONTRIBUTING.md
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
