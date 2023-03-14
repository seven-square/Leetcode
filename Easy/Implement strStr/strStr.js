function strStr(haystack, needle) {
  let output = -1;
  let count = 0;
  if (needle.length == 0 || haystack.length == 0) {
    return 0;
  }
  if (haystack.length < needle.length) {
    return -1;
  }
  for (let i = 0; i < haystack.length; i++) {
    let lastIndexCharacter = needle.length - 1;
    if (
      haystack[i] == needle[0] &&
      haystack[i + lastIndexCharacter] == needle[lastIndexCharacter]
    ) {
      output = i;
      let j = 0;
      while (j < needle.length) {
        if (needle[j] == haystack[i]) {
          count++;
          i++;
          j++;
        } else {
          count = 0;
          break;
        }
      }
      i = output;
      if (count == needle.length) {
        return output;
      }
    }
  }
  return -1;
}
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("aaaaa", ""));
console.log(strStr("", ""));
console.log(strStr("aaaaa", "aa"));
console.log(strStr("aaa", "aaaa"));
console.log(strStr("mississippi", "issip"));
console.log(strStr("mississippi", "sipp"));
console.log(
  strStr(
    "abbabaaaabbbaabaabaabbbaaabaaaaaabbbabbaabbabaabbabaaaaababbabbaaaaabbbbaaabbaaabbbbabbbbaaabbaaaaababbaababbabaaabaabbbbbbbaabaabaabbbbababbbababbaaababbbabaabbaaabbbba",
    "bbbbbbaa"
  )
);
