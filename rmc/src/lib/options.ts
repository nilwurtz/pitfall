import { DEFAULT_INDENT_OPTION, DEFAULT_TARGET_OPTION, DEFAULT_WRITE_OPTION, NAME } from "../config";
import chalk from "chalk";

export type ParsedOptions = {
  file?: string;
  w?: boolean;
  i?: number;
};

export type Options = {
  target: string;
  write: boolean;
  indent: number;
};

export const getOptions = (opts: ParsedOptions): Options => {
  return {
    target: opts.file ? opts.file : DEFAULT_TARGET_OPTION,
    write: opts.w ? opts.w : DEFAULT_WRITE_OPTION,
    indent: opts.i ? opts.i : DEFAULT_INDENT_OPTION,
  };
};

export const printOptions = (opts: Options): void => {
  if (opts.write) {
    console.log(chalk.blue(`[${NAME}]`), `Overwrite file:`, chalk.green.underline(`${opts.target}`));
    console.log(chalk.blue(`[${NAME}]`), `Indent size:`, chalk.green.underline(`${opts.indent}`));
  } else {
    console.log(chalk.blue(`[${NAME}]`), "Dry running...");
    console.log(chalk.blue(`[${NAME}]`), `Target file:`, chalk.green(`${opts.target}`));
    console.log(chalk.blue(`[${NAME}]`), `Indent size:`, chalk.green(`${opts.indent}`));
  }
};
