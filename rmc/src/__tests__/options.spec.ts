import {
  DEFAULT_INDENT_OPTION,
  DEFAULT_TARGET_OPTION,
  DEFAULT_WRITE_OPTION,
} from "../config";
import { getOptions, Options, ParsedOptions } from "../lib/options";

describe("#getOptions", () => {
  it("apply default value.", () => {
    const expected: Options = {
      target: DEFAULT_TARGET_OPTION,
      write: DEFAULT_WRITE_OPTION,
      indent: DEFAULT_INDENT_OPTION,
    };
    const parsedOptions: ParsedOptions = {
      file: undefined,
      w: undefined,
      i: undefined,
    };
    const actual = getOptions(parsedOptions);
    expect(actual).toEqual(expected);
  });
  it("apply target value.", () => {
    const expected: Options = {
      target: "./tsconfig.webpack.json",
      write: DEFAULT_WRITE_OPTION,
      indent: DEFAULT_INDENT_OPTION,
    };
    const parsedOptions: ParsedOptions = {
      file: "./tsconfig.webpack.json",
      w: undefined,
      i: undefined,
    };
    const actual = getOptions(parsedOptions);
    expect(actual).toEqual(expected);
  });
  it("apply write value.", () => {
    const expected: Options = {
      target: DEFAULT_TARGET_OPTION,
      write: true,
      indent: DEFAULT_INDENT_OPTION,
    };
    const parsedOptions: ParsedOptions = {
      file: undefined,
      w: true,
      i: undefined,
    };
    const actual = getOptions(parsedOptions);
    expect(actual).toEqual(expected);
  });
  it("apply indent value.", () => {
    const expected: Options = {
      target: DEFAULT_TARGET_OPTION,
      write: DEFAULT_WRITE_OPTION,
      indent: 4,
    };
    const parsedOptions: ParsedOptions = {
      file: DEFAULT_TARGET_OPTION,
      w: DEFAULT_WRITE_OPTION,
      i: 4,
    };
    const actual = getOptions(parsedOptions);
    expect(actual).toEqual(expected);
  });
  it("apply every value.", () => {
    const expected: Options = {
      target: "./config/tsconfig.json",
      write: true,
      indent: 4,
    };
    const parsedOptions: ParsedOptions = {
      file: "./config/tsconfig.json",
      w: true,
      i: 4,
    };
    const actual = getOptions(parsedOptions);
    expect(actual).toEqual(expected);
  });
});
