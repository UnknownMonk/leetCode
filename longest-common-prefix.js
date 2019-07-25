// var longestCommonPrefix = function(strs) {
//   let prefix = [];
//   strs.forEach(str => {
//     prefix.push(str.slice(0, 2));
//   });
//   if (strs === []) {
//     return '';
//   }

//   if (prefix[0] === prefix[1] && prefix[1] === prefix[2]) {
//     return prefix[0];
//   } else {
//     return '';
//   }
// };

var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length) {
    return '';
  }
  if (strs.length == 1) {
    return strs.find(() => true);
  }

  strs.sort(function(a, b) {
    return a.length - b.length;
  });

  let minLength = strs[0].length;
  console.log(minLength);

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].slice(0, minLength) !== strs[0].slice(0, minLength)) {
      minLength--;
    }
    if (minLength < 0) return '';
  }
  return strs[0].slice(0, minLength);
};

//'itterate over the array'
// slice off the the first 2 letter of the string
//

console.log(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
console.log(
  longestCommonPrefix(['fiower', 'night', 'niight']),
  'There is no common prefix'
);
