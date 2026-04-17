# Contributing

Thanks for your interest in **Lead Researcher Agent**.

---

## Getting started

```bash
git clone https://github.com/uplizd/lead-researcher-agent.git
cd lead-researcher-agent
cp .env.example .env
npm run install:all
npm run dev
```

---

## Ideas for contributions

- Markdown rendering in chat bubbles
- Copy-to-clipboard on assistant messages
- Session history in `localStorage`
- Streaming responses when UPLIZD supports SSE for your flow

---

## Guidelines

- One component, one responsibility
- No secrets in the repo — use `.env` (gitignored)
- Prefer existing CSS variables in `global.css` / `components.css`
- Discuss new npm dependencies before adding them

---

## PR checklist

- [ ] `npm run build` passes (`cd web && npm run build`)
- [ ] `.env` is not committed
- [ ] PR explains what and why
