import { existsSync } from "fs";
import { readFile } from "fs/promises";
import { Options } from "./options";
import { parse, stringify } from "comment-json";
import { TARGET_ENCODING } from "../config";

export const fileExists = (path: string) => {
  return existsSync(path);
};

export const processFile = (option: Options) => {
  readFile(option.target, TARGET_ENCODING)
    .then((b) => {
      const jsonObj = parse(b, undefined, true);
      if (option.write) {
        console.log(stringify(jsonObj, null, option.indent));
      } else {
        console.log(stringify(jsonObj, null, option.indent));
      }
    })
    .catch((e) => {
      throw new Error(e.message);
    });
};
