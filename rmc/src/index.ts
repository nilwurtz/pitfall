import { Command } from "commander";
import { DEFAULT_INDENT_OPTION, DEFAULT_WRITE_OPTION, VERSION } from "./config";
import { FileNotExistsError, printAndExitFailed, printException } from "./lib/exceptions";
import { fileExists, processFile } from "./lib/file";
import { parseIntOption } from "./lib/integer";
import { getOptions, printOptions } from "./lib/options";

const program = new Command();

program.argument("<path>", "json file path which remove comment.");
program.option("-w", "add option if you write file.", DEFAULT_WRITE_OPTION);
program.option("-i <number>", "[integer] specify indent size.", parseIntOption, DEFAULT_INDENT_OPTION);
program.version(VERSION, "-v");
program.parse(process.argv);

try {
  const options = getOptions(program.processedArgs, program.opts());
  printOptions(options);
  if (!fileExists(options.target)) {
    throw new FileNotExistsError(`file: '${options.target}' does not exists.`);
  }
  processFile(options);
} catch (e) {
  printException(e.message);
  printAndExitFailed();
}
