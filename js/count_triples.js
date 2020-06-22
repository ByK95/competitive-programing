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

function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

function map(dict) {
    return function (el) {
        if (dict[el] === undefined) {
            dict[el] = 0;
        }
        dict[el]++;
    };
}

function combination(n, r) {
    let dominator = 1;
    let denominator = 1;
    for (let i = 0; i < r; i++) {
        dominator = dominator * (n - i);
        denominator = denominator * (i + 1);
    }
    return dominator / denominator;
}

// Alternative idea
function countTriplets(arr, r) {
    let count = 1;
    let sum = 0;
    let dict = {};
    forEach(arr, map(dict));
    var keys = Object.keys(dict);
    var max = Math.max.apply(null, keys);
    console.log(dict);
    if (r == 1) {
        return combination(dict[max], 3);
    }
    keys = {};
    var temp = 1;
    while (temp <= max) {
        keys[temp] = 0;
        temp = temp * r;
    }
    // console.log(dict);
    temp = Object.keys(keys);
    var total = 0;
    for (var i = 0; i < temp.length - 2; i++) {
        total += dict[temp[i]] * dict[temp[i + 1]] * dict[temp[i + 2]];
    }
    return total;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nr = readLine().replace(/\s+$/g, "").split(" ");

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((arrTemp) => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);
    console.log(ans);

    // ws.write(ans + '\n');

    // ws.end();
}
