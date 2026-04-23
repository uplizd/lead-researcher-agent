import React from "react";

/**
 * Explains how the hosted Langflow template wires gpt-4o-mini + Composio toolkits.
 */
export default function LeadResearcherFlowHint() {
  return (
    <p className="sidebar-hint">
      The hosted flow uses <strong>gpt-4o-mini</strong>, a system prompt built from{" "}
      <code>agent_md</code> + <code>execution_rule</code>, and these Composio / search tools.
    </p>
  );
}
