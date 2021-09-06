import { arrayRemoveWhitespace, stripSymbols } from "../index";

test('basic', () => {
    expect(stripSymbols("lol  .lol")).toBe("lol  lol");
  });
