import { arrayRemoveWhitespace, stripSymbols, stripLineBreaks, arrayOfLowercaseWords, arraySortAlphabetical, mapOfWordCounts } from "../index";

test('testLineBreakRemoval', () => {
  expect(stripLineBreaks('Replace new line\n with whitespace!')).
    toEqual('Replace new line  with whitespace!');
});

test('testSymbolRemoval', () => {
  expect(stripSymbols('Hi, this is a string, which has too many symbols!'))
    .toEqual('Hi this is a string which has too many symbols');
});

test('testSymbolRemovalUmlaut', () => {
  expect(stripSymbols('Selles => stringis on mõned kahtlased sümbolid!!!'))
    .toEqual('Selles  stringis on mõned kahtlased sümbolid');
});

test('testArrayOfLowerCase', () => {
  expect(arrayOfLowercaseWords('A bUncH Of woRDS fOr tesTInG PuRpOsEs'))
    .toEqual(['a', 'bunch', 'of', 'words', 'for', 'testing', 'purposes']);
});

test('testSortAlphabetical', () => {
  expect(arraySortAlphabetical(['a', 'bunch', 'of', 'words', 'for', 'testing', 'purposes']))
    .toEqual(['a', 'bunch', 'for', 'of', 'purposes', 'testing', 'words']);
});

test('testWhitespaceRemoval', () => {
  expect(arrayRemoveWhitespace(['Hi', ' ', 'Hello'])).toEqual(['Hi', 'Hello']);
});

test('testMapReturnType', () => {
  expect(mapOfWordCounts(['Hi', 'Hi', 'Hello'])).toBeInstanceOf(Map);
});
