#!/bin/bash

# Sanitized Deployment Script for AI List Assist
# Environment: WSL2, Doppler for Secret Management

echo "🚀 Starting Deployment: AI List Assist Core Services"

# Check for Doppler
if ! command -v doppler &> /dev/null
then
    echo "❌ Doppler CLI not found. Please install it for sanitized execution."
    exit 1
fi

echo "📦 Pulling latest configurations from Doppler..."
doppler setup --project ai-list-assist --config prd

echo "⚙️ Initializing Redis State Server..."
# Assuming redis is installed via apt
sudo service redis-server start

echo "🖥️ Starting Review Dashboard (Streamlit)..."
nohup streamlit run review_dashboard.py --server.port 8501 &

echo "🌊 Launching Waterfall Monitor..."
python3 waterfall_monitor.py &

echo "✅ Deployment Complete. Pipeline is live."
