import { DEFAULT_INDENT_OPTION, DEFAULT_WRITE_OPTION } from "../config";
import { getOptions, Options, ParsedOptions } from "../lib/options";

describe("#getOptions", () => {
  it("apply default value.", () => {
    const args = ["tsconfig.json"];
    const expected: Options = {
      target: "tsconfig.json",
      write: DEFAULT_WRITE_OPTION,
      indent: DEFAULT_INDENT_OPTION,
    };
    const parsedOptions: ParsedOptions = {
      w: undefined,
      i: undefined,
    };
    const actual = getOptions(args, parsedOptions);
    expect(actual).toEqual(expected);
  });
  it("apply file arg.", () => {
    const args = ["./tsconfig.webpack.json"];
    const expected: Options = {
      target: "./tsconfig.webpack.json",
      write: DEFAULT_WRITE_OPTION,
      indent: DEFAULT_INDENT_OPTION,
    };
    const parsedOptions: ParsedOptions = {
      w: undefined,
      i: undefined,
    };
    const actual = getOptions(args, parsedOptions);
    expect(actual).toEqual(expected);
  });
  it("apply write value.", () => {
    const args = ["./tsconfig.webpack.json"];
    const expected: Options = {
      target: "./tsconfig.webpack.json",
      write: true,
      indent: DEFAULT_INDENT_OPTION,
    };
    const parsedOptions: ParsedOptions = {
      w: true,
      i: undefined,
    };
    const actual = getOptions(args, parsedOptions);
    expect(actual).toEqual(expected);
  });
  it("apply indent value.", () => {
    const args = ["tsconfig.json"];
    const expected: Options = {
      target: "tsconfig.json",
      write: DEFAULT_WRITE_OPTION,
      indent: 4,
    };
    const parsedOptions: ParsedOptions = {
      w: undefined,
      i: 4,
    };
    const actual = getOptions(args, parsedOptions);
    expect(actual).toEqual(expected);
  });
  it("apply every value.", () => {
    const args = ["./config/tsconfig.json"];
    const expected: Options = {
      target: "./config/tsconfig.json",
      write: true,
      indent: 4,
    };
    const parsedOptions: ParsedOptions = {
      w: true,
      i: 4,
    };
    const actual = getOptions(args, parsedOptions);
    expect(actual).toEqual(expected);
  });
});
