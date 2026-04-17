# Setup guide

## Step 1 — Install the flow from UPLIZD Marketplace

1. Open **[Lead Researcher Agent on UPLIZD Marketplace](https://marketplace.uplizd.ai/marketplace/lead-researcher-agent)**
2. Click **Install**
3. Open the flow in your UPLIZD workspace
4. Copy the **Flow ID** from the URL (segment after `/flow/`)
5. **Settings → API Keys** → create or copy your key
6. In the flow: configure **OpenAI** on the Language Model node, **Composio** on Apollo / HubSpot nodes, and **Web Search** action `PERFORM_SEARCH` as in the template

## Step 2 — Configure `.env`

```bash
cp .env.example .env
```

Edit `.env`:

```bash
UPLIZD_API_KEY=your_actual_api_key
UPLIZD_FLOW_ID=your_actual_flow_id
```

## Step 3 — Install and run

```bash
npm run install:all
npm run dev
```

## Step 4 — Health check

```bash
curl http://localhost:3001/health
# → {"ok":true,"flowId":"..."}
```

## Step 5 — Open the app

**http://localhost:5173**

---

## Production

- Build frontend: `cd web && npm run build` → deploy `web/dist/`
- Deploy `server/` as a Node service with the same env vars as `.env.example`

Never expose `UPLIZD_API_KEY` in the browser; always use this proxy (or an equivalent backend).
