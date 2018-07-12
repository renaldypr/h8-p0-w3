// by Renaldy Pratama

function mengelompokkanAngka(arr) {
  var i = 0;
  var panjangArr = arr.length;
  var nilaiTemp = 0;
  var genapArr = [];
  var ganjilArr = [];
  var kelipatanTigaArr = [];
  var resultArr = [];

  while (i < panjangArr) {
    nilaiTemp = arr[i];
    if (nilaiTemp % 3 === 0) {
        kelipatanTigaArr.push(nilaiTemp);
    } else if (nilaiTemp % 2 === 1) {
        ganjilArr.push(nilaiTemp);
    } else {
        genapArr.push(nilaiTemp);
    }
    i++;
  }

  resultArr.push(genapArr, ganjilArr, kelipatanTigaArr);
  return resultArr;
}
  
// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]