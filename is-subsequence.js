// add whatever parameters you deem necessary

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// Constraints:
// Time Complexity - O(N + M)

function isSubsequence(sub, string) {
    let i = 0;
    let j = 0;

    while (i < sub.length && j < string.length) {
        if (sub[i] === string[j]) {
            i++;
        }
        j++;
    }

    return i === sub.length ? true : false;
}

// - Use two pointers technique -- one to track possible substring and one to track input string
// - Start left pointer at 0 index; start right pointer at length - 1 index
// - While loop: i < substring.length && j < input string.length
// - If first char of each string matches, iterate i++. j++ after if statement because we need to iterate the input string regardless to find the next match.
// - Can skip any num of chars in input string, but have to include all of possible substring
// - If not s[i] === t[j] ... then skip right to j++ (so we check the next char of input string for a match)
// - If after while loop finishes, check i = length of substring for true (iterated all the way through substring successfully) Or false if i not the length of substring