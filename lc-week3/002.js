/*
Competencies: Function and Conditionals

Instruksi
-------------------------------
Dalam suaru antrian terdapat 3 loket pelayanan 
Loket A akan melayani pelanggan dengan nomor urut 1, 4, 7, 10
Loket B akan melayani pelanggan dengan nomor urut 2, 5, 8, 11
Loket C akan melayani pelanggan dengan nomor urut 3, 6, 9, 12

Dan pada antrian ini hanya ada 12 antrian.

Jika nomor antrian lebih besar dari 12 atau lebih kecil dari 1, maka tampilkan "Nomor antrian invalid"

Buatlah function loketPelayan yang menerima input berupa nomor antrian dan 
mengembalikan Loket yang akan memberikan pelayanan.
Note:
- function locketPelayanan hanya menerima 1 parameter berupa angka
- gunakan conditional, dapat berupa if-else atau switch-case statement 
*/

function loketPelayan(nomorUrut) {
  switch(nomorUrut) {
    case 1:
      return 'Layanan Loket A';
      break;
    case 2:
      return 'Layanan Loket B';
      break;
    case 3:
      return 'Layanan Loket C';
      break;
    case 4:
      return 'Layanan Loket A';
      break;
    case 5:
      return 'Layanan Loket B';
      break;
    case 6:
      return 'Layanan Loket C';
      break;
    case 7:
      return 'Layanan Loket A';
      break;
    case 8:
      return 'Layanan Loket B';
      break;
    case 9:
      return 'Layanan Loket C';
      break;
    case 10:
      return 'Layanan Loket A';
      break;
    case 11:
      return 'Layanan Loket B';
      break;
    case 12:
      return 'Layanan Loket C';
      break;
    default:
      return 'Nomor antrian invalid';
      break;
  }
}

console.log(loketPelayan(1)); // Layanan Loket A
console.log(loketPelayan(5)); // Layanan Loket B
console.log(loketPelayan(6)); // Layanan Loket C

// by Renaldy Pratama