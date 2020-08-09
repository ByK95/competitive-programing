// https://www.hackerrank.com/challenges/runningtime/problem
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

// Complete the runningTime function below.
function runningTime(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i+1]){
            let temp = arr[i+1];
            for (let j = 0; j < i+1; j++) {
                if(arr[j] > temp){
                    arr.splice(j,0,arr.splice(i+1,1)[0]);
                    sum += i + 1 - j;
                    break;
                }
            }
        }
        // console.log(arr.join(" "));
    }
    return sum;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = runningTime(arr);

    // ws.write(result + "\n");
    console.log(result + "\n");

    // ws.end();
}