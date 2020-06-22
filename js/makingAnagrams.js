// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
//An interesting solution

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

function map_pos(dict, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (dict[arr[i]] === undefined) {
            dict[arr[i]] = 0;
        }
        dict[arr[i]]++;
    }
}

function map_neg(dict, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (dict[arr[i]] === undefined) {
            dict[arr[i]] = 0;
        }
        dict[arr[i]]--;
    }
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let letters = {};
    map_pos(letters, a);
    map_neg(letters, b);
    let letter;
    let sum = 0;
    for (letter in letters) {
        sum += Math.abs(letters[letter]);
    }
    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + "\n");

    ws.end();
}
