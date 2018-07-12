// by Renaldy Pratama

function perkalianUnik(arr) {
  var i = 0;
  var panjangArr = arr.length;
  var resultArr = [];
  
  while (i < panjangArr) {
    var hasilKali = 1;
    var j = 0;
    while (j < panjangArr) {
      hasilKali = hasilKali * arr[j];
      j++;
    }
    hasilKali = hasilKali / arr[i];
    resultArr.push(hasilKali);
    i++;
  }
  return resultArr;
}
  
// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]