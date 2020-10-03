

function getCharObject(string) {
  let charObject = {};

  for (let char of string) {
    charObject[char] ? (charObject[char] += 1) : (charObject[char] = 1);
  }
  return charObject;
}

function checkAnagram(string1, string2) {
  let count = 0;

  if (string1.length !== string2.length) {
    return "This cannot be an Anagram";
  }

  const charObject1 = getCharObject(string1);
  const charObject2 = getCharObject(string2);


  for (let char of Object.keys(charObject1)) {
    
    if (charObject1[char] !== charObject2[char]) {
      return "No It is not an Anagram";
    }
  }
  return "Yes!! It is an Anangram";
}

console.log(checkAnagram("apple","alppe"))