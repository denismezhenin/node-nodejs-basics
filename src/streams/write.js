import path from "path";
import { createWriteStream } from "fs";
import { getDirPath } from "../utils/func-helper.js";
import { stdin } from "process";

const __dirname = getDirPath(import.meta.url);
const filesToWritePath = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writeStream = createWriteStream(filesToWritePath);
  stdin.pipe(writeStream);
};

await write();
