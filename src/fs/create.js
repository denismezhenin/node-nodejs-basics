import path, { dirname } from "path";
import fs from "fs";
import { getDirPath } from "../utils/func-helper.js";

const create = async () => {
  const __dirname = getDirPath(import.meta.url);
  const finalPath = path.join(__dirname, "files");
  const message = "I am fresh and young";
  const output = fs.createWriteStream(path.join(finalPath, "fresh.txt"), {
    flags: "ax",
  });
  output.on("error", () => {
    throw new Error("FS operation failed");
  });
  output.write(message);
};

await create();
