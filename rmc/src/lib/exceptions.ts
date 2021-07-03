import chalk from "chalk";
import { NAME } from "../config";

export class OptionValueNotProvidedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "OptionValueNotProvidedError";
  }
}

export class FileNotExistsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FileNotExistsError";
  }
}

export class JsonParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "JsonParseError";
  }
}

export const printException = (errorMsg?: string) => {
  console.error(chalk.red(`[${NAME}]`), errorMsg);
};

export const printAndExitFailed = () => {
  console.error(chalk.red.bold(`[${NAME}]`), chalk.red.bold(`exit status 1`));
  process.exit(1);
};
