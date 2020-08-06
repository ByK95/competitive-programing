// https://www.hackerrank.com/challenges/insertionsort1/problem
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

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
    let temp = arr[n-1];
    for (let i = n - 1; i >= 0; i--) {
        if(arr[i - 1] < temp || i == 0){
            arr[i] = temp;
            console.log(arr.join(" "));
            return;
        }else{
            arr[i] = arr[i - 1];
        }
        console.log(arr.join(" "));
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}