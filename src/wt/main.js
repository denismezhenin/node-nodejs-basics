import { Worker } from "worker_threads";
import path from "path";
import { getDirPath } from "../utils/func-helper.js";
import { cpus } from "os";

const __dirname = getDirPath(import.meta.url);
const fileWorkerPath = path.join(__dirname, "worker.js");

const transformArr = (arr) => {
  return arr.map((el) => {
    return (el =
      el.status === "fulfilled"
        ? { status: "resolved", data: el.value }
        : { status: "error", data: null });
  });
};

const performCalculations = async () => {
  // Write your code here
  const promisesArray = [];
  const numberOfCpus = cpus().length;

  for (let i = 0; i < numberOfCpus; i += 1) {
    const num = 10 + i;
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(fileWorkerPath, { workerData: num });
      worker.on("message", resolve);
      worker.on("error", reject);
    });
    promisesArray.push(promise);
  }
  const result = Promise.allSettled(promisesArray)
    .then((result) => transformArr(result))
    .then((arr) => console.log(arr));
};

await performCalculations();
