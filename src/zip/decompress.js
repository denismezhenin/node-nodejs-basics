import path from "path";
import { createWriteStream, createReadStream } from "fs";
import { getDirPath } from "../utils/func-helper.js";
import { createUnzip } from "zlib";
import { pipeline } from "stream";

const __dirname = getDirPath(import.meta.url);
const fileToWritePath = path.join(__dirname, "files", "fileToCompress.txt");
const zippedFile = path.join(__dirname, "files", "archive.gz");

const decompress = async () => {
  const gzip = createUnzip();
  const source = createReadStream(zippedFile);
  const destination = createWriteStream(fileToWritePath);
  pipeline(source, gzip, destination, (err) => {
    if (err) console.log(err);
  });
};

await decompress();
