import { stdin, stdout } from "process";
import { pipeline, Transform } from "stream";

const transform = async () => {
  const reverseString = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, String(chunk).trim().split("").reverse().join("") + "\n");
    },
  });
  pipeline(stdin, reverseString, stdout, (err) => console.log(err));
};

await transform();
