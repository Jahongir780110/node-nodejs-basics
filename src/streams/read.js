import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const filename = path.join(__dirname, "files", "fileToRead.txt");
  const readStream = fs.createReadStream(filename);

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk + "\n");
  });

  readStream.on("end", () => {
    console.log("File reading completed");
  });

  readStream.on("error", (err) => {
    console.error("Error while reading file:", err);
  });
};

await read();
