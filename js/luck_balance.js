// https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
// Should think more about edge cases
// solved

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

// Complete the luckBalance function below.
function luckBalance(k, contests) {
    let sum = 0;
    const sumfunc = (acc, cv) => acc + cv;
    let im_cont = contests.map(function(el){
        if(el[1] === 1) return el[0];
        sum += el[0];
    });
    im_cont = im_cont.filter(Number).sort((a,b) => a-b);
    let winnnings = im_cont.splice(0, im_cont.length - k);
    console.log(sum, im_cont, winnnings);
    if(im_cont.length > 0){
        sum += im_cont.reduce(sumfunc);
    }
    if(winnnings.length > 0){
        sum -= winnnings.reduce(sumfunc);
    }
    return sum;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    let contests = Array(n);

    for (let i = 0; i < n; i++) {
        contests[i] = readLine().split(' ').map(contestsTemp => parseInt(contestsTemp, 10));
    }

    const result = luckBalance(k, contests);

    // ws.write(result + '\n');
    console.log(result + '\n');

    // ws.end();
}
