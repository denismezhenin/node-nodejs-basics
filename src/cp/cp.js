import path from "path";
import { getDirPath } from "../utils/func-helper.js";
import { spawn } from "child_process";

const __dirname = getDirPath(import.meta.url);
const fileToScriptPath = path.join(__dirname, "files", "script.js");

const spawnChildProcess = (args) => {
  const childProcess = spawn("node", [fileToScriptPath, ...args], {
    stdio: [0, 1, "ipc"],
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3]);
