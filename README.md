# gen-ai-list-assist

AI-powered eBay listing assistant — a monorepo containing the Python/Redis MCP agent pipeline and the React/Vite web UI.

## 🌐 Live Web UI

**[https://jenr8ed.github.io/gen-ai-list-assist/](https://jenr8ed.github.io/gen-ai-list-assist/)**

Deployed automatically via GitHub Actions on every push to `main`.

---

## 📁 Repository Structure

```
gen-ai-list-assist/
├── mcp_redis_server.py      # MCP Redis agent server
├── review_dashboard.py      # Streamlit review dashboard
├── waterfall_monitor.py     # Streamlit waterfall monitor
├── deploy_services.sh       # WSL2 service bootstrap script
├── ROADMAP.md               # Feature roadmap
├── SOP_Setup.md             # Setup SOP
├── dev_notebook.md          # Dev notes
│
├── web/                     # React + Vite + TypeScript frontend
│   ├── client/              # React app source
│   ├── server/              # Express API (local dev only)
│   ├── shared/              # Shared types / schema
│   ├── vite.config.ts       # Vite config (GitHub Pages base path set)
│   └── package.json
│
└── .github/
    └── workflows/
        └── deploy.yml       # CI: build web UI → deploy to GitHub Pages
```

---

## 🚀 Web UI — Local Dev

```bash
cd web
pnpm install
pnpm dev
```

Requires Node 20+ and pnpm 9+.

---

## 🐍 Python Backend — Local Dev

```bash
# Start Redis + MCP server + dashboards (WSL2)
bash deploy_services.sh
```

See [SOP_Setup.md](./SOP_Setup.md) for full environment setup.

---

## 🔁 CI/CD

The GitHub Actions workflow in `.github/workflows/deploy.yml`:
1. Installs pnpm deps from `web/`
2. Runs `pnpm build` (Vite outputs to `web/dist/public`)
3. Pushes the build to the `gh-pages` branch via `peaceiris/actions-gh-pages`

> **Note:** After the first successful workflow run, go to **Settings → Pages** and set Source to `gh-pages` branch.
