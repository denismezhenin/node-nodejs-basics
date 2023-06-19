import path from "path";
import fs from "fs";
import { getDirPath } from "../utils/func-helper.js";
import { stdout } from "process";

const __dirname = getDirPath(import.meta.url);
const filesToReadPath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const readStream = fs.createReadStream(filesToReadPath);
  readStream.pipe(stdout);
  readStream.on("end", () => stdout.write("\n"));
};

await read();
