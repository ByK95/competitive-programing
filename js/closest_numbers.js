// https://www.hackerrank.com/challenges/closest-numbers/problem
// first try
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

// Complete the closestNumbers function below.
function closestNumbers(arr) {
    arr = arr.sort((a,b) => a - b);
    let abs_diff = arr[1] - arr[0];
    let diff_arr = [arr[1],arr[0]];
    for (let i = 2; i < arr.length; i++) {
        let dif = arr[i] - arr[i-1];
        if( dif > abs_diff ){
            continue;
        }
        if(dif < abs_diff){
            diff_arr = [];
            abs_diff = dif;
        }
        diff_arr.push(arr[i-1]);
        diff_arr.push(arr[i]);
    }
    return diff_arr;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = closestNumbers(arr);

    // ws.write(result.join(" ") + "\n");
    console.log(result.join(" ") + "\n");

    // ws.end();
}