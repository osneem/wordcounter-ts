import * as fs from 'fs';
var readline = require('readline');
var stream = require('stream');

const filename = process.argv[2];
//var fs = require('fs'), filename = process.argv[2];

// makes sure there is a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: ts-node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
// initializes the word frequency counter
initFileStreamer();

//#region main methods

// read the file and print its contents.
export function initFileReader(): void {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) throw err;
        
        initWordCounter(data);
    });

}

export function initFileStreamer(): void {
    
    const instream = fs.createReadStream(filename, {encoding: 'utf8'});
    const outstream = new stream;
    outstream.readable = true;
    outstream.writable = true;
    var rl = readline.createInterface({ input: instream, output: outstream, terminal: false});
    rl.on('line', function(line: any) {
        
        rl.write(initWordCounter(line));
    })

}
// executes the commands needed to count word frequency
export function initWordCounter(data: string): void {
    data = stripLineBreaks(data);
    data = stripSymbols(data);
    data = stringToLowercase(data);
    let array : string[] = arrayOfWords(data);
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

// string to lowercase
export function stringToLowercase(data: string): string {
    let words = data.toLowerCase();
    return words;
}

// split string into array at whitespaces
export function arrayOfWords(data: string): string[] {
    let words = data.split(' ');
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


