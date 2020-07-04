// https://www.hackerrank.com/challenges/special-palindrome-again/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
// Passes few tests
// Better time complexity yet unable to detect combinations bigger than size 3
// Fails at 3 tests where 2 letters alternate
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

function isSpecial(stack){
    if(stack[0].k === stack[2].k && stack[1].c === 1){
        return Math.min(stack[0].c, stack[2].c);
    }
    return 0;
}

// Complete the substrCount function below.
function substrCount(n, s) {
    let stack = { 0:{k:"", c:0}, 1:{k:"", c:0}, 2:{k:"", c:0} };
    let ptr = 0;
    let sum = n;
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if(stack[ptr].k == element){
            stack[ptr].c++;
            if(stack[ptr].c > 1) sum += stack[ptr].c - 1;
        }
        else if(stack[ptr].k == ""){
            stack[ptr].k = element;
            stack[ptr].c = 1;
        } else {
            sum += isSpecial(stack);
            ptr++;
            if(ptr == 3){
                stack[0] = stack[1];
                stack[1] = stack[2];
                stack[2] = {k:"", c:0};
                ptr--;
            }
            stack[ptr].k = element;
            stack[ptr].c = 1;
            if(index === s.length - 1){
                sum += isSpecial(stack);
            }
        }
        console.log(element, stack);
    }
    return sum;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const result = substrCount(n, s);

    // ws.write(result + '\n');
    console.log(result + '\n');

    // ws.end();
}
