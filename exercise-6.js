function angkaPalindrome(num) {
  var i = 1;
  var angkaString; 
  var angkaBalik = '';

  while (numTemp != angkaBalik) {
    var numTemp = num++;
    angkaString = '' + numTemp;
    panjangAngka = angkaString.length;

    while (i < panjangAngka) {
      angkaBalik = angkaBalik + angkaString[panjangAngka - i];
      i++;
    }
  }
  return angkaBalik;
    
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001