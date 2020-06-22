// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

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

function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

// Wrapper function that maps element accurence count into dictionary
// been edited in order to count occurences
function map(dict) {
    return function (el) {
        if (dict[el] === undefined) {
            dict[el] = 1;
        }
        // dict[el]++;
    };
}

function combine_dicts() {
    let dict = arguments[0];
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            let key;
            for (key in arguments[i]) {
                if (dict[key] === undefined) {
                    dict[key] = 0;
                }
                dict[key] += arguments[i][key];
            }
        }
    }

    return dict;
}

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let letters1 = {};
    let letters2 = {};
    forEach(s1, map(letters1));
    forEach(s2, map(letters2));
    let combined = combine_dicts(letters1, letters2);
    let a;
    let total = 0;
    for (a in combined) {
        if (combined[a] == 2) {
            return "YES";
        }
    }
    return "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        ws.write(result + "\n");
    }

    ws.end();
}
