// Complete the arrayManipulation function below.
// Only 8 tests passes
// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D%5B%5D=arrays
function arrayManipulation(n, queries) {
    var arr = new Array(n).fill(0);
    for (var i = 0; i < queries.length; i++) {
        for (var j = queries[i][0] - 1; j <= queries[i][1] - 1; j++) {
            arr[j] += queries[i][2];
        }
    }
    return Math.max.apply(null, arr);
}

// Couldn't solve it myself so looked up solution
// Looks like there is solution with O(n) complexity
function arrayManipulation(n, queries) {
    var dict = {};
    for (var i = 0; i < queries.length; i++) {
        if (dict[queries[i][0]] === undefined) {
            dict[queries[i][0]] = queries[i][2];
        } else {
            dict[queries[i][0]] += queries[i][2];
        }

        if (dict[queries[i][1] + 1] === undefined) {
            dict[queries[i][1] + 1] = -queries[i][2];
        } else {
            dict[queries[i][1] + 1] -= queries[i][2];
        }
    }
    var maxValue = 0;
    var sum = 0;
    var index;
    for (index in dict) {
        sum = sum + dict[index];
        if (sum > maxValue) {
            maxValue = sum;
        }
    }
    return maxValue;
}

// An alternating idea
function countTriplets(arr, r) {
    let count = 0;
    let dict = {};
    forEach(arr, map(dict));
    var keys = Object.keys(dict);
    var min = Math.min.apply(null, keys);
    var max = Math.max.apply(null, keys);
    keys = {};
    var temp = 1;
    while (temp <= max) {
        keys[temp] = 0;
        temp = temp * r;
    }
    console.log(keys);
}

// Bad implementation
function arrayManipulation(n, queries) {
    var indexes = [1, n];
    var values = [0, 0];
    for (var i = 0; i < queries.length; i++) {
        var minNum = Math.max.apply(
            Math,
            indexes.filter(function (x) {
                return x <= queries[i][0];
            })
        );
        var maxNum = Math.max.apply(
            Math,
            indexes.filter(function (x) {
                return x <= queries[i][1];
            })
        );

        var minIndex = indexes.indexOf(minNum);
        var maxIndex = indexes.indexOf(maxNum);

        if (indexes[minIndex] == queries[i][0]) {
            // values[minIndex] += queries[i][2];
        } else {
            indexes.splice(minIndex + 1, 0, queries[i][0]);
            values.splice(minIndex + 1, 0, values[minIndex] + queries[i][2]);
        }

        if (indexes[maxIndex] == queries[i][1]) {
            // values[maxIndex] += queries[i][2];
        } else {
            indexes.splice(maxIndex + 1, 0, queries[i][1]);
            values.splice(maxIndex + 1, 0, values[maxIndex] + queries[i][2]);
        }
    }
    return Math.max.apply(null, values);
}
