function getCharMap(string) {
  let map = {};

  for (let char of string) {
    map[char] ? (map[char] += 1) : (map[char] = 1);
  }
  return map;
}

function checkAnagram(string1, string2) {
  let count = 0;

  if (string1.length !== string2.length) {
    return "This cannot be an Anagram";
  }

  const charMap1 = getCharMap(string1);
  const charMap2 = getCharMap(string2);
  console.log(charMap1, charMap2, count);
  for (let char of Object.keys(charMap1)) {
    console.log(
      charMap1[char] !== charMap2[char],
      charMap1[char],
      charMap2[char]
    );
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }
  return true;
}