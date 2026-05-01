import streamlit as st
import pandas as pd
import redis
import json

# Dashboard for Enterprise-grade hybrid agentic e-commerce pipeline
st.set_page_config(page_title="AI List Assist: Review Dashboard", layout="wide")

st.title("🛒 AI List Assist: Review Dashboard")
st.subheader("Hybrid Agentic E-commerce Pipeline Monitoring")

def get_redis_data():
    r = redis.StrictRedis(host='localhost', port=6379, db=0, decode_responses=True)
    keys = r.keys("pipeline:state:*")
    data = []
    for key in keys:
        val = r.get(key)
        if val:
            data.append(json.loads(val))
    return pd.DataFrame(data)

st.sidebar.header("Controls")
if st.sidebar.button("Refresh Data"):
    df = get_redis_data()
    st.write("Data Refreshed")
else:
    df = pd.DataFrame(columns=["Agent", "Status", "Last Update", "Payload"])

st.write("### Active Agent States")
st.dataframe(df)

st.write("### Waterfall Monitor Integration")
st.info("Monitoring sanitized execution via Doppler & WSL2.")
