import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [
    path.join(__dirname, "files", "script.js"),
    ...args,
  ]);

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.on("data", (data) => {
    console.log("stdout " + data);
  });

  childProcess.stderr.on("data", (data) => {
    console.log("stderr " + data);
  });

  childProcess.on("error", (err) => {
    console.log("error ", err.message);
  });

  childProcess.on("exit", (code) => {
    console.log("Exited with code " + code);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["hello", "world"]);
