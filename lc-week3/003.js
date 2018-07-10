// Competencies: Loopings
/*
Competencies: Looping

=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
321
21
1
contoh 2 (height = 5):
54321
4321
321
21
1
contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/

var height = 5;
var i = 0;
var j;
var row;

while (i < height) {
  row = '';
  j = height - i;
  while (j > 0) {
    row = row + j
    j--
  }
  console.log(row);
  i++;
}

// by Renaldy Pratama