function translatePigLatin(str) {
  // We define a regex to match consonant clusters at the beginning of strings
  const consonantCluster = /^[^aeiou]+/i;

  // We then check the passed string against this regex
  const match = str.match(consonantCluster);

  if (match) {
    // If there's a match, it moves the consonant cluster to the end, + "ay"
    const cluster = match[0];
    const restOfString = str.slice(cluster.length);
    return restOfString + cluster + "ay";
  } else {
    // If the string starts with a vowel, just add "way" to the end
    return str + "way";
  }
}

console.log(translatePigLatin("consonant")); // Output: "onsonantcay"
console.log(translatePigLatin("algorithm")); // Output: "algorithmway"
