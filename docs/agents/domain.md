# Domain docs

Landing is a single-context repository. Read only the source that matches the task:

- `product/README.md` for the repository-owned product contract;
- `playbook/README.md` for design phases, owner gates and UI Definition of Done;
- `visual/README.md` for confirmed visual and visible-copy rules;
- `references/README.md` when collecting or evaluating visual references;
- `CONTEXT.md` and relevant `docs/adr/` entries when they exist.

Missing context or ADR files are not setup failures; `domain-modeling` creates them lazily when
durable terminology or a hard-to-reverse trade-off is actually resolved. Build, test, deploy and
agent runtime use only versioned files in this repository.
