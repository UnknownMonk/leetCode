var longestCommonPrefix = function(strs) {
  let prefix = [];
  strs.forEach(str => {
    prefix.push(str.slice(0, 2));
  });
  if (strs === []) {
    return '';
  }

  if (prefix[0] === prefix[1] && prefix[1] === prefix[2]) {
    return prefix[0];
  } else {
    return '';
  }
};

//'itterate over the array'
// slice off the the first 2 letter of the string
//

console.log(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
console.log(
  longestCommonPrefix(['fiower', 'night', 'niight']),
  'There is no common prefix'
);
