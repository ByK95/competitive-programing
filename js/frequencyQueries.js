// https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
// passes 14/15 testes one goes into timeout
// 9.06.2020 Update reduced complexity #Works like a charm

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString.split("\n");

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function checkThreshold(dict, freq) {
    var key;
    for (key in dict) {
        if (dict[key] == freq) {
            return 1;
        }
    }
    return 0;
}

function checkFreqExists(dict, freq) {
    var result = Object.values(dict).indexOf(freq);
    if (result) return 1;
    return 0;
}

// Complete the freqQuery function below.
function freqQuery(queries) {
    let dictionary = {};
    let lookup = {};
    let responses = [];
    for (var i = 0; i < queries.length; i++) {
        if (queries[i][0] == 1) {
            if (dictionary[queries[i][1]] === undefined) {
                dictionary[queries[i][1]] = 0;
            } else {
                updateDict(lookup, dictionary[queries[i][1]], -1);
            }
            dictionary[queries[i][1]]++;
            updateDict(lookup, dictionary[queries[i][1]], 1);
        } else if (queries[i][0] == 2) {
            if (
                dictionary[queries[i][1]] != undefined &&
                dictionary[queries[i][1]] > 0
            ) {
                updateDict(lookup, dictionary[queries[i][1]], -1);
                dictionary[queries[i][1]]--;
                updateDict(lookup, dictionary[queries[i][1]], +1);
            }
        } else if (queries[i][0] == 3) {
            if (lookup[queries[i][1]] > 0) {
                responses.push(1);
            } else {
                responses.push(0);
            }
        }
    }
    return responses;
}

function main() {
    const ws = fs.createWriteStream("./out.txt");

    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine()
            .replace(/\s+$/g, "")
            .split(" ")
            .map((queriesTemp) => parseInt(queriesTemp, 10));
    }

    const ans = freqQuery(queries);

    ws.write(ans.join("\n") + "\n");

    ws.end();
}
