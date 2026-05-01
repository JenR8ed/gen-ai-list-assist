# SOP: Local Instance & Sanitized Antigravity IDE Setup

## Overview
This Standard Operating Procedure (SOP) outlines the steps to set up a local development instance for the **AI List Assist** pipeline using a sanitized environment.

## Prerequisites
* **WSL2**: Ubuntu 22.04 or later.
* **Doppler CLI**: For secure secret management.
* **Python 3.11+**: Core execution environment.
* **Redis**: For state management.

## Setup Steps

### 1. Environment Sanitization
Initialize Doppler to manage environment variables without local `.env` files:
```bash
doppler login
doppler setup --project ai-list-assist --config dev
```

### 2. Repository Initialization
Clone the repository and install dependencies:
```bash
git clone https://github.com/JenR8ed/gen-ai-list-assist.git
cd gen-ai-list-assist
pip install -r requirements.txt
```

### 3. Local Services
Start the Redis server to handle MCP state:
```bash
sudo service redis-server start
```

### 4. IDE Configuration (Antigravity IDE)
Configure your IDE to use the Doppler-wrapped environment:
```bash
doppler run -- <your-ide-command>
```

## Monitoring
Use the `review_dashboard.py` to monitor agent states and the `waterfall_monitor.py` for pipeline health.
