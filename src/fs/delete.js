import path, { dirname } from "path";
import fs from "fs";
import { getDirPath } from "../utils/func-helper.js";

const __dirname = (getDirPath(import.meta.url));
const deleteFilesPath = path.join(__dirname, "files", "fileToRemove.txt");


const remove = async () => {

    fs.unlink(deleteFilesPath, err => {
        if (err)  throw new Error("FS operation failed");
    })
    // Write your code here 
};

await remove();