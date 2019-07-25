/**
 * heart - earth
 *
 * @param {*} s1
 * @param {*} s2
 * @return {boolean}
 */
const isAnagram = (s1, s2) => {
  let charCount = {};

  for (const char of s1.split("")) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (const char of s2.split("")) {
    charCount[char] = charCount[char] - 1;
  }

  return Object.keys(charCount).every(key => charCount[key] === 0);
};

module.exports = isAnagram;
