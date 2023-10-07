// BIMA KARUNIA FAJAR SYAHPUTRA
// INFINITE LEARNING BATCH 5 - WEB DEVELOPMENT D AFTERNOON

// Berikut merupakan program Java Script untuk menghitung luas lapangan sepak bola
// --------------------------------------------------------------------------------- //

// input nilai panjang & lebar Lapangan Sepakbola untuk menghitung Luas
var panjangLapangan = 105; // dalam meter
var lebarLapangan = 68; // dalam meter

// Rumus untuk menghitung luas lapangan sepakbola
function hitungLuasLapanganSepakbola(panjang, lebar) {
  var luas = panjang * lebar;
  return luas;
}

var luasLapangan = hitungLuasLapanganSepakbola(panjangLapangan, lebarLapangan);
// Mencetak hasil dari perhitungan rumus diatas
console.log("Luas Lapangan Sepakbola: " + luasLapangan + " meter persegi");
