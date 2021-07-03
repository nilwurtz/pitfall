import { InvalidArgumentError } from "commander";

export const parseIntOption = (val: string, _: unknown) => {
  if (!Number.isInteger(parseFloat(val))) {
    throw new InvalidArgumentError("Not a Integer number.");
  }
  const parsedValue = parseInt(val);
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError("Not a number.");
  }
  if (parsedValue <= 0) {
    throw new InvalidArgumentError("Not a positive number.");
  }
  return parsedValue;
};
