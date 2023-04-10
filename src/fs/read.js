import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const srcFile = path.join(__dirname, "files", "fileToRead.txt");

  if (!fs.existsSync(srcFile)) {
    throw new Error("FS operation failed");
  }

  try {
    const contents = await fs.promises.readFile(srcFile, "utf-8");
    console.log(contents);
  } catch (e) {
    console.log(e);
  }
};

await read();
