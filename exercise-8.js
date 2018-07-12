// by Renaldy Pratama

function pasanganTerbesar(num) {
  var i = 0;
  var tampungNum = '' + num;
  var panjangNum = tampungNum.length;
  var resultFinal = 0;

  while (i < panjangNum) {
    var resultTemp = 0;
    var nilai1 = tampungNum[i];
    var nilai2 = tampungNum[i+1];
    resultTemp = nilai1 + nilai2;

    if (resultTemp > resultFinal) {
      resultFinal = resultTemp;
    }

    i++;
  }
  resultFinal = parseInt(resultFinal);
  return resultFinal;
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99