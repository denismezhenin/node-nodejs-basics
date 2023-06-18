import fs from "fs";
import path from "path";
import { getDirPath } from "../utils/func-helper.js";
import { createHash } from "crypto";

const __dirname = getDirPath(import.meta.url);
const file = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = createHash("sha256");
  hash.update(file);
  const hex = hash.digest("hex");
  console.log(hex);
};

await calculateHash();
