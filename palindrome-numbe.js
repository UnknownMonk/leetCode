let isPalindrome = function(x) {
  let num = x
    .toString()
    .split('')
    .reverse()
    .join('');
  console.log(typeof +num);
  if (+num === x) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(121));
console.log(isPalindrome(-121));

console.log(isPalindrome(10));
