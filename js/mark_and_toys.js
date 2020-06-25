// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
// can be many toys with same price tag

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

// Complete the maximumToys function below.
function maximumToys(prices, k) {
    let dict = {};
    console.log(k);
    prices.map((el) => {
        if (dict[el] === undefined) {
            dict[el] = 0;
        }
        dict[el]++;
    });

    let priceList = Object.keys(dict);
    let count = 0;
    let sum = k;
    for (let index = 0; index < priceList.length; index++) {
        const element = parseInt(priceList[index]);
        sum = sum - dict[element]*element;
        count = count + dict[element];
        console.log(element, sum, k);
        if (sum < 0) {
            count--;
            break;
        }
    }

    return count;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(" ");

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const prices = readLine()
        .split(" ")
        .map((pricesTemp) => parseInt(pricesTemp, 10));

    let result = maximumToys(prices, k);

    // ws.write(result + "\n");
    console.log(result + "\n");

    // ws.end();
}
