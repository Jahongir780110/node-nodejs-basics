import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const srcFolder = path.join(__dirname, "files");

  if (!fs.existsSync(srcFolder)) {
    throw new Error("FS operation failed");
  }

  fs.readdirSync(srcFolder).forEach((file) => {
    console.log(file);
  });
};

await list();
