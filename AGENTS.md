# inside-landing

Landing for **Sachkov Inside** — Kirill Sachkov's authorial engineering membership.

Write agent-facing documents in English. Preserve the original language of user-submitted content.

## Working agreements

- For product, copy, visual, reference or UI work, read `docs/agents/domain.md`; it routes to the
  relevant local source of truth.
- For GitHub triage or Wayfinder operations, read `docs/agents/issue-tracker.md` and
  `docs/agents/triage-labels.md`.
- For tracked work, branch from current `main` as `<type>/<issue>-<slug>`. Trivial docs/chore may
  use `<type>/<slug>`. Merge by squash only after explicit owner GO.

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

- Shared skills installed in `.agents/skills/` are managed distribution artifacts. Change their
  canonical source in the Workspace harness, then run the explicit update command.
- Repository-specific instructions and skills remain owned by this repository. Give local skills
  unique names; do not shadow a managed skill.
- Invoke skills only when their descriptions match the task. Installing the suite does not make
  every workflow mandatory for every request.
- Keep this repository autonomous: build, test, run, and deploy must not depend on the Workspace
  repository or on machine-local paths.
- Treat user-level skills, MCP, plugins and hooks as unavailable. Declare every recurring
  capability in this repository's harness and keep credentials in native auth or environment.
- Do not edit `.inside-harness/` manually. Use the Workspace lifecycle commands and review the Git
  diff they produce.
<!-- inside-product-harness:end -->
