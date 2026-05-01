# AI List Assist: Enterprise-Grade Hybrid Agentic E-commerce Pipeline

## Overview
AI List Assist is a high-performance, hybrid agentic pipeline designed for e-commerce automation. It leverages **Gemini 3.1 Pro**, **Space Agent**, and **MCP (Model Context Protocol)** to create a sanitized, local-first execution environment within **WSL2**.

This project serves as an educational case study and a production-ready framework for resale automation, featuring deep research integration and automated inventory pivoting.

## Core Architecture
- **Reasoning Engine:** Gemini 3.1 Pro (Deep Research Agent via MCP).
- **Execution Environment:** Sanitized WSL2 (Ubuntu) instance.
- **Secret Management:** Doppler CLI (No local `.env` files).
- **State Management:** Redis Stack for valuation queues and agent states.
- **Monitoring:** Streamlit-based Review Dashboard and Waterfall Monitor.

## Key Components
- `mcp_redis_server.py`: Bridges local state with cloud reasoning via standard I/O.
- `review_dashboard.py`: Real-time monitoring optimized for mobile (Pixel 9 Pro XL).
- `waterfall_monitor.py`: Sequential task execution and inventory pivot logic.
- `deploy_services.sh`: Automated, sanitized deployment script.

## Getting Started
Refer to the [SOP: Local Instance & Sanitized Antigravity IDE Setup](./SOP_Setup.md) for detailed installation instructions.

## Development Sync
To stay in sync with the development progress, please refer to:
- [**ROADMAP.md**](./ROADMAP.md): The Master Tracker for execution phases and task status.
- [**dev_notebook.md**](./dev_notebook.md): The interactive lab journal for technical notes and source of truth.

---
*Built for the AI Educational Case Study & Operations.*
