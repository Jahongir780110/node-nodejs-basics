import zlib from "zlib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const pathToCompressedFile = path.join(__dirname, "files", "archive.gz");
  const pathToDecompressedFile = path.join(__dirname, "files", "test.txt");

  const unzip = zlib.createGunzip();

  const readStream = fs.createReadStream(pathToCompressedFile);
  const writeStream = fs.createWriteStream(pathToDecompressedFile);

  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
