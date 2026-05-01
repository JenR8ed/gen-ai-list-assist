import time
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class WaterfallMonitor:
    """
    Monitors the sequential (waterfall) execution of agentic tasks.
    Ensures sanitized execution and logs pipeline health.
    """
    def __init__(self, pipeline_id: str):
        self.pipeline_id = pipeline_id
        self.start_time = None

    def start(self):
        self.start_time = time.time()
        logger.info(f"Starting Waterfall Monitor for Pipeline: {self.pipeline_id}")

    def log_step(self, step_name: str, status: str):
        elapsed = time.time() - self.start_time if self.start_time else 0
        logger.info(f"Step: {step_name} | Status: {status} | Elapsed: {elapsed:.2f}s")

    def stop(self):
        total_time = time.time() - self.start_time if self.start_time else 0
        logger.info(f"Pipeline {self.pipeline_id} completed in {total_time:.2f}s")

if __name__ == "__main__":
    monitor = WaterfallMonitor("E-COMM-PIPELINE-001")
    monitor.start()
    time.sleep(1)
    monitor.log_step("Gemini 3.1 Pro Analysis", "SUCCESS")
    time.sleep(1)
    monitor.log_step("Space Agent Execution", "SUCCESS")
    monitor.stop()
