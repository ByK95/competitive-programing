// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
// Solution with bad time complexity
// Looks like complexty wasnt bad at all there was a sort on each median call

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

function median(values) {
    var half = Math.floor(values.length / 2);

    if (values.length % 2) {
        return values[half];
    }
    return (values[half] + values[half - 1]) / 2.0;
}

function binSearch(arr, value) {
    let upper_bound = arr.length;
    let lover_bound = 0;

    var index = Math.floor(arr.length / 2);
    while (true) {
        if (arr[index] === value) {
            return index;
        } else if (arr[index] > value) {
            upper_bound = index;
        } else {
            lover_bound = index;
        }
        index = Math.floor((upper_bound + lover_bound) / 2);
        if (upper_bound - lover_bound < 2) {
            return -1;
        }
    }
}

function binInsert(arr, value) {
    let upper_bound = arr.length;
    let lover_bound = 0;

    var index = Math.floor(arr.length / 2);
    while (true) {
        if (arr[index] === value) {
            arr.splice(index, 0, value);
            return;
        } else if (arr[index] > value) {
            upper_bound = index;
        } else {
            lover_bound = index;
        }
        index = Math.floor((upper_bound + lover_bound) / 2);
        if (upper_bound - lover_bound < 2) {
            arr.splice(lover_bound, 0, value);
            return;
        }
    }
}

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    let count = 0;
    let cache = expenditure.slice(0, d);
    cache = cache.sort(function (a, b) {
        return a - b;
    });
    let med = median(cache);

    for (let index = d; index < expenditure.length; index++) {
        const element = expenditure[index];
        if (element >= 2 * med) count++;

        if (element !== expenditure[index - d]) {
            let temp = binSearch(cache, expenditure[index - d]);
            cache.splice(temp, 1);
            if (element < cache[0]) {
                cache.splice(0, 0, element);
            } else if (element > cache[cache.length - 1]) {
                cache.splice(cache.length - 1, 0, element);
            } else {
                binInsert(cache, element);
            }
        }
        console.log(index);

        med = median(cache);
    }

    return count;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(" ");

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const expenditure = readLine()
        .split(" ")
        .map((expenditureTemp) => parseInt(expenditureTemp, 10));

    let result = activityNotifications(expenditure, d);

    console.log(result + "\n");

    // ws.end();
}
