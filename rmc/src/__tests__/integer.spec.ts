import { parseIntOption } from "../lib/integer";
import { InvalidArgumentError } from "commander";

describe("#parseIntOption", () => {
  describe("valid", () => {
    it("parse '1' to 1", () => {
      const actual = parseIntOption("1", {})
      expect(actual).toBe(1)
    })
    it("parse '500' to 1", () => {
      const actual = parseIntOption("500", {})
      expect(actual).toBe(500)
    })
  })

  describe("invalid", () => {
    it("parse '1.1', throws error", () => {
      expect(() => parseIntOption("1.1", {})).toThrow(InvalidArgumentError)
    })
    it("parse '0.1', throws error", () => {
      expect(() => parseIntOption("0.1", {})).toThrow(InvalidArgumentError)
    })
    it("parse '0', throws error", () => {
      expect(() => parseIntOption("0", {})).toThrow(InvalidArgumentError)
    })
    it("parse '-2', throws error", () => {
      expect(() => parseIntOption("-2", {})).toThrow(InvalidArgumentError)
    })
  })
})