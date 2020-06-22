// https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// Briefly: Sorted array where each number can move 2 place down own the line
// Calculate if state is possible
// Calculate move count

function swap(q, x, y) {
    var a = q[x];
    q[x] = q[y];
    q[y] = a;
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let bribes = 0;
    var swap_count = 0;
    for (var j = 0; j < 3; j++) {
        swap_count = 0;
        for (var i = q.length - 1; i >= 0; i--) {
            if (q[i] > q[i + 1]) {
                swap(q, i, i + 1);
                swap_count++;
            }
        }
        bribes += swap_count;
    }
    if (swap_count != 0) {
        console.log("Too chaotic");
        return;
    }
    console.log(bribes);
}
