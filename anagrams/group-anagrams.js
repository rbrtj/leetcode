"use strict";
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
function groupAnagrams(strs) {
    if (strs.length === 0) {
        return [[""]];
    }
    const wordsMap = new Map();
    const result = [];
    strs.forEach((val) => {
        const sortedWord = val.split("").sort().join("");
        const maybeExistingVal = wordsMap.get(sortedWord);
        if (!maybeExistingVal) {
            wordsMap.set(sortedWord, [val]);
            return;
        }
        maybeExistingVal.push(val);
        wordsMap.set(sortedWord, maybeExistingVal);
    });
    wordsMap.forEach((record) => {
        result.push(record);
    });
    return result;
}
