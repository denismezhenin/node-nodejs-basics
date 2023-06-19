import fs from "fs";
import path from "path";
import { getDirPath } from "../utils/func-helper.js";

const __dirname = getDirPath(import.meta.url);
const filesDirPath = path.join(__dirname, "files");
const filesCopyDirPath = path.join(__dirname, "files-copy");

const copy = async () => {
  fs.mkdir(filesCopyDirPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
  fs.cp(filesDirPath, filesCopyDirPath, { recursive: true }, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });

  // Write your code here
};

await copy();
