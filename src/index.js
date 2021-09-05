"use strict";
exports.__esModule = true;
exports.objectOfWordCounts = exports.arrayRemoveWhitespace = exports.arraySortAlphabetical = exports.arrayOfLowercaseWords = exports.stripSymbols = exports.stripLineBreaks = exports.wordCounter = exports.initWordCounter = void 0;
var fs = require('fs'), filename = process.argv[2];
// makes sure there is a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: ts-node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
// Read the file and print its contents.
function initWordCounter() {
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err)
            throw err;
        console.log('OK: ' + filename);
        console.log('String from file: ' + data);
        wordCounter(data);
    });
}
exports.initWordCounter = initWordCounter;
function wordCounter(data) {
    data = stripLineBreaks(data);
    console.log('String with line breaks stripped: ' + data);
    data = stripSymbols(data);
    console.log('String with unnecessary symbols stripped: ' + data);
    data = arrayOfLowercaseWords(data);
    console.log('String into array of lowercase words: ' + data);
    data = arraySortAlphabetical(data);
    console.log('Array into alphabetical order: ' + data);
    data = arrayRemoveWhitespace(data);
    console.log('Array with whitespaces removed: ' + data);
    data = objectOfWordCounts(data);
    console.log(data);
}
exports.wordCounter = wordCounter;
// strip all line breaks from string
function stripLineBreaks(data) {
    var strStripped = data.replace(/\r?\n|\r/g, ' ');
    return strStripped;
}
exports.stripLineBreaks = stripLineBreaks;
// strip all unnecessary symbols from string
function stripSymbols(data) {
    var strStripped = data.replace(/[^a-zA-ZöäüõÖÄÜÕ\-' ]/g, '');
    return strStripped;
}
exports.stripSymbols = stripSymbols;
// separate string into array of lowercase words
function arrayOfLowercaseWords(data) {
    var words = data.toLowerCase().split(' ');
    return words;
}
exports.arrayOfLowercaseWords = arrayOfLowercaseWords;
// sorts array of words into alphabetical order
function arraySortAlphabetical(array) {
    array = array.sort();
    return array;
}
exports.arraySortAlphabetical = arraySortAlphabetical;
// removes whitespace elements from array
function arrayRemoveWhitespace(array) {
    if (array === void 0) { array = []; }
    array = array.filter(function (word) { return word !== ''; });
    return array;
}
exports.arrayRemoveWhitespace = arrayRemoveWhitespace;
// form map with word as key and frequency count as value
function objectOfWordCounts(data) {
    if (data === void 0) { data = []; }
    var wordCounts = new Map();
    data.forEach(function (word) {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
        //wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    return wordCounts;
}
exports.objectOfWordCounts = objectOfWordCounts;
initWordCounter();
