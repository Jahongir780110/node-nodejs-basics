import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  const srcFile = path.join(__dirname, "files", "wrongFilename.txt");
  const destFile = path.join(__dirname, "properFilename.md");

  if (!fs.existsSync(srcFile) || fs.existsSync(destFile)) {
    throw new Error("FS operation failed");
  }

  try {
    await fs.promises.rename(srcFile, destFile);
    console.log("success");
  } catch (e) {
    console.log(e);
  }
};

await rename();
