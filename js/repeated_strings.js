// https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .replace(/\s*$/, "")
        .split("\n")
        .map((str) => str.replace(/\s*$/, ""));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    var size = s.length;
    var leftover = n % size;
    console.log(leftover);
    var multiplicator = Math.floor(n / size);
    var count = 0;

    for (var i = 0; i < size; i++) {
        if (s[i] == "a") {
            count++;
        }
        if (i == leftover - 1) {
            leftover = count;
        }
    }
    console.log(leftover);
    return count * multiplicator + leftover;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    console.log(result + "\n");
    // ws.write(result + "\n");

    // ws.end();
}
