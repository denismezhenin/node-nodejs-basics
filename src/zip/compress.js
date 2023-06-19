import path from "path";
import { createWriteStream, createReadStream } from "fs";
import { getDirPath } from "../utils/func-helper.js";
import { createGzip } from "zlib";
import { pipeline } from "stream";

const __dirname = getDirPath(import.meta.url);
const fileToWritePath = path.join(__dirname, "files", "fileToCompress.txt");
const zippedFile = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(fileToWritePath);
  const destination = createWriteStream(zippedFile);
  pipeline(source, gzip, destination, (err) => {
    if (err) console.log(err);
  });
};

await compress();
