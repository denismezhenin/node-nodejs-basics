import fs from "fs";
import path from "path";
import { getDirPath } from "../utils/func-helper.js";

const __dirname = getDirPath(import.meta.url);
const filesDirPath = path.join(__dirname, "files");

const list = async () => {
  fs.readdir(filesDirPath, (err, files) => {
    if (err) throw new Error("FS operation failed");
    console.log(files);
  });
};

await list();
