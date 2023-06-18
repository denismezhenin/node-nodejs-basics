import path, { dirname } from "path";
import fs from "fs";
import { getDirPath } from "../utils/func-helper.js";

const __dirname = (getDirPath(import.meta.url));
const filesPath = path.join(__dirname, "files", "wrongFilename.txt");
const filesCopyPath = path.join(__dirname, "files", "properFilename.md");

if (!fs.existsSync(filesPath) && fs.existsSync(filesCopyPath)) {
    throw new Error("FS operation failed");
}


const rename = async () => {
    fs.rename(filesPath, filesCopyPath, err => {
        if (err)  throw new Error("FS operation failed");
    })
    // Write your code here 
};

await rename();