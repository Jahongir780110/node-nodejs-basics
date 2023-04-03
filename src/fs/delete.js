import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const srcFile = path.join(__dirname, "files", "fileToRemove.txt");

  if (!fs.existsSync(srcFile)) {
    throw new Error("FS operation failed");
  }

  try {
    await fs.promises.unlink(srcFile);
    console.log("success");
  } catch (e) {
    console.log(e);
  }
};

await remove();
