import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const pathToFile = path.join(__dirname, "files", "fresh.txt");

  if (fs.existsSync(pathToFile)) {
    throw new Error("FS operation failed");
  }

  try {
    await fs.promises.writeFile(pathToFile, "I am fresh and young");
    console.log("success");
  } catch (e) {
    console.log(e);
  }
};

await create();
