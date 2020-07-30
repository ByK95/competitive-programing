// https://www.hackerrank.com/challenges/big-sorting/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
// solves all
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the bigSorting function below.
function bigSorting(unsorted) {
    let dict = {};
    let sorted = [];
    for (let i = 0; i < unsorted.length; i++) {
        const element = unsorted[i];
        if( dict[element.length] === undefined){
            dict[element.length] = [];
        }
        dict[element.length].push(element);
    }
    // console.log(dict);
    for(let key in dict){
        if(dict[key].length > 1){
            dict[key].sort((a,b) => {
                for (let j = 0; j < a.length; j++) {
                    if( a[j] < b[j]) return -1;
                    if( a[j] > b[j]) return  1;
                }
                return 0;
            });
            sorted = sorted.concat(dict[key]);
        }else{
            sorted.push(dict[key][0]);
        }
        // console.log(sorted);
    }
    return sorted;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let unsorted = [];

    for (let i = 0; i < n; i++) {
        const unsortedItem = readLine();
        unsorted.push(unsortedItem);
    }

    let result = bigSorting(unsorted);

    // ws.write(result.join("\n") + "\n");
    console.log(result.join("\n") + "\n");

    // ws.end();
}
