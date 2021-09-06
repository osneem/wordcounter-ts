import { type } from "os";
import { arrayRemoveWhitespace, stripSymbols, commandSequencer, stripLineBreaks } from "../index";

test('basic', () => {
  expect(stripLineBreaks('Replace new line\n with whitespace!')).toEqual('Replace new line  with whitespace!');
});

test('basic', () => {
  expect(stripSymbols('Hi, my name is Oskar and this is a string, which has too many symbols!')).toEqual('Hi my name is Oskar and this is a string which has too many symbols');
});

test('basic', () => {
  expect(arrayRemoveWhitespace(['Hi', ' ', 'Hello'])).toEqual(['Hi', 'Hello']);
});
