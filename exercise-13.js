function targetTerdekat(arr) {
  var i = 0;
  var panjangArr = arr.length;
  var posisiO = '';
  var posisiX = '';
  var irisanArr;
  var result = 0;
  
  while (i < panjangArr) {
    var char = arr[i];
    if (char === 'o') {
        posisiO = i;
    } else if (char === 'x') {
        posisiX = i;
    }
  
    if (typeof posisiO === 'number' && typeof posisiX === 'number') {
      if (posisiO > posisiX) {
          irisanArr = arr.slice(posisiX, posisiO);
      } else {
          irisanArr = arr.slice(posisiO, posisiX);
      }
      result = irisanArr.length;
      return result;
    }
      i++;
  }
  return result;
}
    
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2