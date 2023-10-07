// BIMA KARUNIA FAJAR SYAHPUTRA
// INFINITE LEARNING BATCH 5 - WEB DEVELOPMENT D AFTERNOON

// Berikut merupakan program Java Script untuk menghitung sebuah angka yang dipangkatkan dua
// --------------------------------------------------------------------------------- //

// Fungsi untuk menghitung pangkat dua dari sebuah angka
function hitungPangkatDua(angka) {
  return angka * angka;
}

// Contoh array angka
var angkaArray = [1, 2, 3, 4, 5];

// Melakukan perulangan menggunakan pernyataan for
for (var i = 0; i < angkaArray.length; i++) {
  var angka = angkaArray[i];
  var pangkatDua = hitungPangkatDua(angka);
  // Mencetak hasil dari perhitungani
  console.log(angka + " pangkat dua adalah " + pangkatDua);
}
