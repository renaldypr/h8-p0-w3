// by Renaldy Pratama

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(input) {
  /* Hasil 1 */
  input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
  input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
  console.log(input);

  /* Hasil 2 */
  var tanggal = input[3].split('/');
  namaBulan = tanggal[1];
  switch(namaBulan) {
      case '01':
        namaBulan = 'Januari';
        break;
      case '02':
        namaBulan = 'Februari';
        break;
      case '03':
        namaBulan = 'Maret';
        break;
      case '04':
        namaBulan = 'April';
        break;
      case '05':
        namaBulan = 'Mei';
        break;
      case '06':
        namaBulan = 'Juni';
        break;
      case '07':
        namaBulan = 'Juli';
        break;
      case '08':
        namaBulan = 'Agustus';
        break;
      case '09':
        namaBulan = 'September';
        break;
      case '10':
        namaBulan = 'Oktober';
        break;
      case '11':
        namaBulan = 'November';
        break;
      case '12':
        namaBulan = 'Desember';
        break;
  }
  console.log(namaBulan);
  
  /* Hasil 3 */
  var tanggalUrut = tanggal.sort(function(a,b){return b-a});
  console.log(tanggalUrut);

  /* Hasil 4 */
  tanggal = input[3].split('/');
  console.log(tanggal.join('-'));

  /* Hasil 5 */
  var nama = '';
  nama = nama + input.slice(1,2);
  slice1 = nama.slice(0,15);
  console.log(slice1);
}

dataHandling2(input);