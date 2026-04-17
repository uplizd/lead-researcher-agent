import { useState, useCallback, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { runFlow } from "../lib/uplizd";

export function useChat() {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      text: `Hi! I'm your Lead Researcher Agent.\n\nGive me ICP criteria — industry, company size, target titles, geography, and optional tech stack — and I'll build an enriched prospect list using the flow on UPLIZD.\n\nThe agent uses Apollo (Composio) for lead data, Web Search for open-web signals, and HubSpot (Composio) for CRM context. Configure OpenAI, Composio, Apollo, and HubSpot credentials inside the flow on UPLIZD before running.`,
      ts: Date.now(),
    },
  ]);
  const [status, setStatus] = useState("idle"); // idle | running | error
  const sessionId = useRef(uuidv4());

  const send = useCallback(async (text) => {
    if (!text.trim() || status === "running") return;

    const userMsg = { id: uuidv4(), role: "user", text: text.trim(), ts: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setStatus("running");

    try {
      const { text: reply } = await runFlow(text.trim(), sessionId.current);
      const assistantMsg = {
        id: uuidv4(),
        role: "assistant",
        text: reply || "Flow completed — no text output returned.",
        ts: Date.now(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setStatus("idle");
    } catch (err) {
      const errMsg = {
        id: uuidv4(),
        role: "error",
        text: `Error: ${err.message}`,
        ts: Date.now(),
      };
      setMessages((prev) => [...prev, errMsg]);
      setStatus("error");
    }
  }, [status]);

  const reset = useCallback(() => {
    sessionId.current = uuidv4();
    setMessages([]);
    setStatus("idle");
  }, []);

  return { messages, status, send, reset, sessionId: sessionId.current };
}
