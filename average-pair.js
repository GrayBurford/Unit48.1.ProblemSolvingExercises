// add whatever parameters you deem necessary

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Constraints:
// Time Complexity: O(N)

// Examples:
// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false

function averagePair(inputArray, target) {
    if (inputArray.length < 2) return false;

    let left = 0;
    let right = inputArray.length - 1;

    while (left < right) {
        let average = (inputArray[left] + inputArray[right]) / 2;

        if (average === target) return true;

        average > target
            ? right--
            : left++;
    }

    return false;
}

// - If input array is empty or length 1, return false (no pairs of values at all)
// - Since array is sorted, use sliding window technique with start index 0 and end index length - 1
// - Use while loop to loop over array values while left < right (so they never cross, otherwise are running redundant loops)
// - Add start and end values together and check if it is LT/GT the target value.
// - If sum is less than target, left++ (need a larger value)
// - If sum is greater than target, right-- (need a smaller value)
// - If sum equals target, return true
// - If while loop finishes without finding a sum pair that equals target, return false (all possible pairs accounted for)
