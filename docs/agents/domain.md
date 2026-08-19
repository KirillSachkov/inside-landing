# Domain docs

Landing is a single-context repository. Before product, copy or visual work, read the relevant
local sources:

- `product/README.md` for the repository-owned product contract;
- `playbook/README.md` for the Landing-specific design process;
- `visual/` and `references/` for confirmed visual direction and evidence;
- `CONTEXT.md` and relevant `docs/adr/` entries when they exist.

Missing context or ADR files are not setup failures; `domain-modeling` creates them lazily when
durable terminology or a hard-to-reverse trade-off is actually resolved. Landing must not read a
machine-local Workspace path at build, test, deploy or agent runtime.
