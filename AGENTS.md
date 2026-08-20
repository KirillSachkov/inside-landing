# inside-landing

Landing for **Sachkov Inside** — Kirill Sachkov's authorial engineering membership.

Write agent-facing documents in English. Preserve the original language of user-submitted content.

## Working agreements

- For product, copy, visual, reference or UI work, read `docs/agents/domain.md`; it routes to the
  relevant local source of truth.
- For GitHub triage or Wayfinder operations, read `docs/agents/issue-tracker.md` and
  `docs/agents/triage-labels.md`.

## Commands and completion

Run from the repository root:

```bash
npm ci --prefix app
npm run dev --prefix app
npm run build --prefix app
npm run verify --prefix app
```

`npm run verify --prefix app` is the full CI-equivalent check; there is no separate test script.
Deploy has no local command: Timeweb deploys `main` through its GitHub integration. Use the
production smoke commands in `README.md` after deployment.

For UI changes, the browser QA and evidence gates in `playbook/README.md` are the Definition of
Done. Record anything not tested in the pull request.

<!-- inside-product-harness:start -->
## Inside product harness

This repository uses the versioned Sachkov Inside product harness.

- For shared issue routing, branches, pull requests, readiness, Project status, and
  owner-controlled merge, read the repository-local `WORKFLOW.md`.
- Shared skills, `WORKFLOW.md`, triage labels, and `.inside-harness/` are managed distribution
  artifacts. Change their canonical package source and distribute them through the harness
  lifecycle; do not hand-edit installed copies.
- Repository-specific instructions and skills remain local. Give local skills unique names; do not
  shadow a managed skill.
- Invoke skills only when their descriptions match the task. Installing the suite does not make
  every workflow mandatory for every request.
- Keep this repository autonomous: build, test, run, deploy, and agent work must not depend on
  another repository, machine-local paths, or user-level skills, MCP, plugins, or hooks.
<!-- inside-product-harness:end -->
