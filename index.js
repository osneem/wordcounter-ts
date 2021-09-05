var fs = require('fs'), filename = process.argv[2];
// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
// Read the file and print its contents.
function initWordCounter() {
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err)
            throw err;
        console.log('OK: ' + filename);
        console.log('String from file: ' + data);
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
    });
}
// strip all punctuation from string
function stripLineBreaks(data) {
    var strStripped = data.replace(/\r?\n|\r/g, ' ');
    return strStripped;
}
// strip all punctuation from string
function stripSymbols(data) {
    var strStripped = data.replace(/[^a-zA-ZöäüõÖÄÜÕ\-' ]/g, '');
    return strStripped;
}
// separate string into array of lowercase words
function arrayOfLowercaseWords(data) {
    var words = data.toLowerCase().split(' ');
    return words;
}
// sorts array into alphabetical order
function arraySortAlphabetical(array) {
    array = array.sort();
    return array;
}
function arrayRemoveWhitespace(array) {
    if (array === void 0) { array = []; }
    array = array.filter(function (word) { return word !== ''; });
    return array;
}
// form object of word counts
function objectOfWordCounts(data) {
    if (data === void 0) { data = []; }
    var wordCounts = new Map();
    data.forEach(function (word) {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
        //wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
    return wordCounts;
}
initWordCounter();
