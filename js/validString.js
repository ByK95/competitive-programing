// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
// Solved

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

// Complete the isValid function below.
function isValid(s) {
    let letters = {};
    for (let i = 0; i < s.length; i++) {
        if (letters[s[i]] === undefined) {
            letters[s[i]] = 0;
        }
        letters[s[i]]++;
    }
    let key;
    let changes = {};
    console.log(letters);
    for (key in letters) {
        if (changes[letters[key]] === undefined) {
            changes[letters[key]] = 0;
        }
        changes[letters[key]]++;
    }
    console.log(changes);
    let vals = Object.keys(changes);
    if (vals.length < 3) {
        if (Math.abs(vals[0] - vals[1]) == 1) {
            if (changes[vals[0]] > 1 && changes[vals[1]] > 1) {
                return "NO";
            }
            return "YES";
        }
        if (changes[1] == 1) {
            return "YES";
        }
        if (vals.length == 1) {
            return "YES";
        }
    }
    return "NO";
}

function main() {
    const ws = fs.createWriteStream("./out.txt");

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
