import * as fs from 'fs';
const filename = process.argv[2];
//var fs = require('fs'), filename = process.argv[2];

// makes sure there is a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: ts-node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
// initializes the word frequency counter
initWordCounter();

//#region main methods

// read the file and print its contents.
export function initWordCounter(): void {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) throw err;
        
        commandSequencer(data);
    });

}
// executes the commands needed to count word frequency
export function commandSequencer(data: string): void {
    data = stripLineBreaks(data);
    data = stripSymbols(data);
    let array : string[] = arrayOfLowercaseWords(data);
    array = arraySortAlphabetical(array);
    array = arrayRemoveWhitespace(array)
    let map : Map<string, number> = mapOfWordCounts(array);
    showResults(map);
    
}
//#endregion 

//#region helper methods
// strip all line breaks from string
export function stripLineBreaks(data: string): string {
    let strStripped = data.replace(/\r?\n|\r/g, ' ');
    return strStripped;
}

// strip all unnecessary symbols from string
export function stripSymbols(data: string): string {
    let strStripped = data.replace(/[^a-zA-ZöäüõÖÄÜÕ\-' ]/g, '');
    return strStripped;
}

// separate string into array of lowercase words
export function arrayOfLowercaseWords(data: string): string[] {
    let words = data.toLowerCase().split(' ');
    return words;
}

// sorts array of words into alphabetical order
export function arraySortAlphabetical(array: string[]): string[] {
    array = array.sort();
    return array;
}
// removes whitespace elements from array
export function arrayRemoveWhitespace(array: string[]): string[]{
    array = array.filter(word => word.trim().length > 0)
    return array;
}

// form map with word as key and frequency count as value
export function mapOfWordCounts(array: string[]): Map<string, number> {
    let wordCounts = new Map<string, number>();
    array.forEach(word => {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);       
    });
    return wordCounts;
}
// adds a colon between the key and value to show results of the word counter
export function showResults(map: Map<string, number>): Map<string, number>{
    for (let entry of map.entries()) {
        console.log(entry[0], ':', entry[1]);
    }
    return map;
}

//#endregion 


