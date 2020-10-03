




function makeAnagram(string1, string2) {
  let obj1 = {};
  let obj2 = {};
  let count = 0;
  for (let char of string1) {
    if (obj1[char]) {
      obj1[char] += 1;
    } else {
      obj1[char] = 1;
    }
  }
  //console.log(obj1);

  for (let character of string2) {
    if (obj2[character]) {
      obj2[character] += 1;
    } else {
      obj2[character] = 1;
    }
  }

  console.log(obj1, obj2);

  for (let val in obj1) {
    for (let value in obj2) {
      if (val == value) {
        count++;
        console.log(value);
      }
    }
  }
  console.log(count++);
  console.log(string1.length);
  console.log(string1.length - count, string2.length - count, count);
  let result = string1.length - count + (string2.length - count);
  return result;
}