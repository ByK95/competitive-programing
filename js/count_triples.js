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
function very_long(arr, r) {
    let flag = false;
    if (r == 1) {
        flag = true;
    }

    let powers = { 1: { c: 0 } };
    let max_power = 0;

    for (let index = arr.length - 1; index >= 0; index--) {
        const element = arr[index];

        if (element > max_power) {
            if (max_power == 0) {
                max_power = r;
                powers[max_power] = { c: 0 };
            }
            while (max_power < element) {
                max_power = max_power * 3;
                powers[max_power] = { c: 0 };
            }
        }

        if (powers[element] !== undefined) {
            powers[element]["c"]++;
            powers[element][index] = powers[element]["c"];
        }
    }

    let keys;
    let lookup = {};
    for (keys in powers) {
        delete powers[keys]["c"];
        lookup[keys] = Object.keys(powers[keys]);
    }
    console.log(lookup);
    // combination(dict[max], 3);
    return true;
}

function cleanify(dict, key) {
    let node;
    for (node in dict) {
        if (node > key) {
            dict[node] = 0;
        }
    }
}

function countTriplets(arr, r) {
    //  So close
    if (r == 1) {
        let dict = {};
        forEach(arr, map(dict));
        let nums = Object.keys(dict);
        let sum = 0;
        if (nums.length == 1) return combination(dict[nums[0]], 3);
        for (let index = 0; index < nums.length; index++) {
            sum += combination(dict[nums[index]], 3);
        }
        return sum;
    }
    let powers = { 1: 0 };
    let max_power = 1;
    let power_indexes = [1];
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if (element > max_power) {
            if (max_power == 0) {
                max_power = r;
                powers[max_power] = 0;
            }
            while (max_power < element) {
                max_power = max_power * r;
                powers[max_power] = 0;
                power_indexes = Object.keys(powers);
            }
        }

        if (powers[element] !== undefined) {
            powers[element]++;
            cleanify(powers, element);
            let index = power_indexes.findIndex((el) => {
                return el == element;
            });
            if (index > 1) {
                count +=
                    powers[power_indexes[index - 1]] *
                    powers[power_indexes[index - 2]];
                console.log(powers);
                // console.log(power_indexes[index - 2], power_indexes[index - 1]);
            }
        }
    }
    return count;
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
