// https://www.hackerrank.com/challenges/special-palindrome-again/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString
        .replace(/\s*$/, "")
        .split("\n")
        .map((str) => str.replace(/\s*$/, ""));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the substrCount function below.
function substrCount(n, s) {
    let letters = {};
    for (let i = 0; i < n; i++) {
        if (letters[s[i]] === undefined) {
            letters[s[i]] = 0;
        }
        letters[s[i]]++;
    }
    let order = Object.values(letters).reduce(function (a, b) {
        return Math.max(a, b);
    });
    if (order % 2 == 0) order++;

    console.log(letters);
    console.log(order);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const result = substrCount(n, s);

    ws.write(result + "\n");

    ws.end();
}
