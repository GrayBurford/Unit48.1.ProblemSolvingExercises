// add whatever parameters you deem necessary

// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.

// Examples:

// countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
// countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
// countPairs([4,6,2,7], 10) // 1 (4,6)
// countPairs([1,2,3,4,5], 10) // 0
// countPairs([1,2,3,4,5], -3) // 0
// countPairs([0,-4],-4) // 1
// countPairs([1,2,3,0,-1,-2],0) // 2

// Constraints
// Time Complexity - O(N * log(N))
// or
// Time Complexity - O(N)

function countPairs(nums, target) {
    let set = new Set(nums);
    let counter = 0;

    for (const key of set.keys()) {
        let comp = target - key;

        if (comp !== key && set.has(comp)) {
            counter++;
            set.delete(key);
            set.delete(comp);
        }
    }
    return counter;
}

// - turn input into set (given info said no duplicates, so all nums are unique; also means no frequency other than 1)
// - loop over set, subtract each key from the target to find the complement
// - check if set already has the complement pair to sum to the target
// - if a pair is found, remove those values from the set??
// - if pair is found, counter++