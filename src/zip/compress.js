import zlib from "zlib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const pathToFile = path.join(__dirname, "files", "fileToCompress.txt");
  const pathToCompressedFile = path.join(__dirname, "files", "archive.gz");

  const gzip = zlib.createGzip();
  const readStream = fs.createReadStream(pathToFile);
  const writeStream = fs.createWriteStream(pathToCompressedFile);

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
