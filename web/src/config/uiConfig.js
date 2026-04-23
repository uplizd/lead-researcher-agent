/**
 * Sidebar copy + integrations list (matches the Lead Researcher flow on UPLIZD).
 */

export const BRAND = Object.freeze({
  logoLetters: "LR",
  title: "Lead Researcher Agent",
  poweredBy: "Powered by UPLIZD",
});

/** @type {{ label: string, color: string }[]} */
export const SIDEBAR_TOOLS = Object.freeze([
  { label: "Apollo (Composio)", color: "#4F46E5" },
  { label: "Web Search", color: "#888780" },
  { label: "HubSpot (Composio)", color: "#FF7A59" },
]);

/** @type {readonly string[]} */
export const QUICK_PROMPTS = Object.freeze([
  "ICP: B2B SaaS, 50–200 employees, VP Sales / RevOps, United States — build enriched prospect list",
  "Industry: fintech, Series B, EU — titles CTO & Head of Engineering, include tech stack signals",
  "Use Apollo + web research: companies using HubSpot with sales-led outbound motion",
  "Refine last ICP — add geography Canada, exclude agencies, require ≥2 buying-signal bullets per lead",
]);

export const SIDEBAR_SECTION_TOOLS = "Flow tools";
export const SIDEBAR_SECTION_PROMPTS = "Quick prompts";
