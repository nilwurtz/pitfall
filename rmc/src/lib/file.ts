import { existsSync, readFileSync } from "fs";
import { Options } from "./options";
import { parse, stringify } from "comment-json";
import { TARGET_ENCODING } from "../config";
import { JsonParseError } from "./exceptions";

export const fileExists = (path: string) => {
  return existsSync(path);
};

export const processFile = (option: Options) => {
  const buffer = readFileSync(option.target, TARGET_ENCODING);
  try {
    const jsonObj = parse(buffer, undefined, true);
    if (option.write) {
      console.log(stringify(jsonObj, null, option.indent));
    } else {
      console.log(stringify(jsonObj, null, option.indent));
    }
  } catch {
    throw new JsonParseError(`file: '${option.target}' parse failed. Is json file?`);
  }
};
