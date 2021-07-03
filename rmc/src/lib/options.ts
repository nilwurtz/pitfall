import { DEFAULT_INDENT_OPTION, DEFAULT_TARGET_OPTION, DEFAULT_WRITE_OPTION } from "../config";

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
