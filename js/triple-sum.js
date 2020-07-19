// https://www.hackerrank.com/challenges/triple-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
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

function binSearch(arr, value) {
    let upper_bound = arr.length;
    let lover_bound = 0;

    var index = Math.floor(arr.length / 2);
    while (true) {
        if (arr[index] === value) {
            return index;
        } else if (arr[index] > value) {
            upper_bound = index;
        } else {
            lover_bound = index;
        }
        index = Math.floor((upper_bound + lover_bound) / 2);
        if (upper_bound - lover_bound < 1) {
            return -1;
        }
    }
}

// Complete the triplets function below.
function triplets(a, b, c) {
    let values = {};
    let bs = new Map();

    for (let index = 0; index < b.length; index++) {
        const element = b[index];
        bs.set(element,1);
        if(values[element] !== undefined){
            values[element].push(2);
        }else{
            values[element] = [2];
        }
    }
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if(values[element] !== undefined){
            values[element].push(1);
        }else{
            values[element] = [1];
        }
    }
    for (let index = 0; index < c.length; index++) {
        const element = c[index];
        if(values[element] !== undefined){
            values[element].push(3);
        }else{
            values[element] = [3];
        }
    }
    let sum = 0;
    let arr = Object.keys(values).map((el) => Number(el));
    let lookup = {};
    let lefts = 0;
    let rights = 0;
    for (let i = 0; i < arr.length; i++) {
        const temp = values[arr[i]];
        lefts += temp.indexOf(1) === -1 ? 0 : 1;
        rights += temp.indexOf(3) === -1 ? 0 : 1;
        lookup[i] = {l:lefts, r:rights};
    }
    bs.forEach((value, key, map) =>{
        // console.log(arr, key);
        let index = binSearch(arr, key);
        let multers = lookup[index];
        if(multers === undefined){
            console.log(index, key, arr.length, arr[1318], values[963263]);
        }
        sum += multers.l * multers.r;
        // console.log(sum);
    });
    
    // console.log(bs);
    return sum;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const lenaLenbLenc = readLine().split(' ');

    const lena = parseInt(lenaLenbLenc[0], 10);

    const lenb = parseInt(lenaLenbLenc[1], 10);

    const lenc = parseInt(lenaLenbLenc[2], 10);

    const arra = readLine().split(' ').map(arraTemp => parseInt(arraTemp, 10));

    const arrb = readLine().split(' ').map(arrbTemp => parseInt(arrbTemp, 10));

    const arrc = readLine().split(' ').map(arrcTemp => parseInt(arrcTemp, 10));

    const ans = triplets(arra, arrb, arrc);

    console.log(ans + '\n');
    // ws.write(ans + '\n');

    // ws.end();
}