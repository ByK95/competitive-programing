// find polindrome strings there was a mistake in code
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

function isPalindrome(str) {
    let size = Math.floor(str.length / 2);
    for (var i = 0; i < size; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

// Complete the substrCount function below.
function substrCount(n, s) {
    var count = 0;
    for (var i = 1; i < s.length + 1; i++) {
        for (var j = 0; j < s.length - i + 1; j++) {
            console.log(
                s.substring(j, j + i),
                isPalindrome(s.substring(j, j + i))
            );
            if (isPalindrome(s.substring(j, j + i))) {
                count++;
            }
        }
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const result = substrCount(n, s);

    ws.write(result + "\n");

    ws.end();
}
