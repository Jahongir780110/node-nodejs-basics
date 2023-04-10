import os from "os";
import path from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
  const result = [];
  const cpuCount = os.cpus().length;

  for (let i = 0; i < cpuCount; i++) {
    const worker = new Worker(path.join(__dirname, "worker.js"), {
      workerData: i + 10,
    });

    worker.on("message", (data) => {
      result.push({
        status: "resolved",
        data,
      });
    });

    worker.on("error", (err) => {
      result.push({
        status: "error",
        data: null,
      });
    });

    worker.on("exit", (code) => {
      if (result.length === cpuCount) {
        result.sort((a, b) => a.data - b.data);
        console.log(result);
      }
    });
  }
};

await performCalculations();
