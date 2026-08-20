import type { AgentationProps } from "agentation";
import type { ComponentType } from "react";

if (import.meta.env.DEV) {
  const [{ createElement }, { createRoot }, { Agentation }] = await Promise.all([
    import("react"),
    import("react-dom/client"),
    import("agentation"),
  ]);

  const container = document.createElement("div");
  container.dataset.agentationHost = "";
  document.body.append(container);

  const AgentationComponent = Agentation as ComponentType<AgentationProps>;
  createRoot(container).render(
    createElement(AgentationComponent, { endpoint: "http://localhost:4747" }),
  );
}
