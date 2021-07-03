import { InvalidArgumentError } from "commander";

export const parseIntOption = (val: string, _: unknown) => {
  const parsedValue = parseInt(val, 10)
  if (!Number.isInteger(parsedValue)) {
    throw new InvalidArgumentError('Not a Integer number.');
  }
  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError('Not a number.');
  }
  return parsedValue
}