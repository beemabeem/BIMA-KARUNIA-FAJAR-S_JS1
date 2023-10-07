// BIMA KARUNIA FAJAR SYAHPUTRA
// INFINITE LEARNING BATCH 5
// WEB DEVELOPMENT D - AFTERNOON

// Berikut merupakan program Java Script untuk menentukan ukuran BMI manusia
// Dengan memasukkan nilai TB dan BB mereka hingga menghasilkan output berupa
// hasil dari perhitungan antar TB dan BB.
// --------------------------------------------------------------------------------- //


// Pengguna meng-inputkan TB (dalam cm) dan BB (dalam kg)
var tinggiBadan = 174;
var beratBadan = 58;

// Rumus untuk menghitung serta menjalankan program
function hitungBeratBadan(tinggiBadan, beratBadan) {
  var beratBadanIdeal = tinggiBadan - 110 - ((tinggiBadan - 110) * 10) / 100;
  var selisihBerat = beratBadan - beratBadanIdeal;

  if (selisihBerat === 0) {
    return "Berat badan Anda ideal.";
  } else if (selisihBerat > 0) {
    return (
      "Anda memiliki kelebihan berat badan sebesar " +
      selisihBerat.toFixed(2) +
      " kg."
    );
  } else {
    return (
      "Anda memiliki kekurangan berat badan sebesar " +
      Math.abs(selisihBerat).toFixed(2) +
      " kg."
    );
  }
}

// Memanggil sebuah fungsi dari hasil perhitungan
var hasil = hitungBeratBadan(tinggiBadan, beratBadan);

// Mencetak hasil dari perhitungan diatas
console.log(hasil);
