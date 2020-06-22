// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// Briefly: Given an unsorted array where each element is unique and from 1 to n
// Calculate the minimum swaps required to get given array

function swap(q, x, y) {
    var a = q[x];
    q[x] = q[y];
    q[y] = a;
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    var swaps = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] != i + 1) {
            swap(arr, i, arr.indexOf(i + 1));
            swaps++;
        }
    }
    return swaps;
}
