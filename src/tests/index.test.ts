import { arrayRemoveWhitespace, stripSymbols } from "../index";

test('basic', () => {
    expect(stripSymbols("lol minu nimi. . . on idikas!")).toBe("lol minu nimi on idikas");
  });
