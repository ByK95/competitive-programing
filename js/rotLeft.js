// Rotate array to the left n times O(n) complexity

function rotLeft(a, d) {
    var rotation_index = d % a.length;
    var rotated = [];
    var stop = rotation_index;
    while (rotation_index < a.length) {
        rotated.push(a[rotation_index++]);
    }
    for (var i = 0; i < stop; i++) {
        rotated.push(a[i]);
    }
    return rotated;
}
