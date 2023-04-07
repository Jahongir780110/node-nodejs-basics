import fs from "fs";
import path from "path";
import crypt from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const srcFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
  const fileContent = await fs.promises.readFile(srcFile);
  const hash = crypt.createHash("sha256").update(fileContent).digest("hex");
  console.log(hash);
};

await calculateHash();
