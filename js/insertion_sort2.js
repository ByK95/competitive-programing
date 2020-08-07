// https://www.hackerrank.com/challenges/insertionsort2/problem
// solved
'use strict';

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

// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i+1]){
            let temp = arr[i+1];
            for (let j = 0; j < i+1; j++) {
                if(arr[j] > temp){
                    arr.splice(j,0,arr.splice(i+1,1)[0]);
                    break;
                }
            }
        }
        console.log(arr.join(" "));
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}