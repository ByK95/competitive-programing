// https://www.hackerrank.com/challenges/swap-nodes-algo/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
// Solved
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printTree(tree, arr){
    if(tree.l !== -1){
        printTree(tree.l, arr);
    }
    arr.push(tree.v);
    if(tree.r !== -1){
        printTree(tree.r, arr);
    }
    return arr;
}

function swapTreeNodes(depth, tree){
    if(depth === 1){
        let temp = tree.l;
        tree.l = tree.r;
        tree.r = temp;
    }
    if( tree.l !== -1 ) swapTreeNodes(depth - 1, tree.l);
    if( tree.r !== -1 ) swapTreeNodes(depth - 1, tree.r);
}

/*
 * Complete the swapNodes function below.
 */
function swapNodes(indexes, queries) {
    let tree = {l:-1,r:-1,v:1,parrent:-1};
    let parrent = tree;
    let backtrack = [];
    let depth = 0;
    for (let index = 0; index < indexes.length; index++) {
        const element = indexes[index];
        if(element[0] !== -1){
            parrent.l = {l:-1,r:-1,v:element[0],parrent:parrent};
            backtrack.push(parrent.l);
            depth++;
        }
        if(element[1] !== -1){
            parrent.r = {l:-1,r:-1,v:element[1],parrent:parrent};
            backtrack.push(parrent.r);
            depth++;
        }
        parrent = backtrack.shift();
    }
    console.log(queries);
    let changes = [];
    for (let i = 0; i < queries.length; i++) {
        const element = queries[i];
        for(let j = 0; j < Math.floor(depth / element); j++){
            swapTreeNodes(element * (j+1), tree);
        }
        changes.push(printTree(tree,[]));
    }
    return changes;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let indexes = Array(n);

    for (let indexesRowItr = 0; indexesRowItr < n; indexesRowItr++) {
        indexes[indexesRowItr] = readLine().split(' ').map(indexesTemp => parseInt(indexesTemp, 10));
    }

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let queriesItr = 0; queriesItr < queriesCount; queriesItr++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    let result = swapNodes(indexes, queries);

    // ws.write(result.map(x => x.join(' ')).join("\n") + "\n");
    console.log(result.map(x => x.join(' ')).join("\n") + "\n");

    // ws.end();
}