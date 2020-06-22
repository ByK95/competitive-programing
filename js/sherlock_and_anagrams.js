// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
// Took me alot of time but i am proud of this baby
// TODO: what is the big O for this algoritm

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

function isAnagram(text) {
    if (text.length == 2) {
        return text[0] == text[1];
    }
    var middle = Math.floor(text.length / 2);
    for (var i = 0; i < middle; i++) {
        if (text[i] != text[text.length - i]) {
            return false;
        }
    }
    return true;
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

function hasUnorderedAnagram(text, dict) {
    if (text.length == 1) {
        if (dict[text] > 1) return combination(dict[text], 2);
        return 0;
    }
    if (dict[text] < 1) return 0;
    var val = combination(dict[text], 2);
    dict[text]--;
    return val;
}

function sherlockAndAnagrams(s) {
    let dict = {};
    var size = 1;
    let count = 0;
    while (size < s.length) {
        for (var i = 0; i < s.length - size + 1; i++) {
            var word = s
                .substring(i, i + size)
                .split("")
                .sort()
                .join("");
            if (dict[word] === undefined) {
                dict[word] = 0;
            }
            dict[word]++;
        }
        size++;
    }
    console.log(dict);
    let key;
    for (key in dict) {
        console.log(key, hasUnorderedAnagram(key, dict));
        count += hasUnorderedAnagram(key, dict);
    }
    return count;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        console.log(result + "\n");
    }

    // ws.end();
}
