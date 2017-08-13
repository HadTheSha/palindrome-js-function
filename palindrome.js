function isPalindrome(str) {
    var strLower= str.split(" ").join("").toLowerCase();
    var mid = Math.floor(strLower.length/2);
    var last = strLower.length - 1;
    for (var i = 0; i < mid; i++) {
      if (strLower[i] !== strLower[last - i]) return false;
    }
    return true;
}

// Test driver code. These should all log true;
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);
