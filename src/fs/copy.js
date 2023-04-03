import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const sourceFolder = path.join(__dirname, "files");
  const destinationFolder = path.join(__dirname, "files_copy");

  if (!fs.existsSync(sourceFolder) || fs.existsSync(destinationFolder)) {
    throw new Error("FS operation failed");
  }

  try {
    await fs.promises.cp(sourceFolder, destinationFolder, { recursive: true });
    console.log("success");
  } catch (e) {
    console.log(e);
  }
};

await copy();
