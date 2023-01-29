// add whatever parameters you deem necessary

// Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

// Examples:
// twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
// twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}

function twoArrayObject(array1, array2) {
    let data = {};

    for (let i = 0; i < array1.length; i++) {
        if (!array2[i]) {
            data[array1[i]] = null;
        } else {
            data[array1[i]] = array2[i];
        }
    }

    return data;
}

// - Initialize frequency hash map
// - Loop over first array to length (not second, because we ignore extra values if there is no key present)
// - Set hash entries to input1[i] : input2[i]
// - If input2[i] is undefined (doesn't exist), set value to null
// - After input1 is finished looping, return map/object

// Springboard reduce solution:
// function twoArrayObject(keys, values) {
//     return keys.reduce((obj, cur, idx) => {
//       obj[cur] = idx < values.length ? values[idx] : null;
//       return obj;
//     }, {});
// }
  
