// https://www.hackerrank.com/challenges/quicksort1/problem
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

// Complete the quickSort function below.
function quickSort(arr) {
    let pivot = arr[0];
    let sort = {"left":[], "equal":[pivot], "right": []};
    for (let index = 1; index < arr.length; index++) {
        if( arr[index] > pivot){
            sort.right.push(arr[index]);
        }else if (arr[index] < pivot){
            sort.left.push(arr[index]);
        }else{
            sort.equal.push(arr[index]);
        }
        // console.log(sort);
    }
    return sort.left.concat(sort.equal,sort.right);
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = quickSort(arr);

    // ws.write(result.join(" ") + "\n");
    console.log(result.join(" ") + "\n");

    // ws.end();
}
