import React from "react";

/** Matches UPLIZD flow: Composio Apollo + Web Search + HubSpot wired to the Agent node */
const TOOLS = [
  { label: "Apollo (Composio)", color: "#4F46E5" },
  { label: "Web Search", color: "#888780" },
  { label: "HubSpot (Composio)", color: "#FF7A59" },
];

const QUICK_PROMPTS = [
  "ICP: B2B SaaS, 50–200 employees, VP Sales / RevOps, United States — build enriched prospect list",
  "Industry: fintech, Series B, EU — titles CTO & Head of Engineering, include tech stack signals",
  "Use Apollo + web research: companies using HubSpot with sales-led outbound motion",
  "Refine last ICP — add geography Canada, exclude agencies, require ≥2 buying-signal bullets per lead",
];

export default function Sidebar({ onQuickPrompt, onReset }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo" aria-hidden>
          LR
        </div>
        <h1 className="sidebar-title">Lead Researcher Agent</h1>
        <p className="sidebar-sub">Powered by UPLIZD</p>
      </div>

      <section className="sidebar-section">
        <div className="sidebar-section-label">Flow tools</div>
        <p className="sidebar-hint">
          The hosted flow uses <strong>gpt-4o-mini</strong>, a system prompt built from{" "}
          <code>agent_md</code> + <code>execution_rule</code>, and these Composio / search tools.
        </p>
        <div className="sidebar-tools">
          {TOOLS.map((t) => (
            <div key={t.label} className="sidebar-tool">
              <span
                className="sidebar-tool-dot"
                style={{ background: t.color }}
                aria-hidden
              />
              {t.label}
            </div>
          ))}
        </div>
      </section>

      <section className="sidebar-section">
        <div className="sidebar-section-label">Quick prompts</div>
        <div className="sidebar-chips">
          {QUICK_PROMPTS.map((p) => (
            <button
              key={p}
              type="button"
              className="sidebar-chip"
              onClick={() => onQuickPrompt(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </section>

      <div className="sidebar-spacer" />

      <button type="button" className="sidebar-reset" onClick={onReset}>
        New session
      </button>
    </aside>
  );
}
