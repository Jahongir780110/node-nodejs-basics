import { fileURLToPath } from "url";
import { Worker, parentPort, isMainThread, workerData } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

if (isMainThread) {
  const worker = new Worker(fileURLToPath(import.meta.url), {
    workerData: 10,
  });

  worker.on("message", (data) => {
    console.log(data);
  });
} else {
  const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    const result = nthFibonacci(workerData);

    parentPort.postMessage(result);
  };

  sendResult();
}
