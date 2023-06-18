import path, { dirname } from "path";
import fs from "fs";
import { getDirPath } from "../utils/func-helper.js";

const __dirname = (getDirPath(import.meta.url));
const filesToReadPath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {

    fs.readFile(filesToReadPath, 'utf8', (err, data) => {
        if (err)  throw new Error("FS operation failed");
        console.log(data)
    })
    // Write your code here 
};

await read();