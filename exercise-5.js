// by Renaldy Pratama

function palindrome(kata) {
  var panjangKata = kata.length;
  var i = 1;
  var kataBalik = '';

  while (i <= panjangKata) {
    kataBalik = kataBalik + kata[panjangKata - i];
    i++;
  }

  if (kataBalik === kata) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false