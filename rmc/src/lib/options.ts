import { DEFAULT_INDENT_OPTION, DEFAULT_WRITE_OPTION, NAME } from "../config";
import chalk from "chalk";

export type ParsedOptions = {
  w?: boolean;
  i?: number;
};

export type Options = {
  target: string;
  write: boolean;
  indent: number;
};

export const getOptions = (args: string[], opts: ParsedOptions): Options => {
  return {
    target: args[0],
    write: opts.w ? opts.w : DEFAULT_WRITE_OPTION,
    indent: opts.i ? opts.i : DEFAULT_INDENT_OPTION,
  };
};

export const printOptions = (opts: Options): void => {
  if (opts.write) {
    console.log(chalk.blue(`[${NAME}]`), `Overwrite file:`, chalk.green(`${opts.target}`));
    console.log(chalk.blue(`[${NAME}]`), `Indent size:`, chalk.green(`${opts.indent}`));
  } else {
    console.log(chalk.blue(`[${NAME}]`), "Dry running...");
    console.log(chalk.blue(`[${NAME}]`), `Target file:`, chalk.green(`${opts.target}`));
    console.log(chalk.blue(`[${NAME}]`), `Indent size:`, chalk.green(`${opts.indent}`));
  }
};
