// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
// Non optimal solution O(n**2)

"use strict";

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

function swap(q, x, y) {
    var a = q[x];
    q[x] = q[y];
    q[y] = a;
    return q;
}

// Complete the countSwaps function below.
function countSwaps(a) {
    let total = 0;
    for (var i = a.length - 1; i >= 0; i--) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] > a[i + 1]) {
                a = swap(a, i, i + 1);
                total++;
            }
        }
    }
    console.log("Array is sorted in " + total + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[a.length - 1]);
}

function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine()
        .split(" ")
        .map((aTemp) => parseInt(aTemp, 10));

    countSwaps(a);
}
