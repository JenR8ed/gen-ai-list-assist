# Roadmap & Master Tracker: AI List Assist

This document serves as the **Master Source of Truth** for the development and operational phases of the AI List Assist project.

## Global Environment Note
All tasks assume a sanitized **WSL2 (Ubuntu)** environment. API keys are managed via **Doppler CLI**. Core reasoning engine: **Gemini 3.1 Pro**.

---

## Phase 1: Setup & Initialization
*Objective: Build the isolated local execution environment and sync protocols.*

| ID | Action | Reference | Status |
| :--- | :--- | :--- | :--- |
| 1.0 | **Dev Environment Sync:** Run `handoff_workspace.sh` | Gemini CLI Handoff | [ ] |
| 1.0.1 | **Audit Sync Scripts:** Verify PS 7.6.1 compatibility | Obsidian Sync Scripts | [ ] |
| 1.1 | **WSL2 Initialization:** `wsl --install` | Microsoft Learn | [x] |
| 1.2 | **Branded Naming:** Rename to `AI-List-Assist-WSL` | Operational Guide V1.3 | [ ] |
| 1.3 | **Visual Sanitization:** Set Terminal colors (#800080) | Operational Guide V1.3 | [ ] |
| 1.4 | **Docker Deployment:** Install Docker & Redis Stack | Docker Docs | [ ] |
| 1.5 | **Space Agent Setup:** Clone & `node space supervise` | Agent Workflows | [ ] |

---

## Phase 2: Development & Integration
*Objective: Connect local execution to cloud reasoning (Gemini 3.1 Pro).*

| ID | Action | Reference | Status |
| :--- | :--- | :--- | :--- |
| 2.1 | **MCP Server Generation:** Create `mcp_redis_server.py` | `mcp_integration.md` | [x] |
| 2.2 | **Antigravity Handoff:** Register MCP bridge via WSL | `handoff_toc.md` | [ ] |
| 2.3 | **VLM Expert Prompting:** Configure Gemini 3.1 Pro Personas | `vlm_prompts.md` | [ ] |
| 2.4 | **Deep Research Integration:** Connect Deep Research Agent | Resale Automation | [ ] |
| 2.5 | **Waterfall Implementation:** Run `waterfall_monitor.py` | `waterfall_monitor.py` | [x] |

---

## Phase 3: Testing & Deployment
*Objective: Launch review dashboard and package for students.*

| ID | Action | Reference | Status |
| :--- | :--- | :--- | :--- |
| 3.1 | **Streamlit Dashboard:** Launch `review_dashboard.py` | `review_dashboard.py` | [x] |
| 3.2 | **Secure Tunneling:** Expose dashboard via localtunnel | Operational Guide V1.3 | [ ] |
| 3.3 | **Pre-Flight Sanitization:** Doppler logout & Redis flush | `sop_local_antigravity.md` | [ ] |
| 3.4 | **Sanitization & Export:** `wsl --export` to `.tar` | Packaging Guide | [ ] |
| 3.5 | **GitHub Aggregation:** Upload README & Dev Notebook | GitHub Funnel | [x] |
| 3.6 | **NotebookLM Sync:** Upload `dev_notebook.md` | Lab Journal | [ ] |

---

## Tracker Maintenance
Update this file whenever a phase is completed or a new requirement is identified. Use the `[x]` syntax to mark tasks as complete.
