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
