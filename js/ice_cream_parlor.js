// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
// Solved 
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function binSearch(arr, value) {
    let upper_bound = arr.length;
    let lover_bound = 0;

    var index = Math.floor(arr.length / 2);
    while (true) {
        if (arr[index] === value) {
            return findFirstOccurence(arr, index);
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

// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
    let dict = new Map();
    for (let index = 0; index < cost.length; index++) {
        const element = cost[index];
        if(element > money) continue;
        if(dict.has(element)){
            let elem = dict.get(element);
            elem.c++;
            elem.indexes.push(index);
        }else{
            dict.set(element,{c:1,indexes:[index]});
        }
    }
    for(let key of dict.keys()){
        let diff = money - key;
        let match = dict.get(diff);
        if(match !== undefined){
            if(diff === key){
                if(match.c > 1){
                    console.log(match.indexes[0]+1,match.indexes[1]+1)
                    return;
                }
            }else{
                console.log(dict.get(key).indexes[0]+1,match.indexes[0]+1)
                return;
            }   
        }
    }
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const money = parseInt(readLine(), 10);

        const n = parseInt(readLine(), 10);

        const cost = readLine().split(' ').map(costTemp => parseInt(costTemp, 10));

        whatFlavors(cost, money);
    }
}
