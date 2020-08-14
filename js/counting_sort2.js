// https://www.hackerrank.com/challenges/countingsort2/problem
// first Try
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

// Complete the countingSort function below.
function countingSort(arr) {
    let dict = {};
    arr.map((x) => {
        if(dict[x] === undefined){
            dict[x] = 0;
        }
        dict[x]++;
    });
    let sorted = [];
    for(let key in dict){
        for (let i = 0; i < dict[key]; i++) {
            sorted.push(key);
        }
    }
    return sorted;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = countingSort(arr);

    // ws.write(result.join(" ") + "\n");
    console.log(result.join(" ") + "\n");

    // ws.end();
}