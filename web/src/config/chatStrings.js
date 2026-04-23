/**
 * Chat panel microcopy — kept in JS so product strings stay editable and testable.
 */

export const CHAT_HEADER_TITLE = "Playground";

export const CHAT_HEADER_DESCRIPTION =
  "Describe ICP criteria (industry, headcount, titles, geography, tech stack). The UPLIZD flow runs Apollo, web search, and HubSpot via Composio to build enriched prospect lists.";

export const EMPTY_STATE = Object.freeze({
  iconLetters: "LR",
  title: "Start a new session",
  body: "Paste ICP fields or use a quick prompt. Shift+Enter adds a new line.",
});

export const COMPOSER_PLACEHOLDER =
  "e.g. Industry, company size, titles, region, tech stack — or paste ICP notes…";

export const RUN_BUTTON_IDLE = "Run";
export const RUN_BUTTON_BUSY = "Running…";
