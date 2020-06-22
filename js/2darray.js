// Ugly very ugly
// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

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

function consecSum(arr, fromIndex, toIndex) {
    var sum = 0;
    for (var i = fromIndex; i < toIndex; i++) {
        sum += arr[i];
    }
    return sum;
}

function initSum(arr, x, y) {
    var total = 0;
    total += consecSum(arr[y], x, x + 3);
    total += arr[y + 1][x + 1];
    total += consecSum(arr[y + 2], x, x + 3);
    return total;
}

function shiftRight(arr, x, y) {
    var change = arr[y][x + 3] + arr[y + 1][x + 2] + arr[y + 2][x + 3];
    change += -arr[y][x] - arr[y + 1][x + 1] - arr[y + 2][x];
    return change;
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    var biggest = -9999;
    for (var i = 0; i < 4; i++) {
        var sum = initSum(arr, 0, i);
        if (sum > biggest) biggest = sum;
        for (var j = 0; j < 3; j++) {
            sum += shiftRight(arr, j, i);
            if (sum > biggest) biggest = sum;
        }
    }
    return biggest;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine()
            .split(" ")
            .map((arrTemp) => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
