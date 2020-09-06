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

function swap(q, x, y) {
    var a = q[x];
    q[x] = q[y];
    q[y] = a;
}

function valueSwap(q, x, y) {
    let i = q.indexOf(x);
    let j = q.indexOf(y);
    var a = q[i];
    q[i] = q[j];
    q[j] = a;
}

// Complete the lilysHomework function below.
function lilysHomework(arr) {
    let arr_clone = arr.slice();
    let arr_rev_clone = arr.slice();
    let swaps = 0;
    let rev_swaps = 0;

    arr_clone = arr_clone.sort((a,b) => a-b);
    arr_rev_clone = arr_rev_clone.sort((a,b) => b-a);

    for (let i = 0; i < arr.length; i++) {
        if( arr[i] != arr_clone[i] ){
            valueSwap(arr_clone, arr[i], arr_clone[i]);
            swaps++;
        }
        console.log(arr[i] != arr_rev_clone[i]);
        if( arr[i] != arr_rev_clone[i] ){
            valueSwap(arr_rev_clone, arr[i], arr_rev_clone[i]);
            rev_swaps++;
        }
    }

    console.log(arr_clone, arr_rev_clone);
    if(rev_swaps < swaps){
        return rev_swaps;
    }
    return swaps;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = lilysHomework(arr);

    // ws.write(result + "\n");
    console.log(result + "\n");

    // ws.end();
}
