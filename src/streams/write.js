import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const writeFilename = path.join(__dirname, "files", "fileToWrite.txt");

  const writeStream = fs.createWriteStream(writeFilename);

  process.stdin.on("data", (data) => {
    writeStream.write(data);
  });
};

await write();
