// https://www.hackerrank.com/challenges/countingsort4/problem
// solved
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

// Complete the countSort function below.
function countSort(arr) {
    let half = Math.floor( arr.length / 2 );
    let sorted = [];
    // console.log(half, arr.length);
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let word = element[1]; 
        while(sorted.length <= element[0]){
            sorted.push([]);
        }
        if(i < half){
            word = '-';
        }
        sorted[element[0]].push(word);
    }
    console.log(sorted.flat().join(' '));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    countSort(arr);
}
