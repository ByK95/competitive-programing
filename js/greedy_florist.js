// https://www.hackerrank.com/challenges/greedy-florist/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
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

// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
    const sumlamb = (acc, cv) => acc + cv;
    const multlamb = (mult) => (el) => el * mult;
    if(k === c.length){
        return c.reduce(sumlamb);
    }
    c = c.sort((a,b)=> b-a);

    let sum = 0;
    let mult = 1;
    while(c.length > 0){
        sum += c.splice(0, k).map(multlamb(mult)).reduce(sumlamb);
        mult++;
    }    
    return sum;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    const minimumCost = getMinimumCost(k, c);

    // ws.write(minimumCost + '\n');
    console.log(minimumCost + '\n');

    // ws.end();
}
