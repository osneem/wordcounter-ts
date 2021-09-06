import { stringify } from "querystring";

var fs = require('fs')
    , filename = process.argv[2];
// makes sure there is a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: ts-node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
// Read the file and print its contents.
export function initWordCounter() {
    fs.readFile(filename, 'utf8', function (err: string, data: any) {
        if (err) throw err;
        console.log('OK: ' + filename);
        console.log('String from file: ' + data);
        wordCounter(data);
    });
}

export function wordCounter(data: any) {
    data = stripLineBreaks(data);
    console.log('String with line breaks stripped: ' + data)
    data = stripSymbols(data);
    console.log('String with unnecessary symbols stripped: ' + data);
    data = arrayOfLowercaseWords(data);
    console.log('String into array of lowercase words: ' + data);
    data = arraySortAlphabetical(data);
    console.log('Array into alphabetical order: ' + data);
    data = arrayRemoveWhitespace(data)
    console.log('Array with whitespaces removed: ' + data)
    data = objectOfWordCounts(data);
    console.log(data);
    data = showResults(data);
    console.log(data);
}

// strip all line breaks from string
export function stripLineBreaks(data: string) {
    let strStripped = data.replace(/\r?\n|\r/g, ' ');
    return strStripped;
}

// strip all unnecessary symbols from string
export function stripSymbols(data: string) {
    let strStripped = data.replace(/[^a-zA-ZöäüõÖÄÜÕ\-' ]/g, '');
    return strStripped;
}

// separate string into array of lowercase words
export function arrayOfLowercaseWords(data: string) {
    let words = data.toLowerCase().split(' ');
    return words;
}

// sorts array of words into alphabetical order
export function arraySortAlphabetical(array: []) {
    array = array.sort();
    return array;
}
// removes whitespace elements from array
export function arrayRemoveWhitespace(array = []){
    array = array.filter(word => word !== '')
    return array;
}

// form map with word as key and frequency count as value
export function objectOfWordCounts(data = []) {
    let wordCounts = new Map<string, number>();
    data.forEach(word => {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
        //wordCounts[word] = (wordCounts[word] || 0) + 1;
        
    });
    return wordCounts;
}
// adds a colon in between they key and value to show results of the word counter
export function showResults(map: Map<string, number>) {
    for (let entry of map.entries()) {
        console.log(entry[0], ':', entry[1]);
    }
}


initWordCounter();