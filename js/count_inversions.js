// https://www.hackerrank.com/challenges/ctci-merge-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
// Solved

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function findFirstOccurence(arr, index){
    let c_index = index;
    let value = arr[index];
    while(true){
        if(arr[c_index - 1] !== value){
            return c_index;
        }
        c_index--;
    }
}

function binSearch(arr, value) {
    let upper_bound = arr.length;
    let lover_bound = 0;

    var index = Math.floor(arr.length / 2);
    while (true) {
        if (arr[index] === value) {
            return findFirstOccurence(arr, index);
        } else if (arr[index] > value) {
            upper_bound = index;
        } else {
            lover_bound = index;
        }
        index = Math.floor((upper_bound + lover_bound) / 2);
        if (upper_bound - lover_bound < 2) {
            return -1;
        }
    }
}

// Complete the countSwaps function below.
function countSwaps(arr) {
    let ordered = arr.slice().sort(function(a,b){return a-b});
    let swaps = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        // console.log(element ,ordered);
        if(element !== ordered[0]){
            let location = binSearch(ordered, element);
            ordered.splice(location, 1);
            // console.log(location);
            swaps += location;
        }else{
            ordered.splice(0, 1);
        }
    }
    return swaps;
}

// Complete the countInversions function below.
// Idea: Order array -> Check if same indices same numbers
// if not find 
function countInversions(arr) {
    return countSwaps(arr);
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = countInversions(arr);

        // ws.write(result + '\n');
        console.log(result + '\n');
    }

    // ws.end();
}