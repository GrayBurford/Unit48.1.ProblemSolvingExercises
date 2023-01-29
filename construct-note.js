// add whatever parameters you deem necessary

// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:
// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

// Examples:
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(message, letters) {
    if (message.length > letters) return false;

    let hashMap = new Map();
    for (const char of letters) {
        if (hashMap.get(char)) {
            hashMap.set(char, hashMap.get(char) + 1);
        } else {
            hashMap.set(char, 1);
        }
    }

    for (const char of message) {
        if (!hashMap.get(char)) {
            return false;
        }
        hashMap.set(char, hashMap.get(char) - 1);
        if (hashMap.get(char) === 0) {
            hashMap.delete(char);
        }
    }
    return true;
}

// - Check that we have enough letters in letters input to build the message first
// - Loop over letters and build a frequency hash map to hold occurrence of each letter
// - Loop over chars in message to check if hash map has them, and remove 1 count of each corresponding letter each time.
// - If message character is not found in letters hash map, return false
// - If not false, move on, and if new frequency of each chracter is 0, delete the key
// - If we get to the end of looping over message without returning false, return true (all letters of message have been accounted for in letters hash map)
