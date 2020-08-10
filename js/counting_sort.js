// https://www.hackerrank.com/challenges/countingsort1/problem
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
    let count_sort = new Array(arr.length );
    let m = 0;
    count_sort.fill(0);
    for (let i = 0; i < arr.length; i++) {
        count_sort[arr[i]]++;
        if(arr[i] > m){
            m = arr[i];
        }
    }
    // console.log(m);
    if( arr.length - 1 === m ) return count_sort;
    return count_sort.splice(0,m + 1);
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
