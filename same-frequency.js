// add whatever parameters you deem necessary

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// Constraints
// Time Complexity - O(N + M)

function sameFrequency(x, y) {
    let xFreq = new Map();
    let yFreq = new Map();

    x = x.toString();
    y = y.toString();

    if (x.length !== y.length) return false;

    for (const num of x) {
        if (xFreq.has(num)) {
            xFreq.set(num, xFreq.get(num) + 1);
        } else {
            xFreq.set(num, 1);
        }
    }

    for (const num of y) {
        if (yFreq.has(num)) {
            yFreq.set(num, yFreq.get(num) + 1);
        } else {
            yFreq.set(num, 1);
        }
    }

    for (const val of xFreq.keys()) {
        if (yFreq.get(val) !== xFreq.get(val)) {
            return false;
        }
    }

    return true;
}

// - Because both inputs are integers, we have to use a map not an object to store frequencies
// - Convert integer to string so we are able to loop over the characters
// - create frequency hash maps for both inputs
// - compare sizes of each hash map -- if not the same size, can't have same frequency: return false
// - Loop over first input and check if the value not only exists in input2, but has the same frequency
// - If either key doesn't exist, or it doesn't occur in the other input in the same frequency, return false
// - If by the time the loop finishes, then there are no false cases present -- return true