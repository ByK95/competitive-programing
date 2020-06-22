// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

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

function forEachCheck(arr, callback) {
    let matches = 0;
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            matches++;
        }
    }
    return matches;
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    var jumps = 0;
    var index = 0;
    while (index < c.length - 1) {
        for (var i = 2; i > 0; i--) {
            var next_pos = index + i;
            if (c[next_pos] == 0) {
                jumps++;
                index = next_pos;
                break;
            }
        }
    }
    return jumps;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine()
        .split(" ")
        .map((cTemp) => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
