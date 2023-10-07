// BIMA KARUNIA FAJAR SYAHPUTRA
// INFINITE LEARNING BATCH 5 - WEB DEVELOPMENT D AFTERNOON

// Berikut merupakan program Java Script untuk menentukan ukuran BMI manusia
// Dengan memasukkan nilai TB dan BB mereka hingga menghasilkan output berupa
// hasil dari perhitungan antar TB dan BB.
// --------------------------------------------------------------------------------- //

// Contoh berat badan (dalam kg) dan tinggi badan (dalam cm)
var tinggiBadan = 174;
var beratBadan = 84;

// Fungsi untuk menghitung BMI
function hitungBMI(beratBadan, tinggiBadan) {
  // Mengonversi tinggi badan dari cm ke meter
  var tinggiBadanMeter = tinggiBadan / 100;

  // Menghitung BMI menggunakan rumus BMI = beratBadan / (tinggiBadanMeter * tinggiBadanMeter)
  var bmi = beratBadan / (tinggiBadanMeter * tinggiBadanMeter);
  return bmi;
}

// Fungsi untuk menentukan suatu kondisi kategori
function tentukanKategoriBMI(bmi) {
  var kategori = "";

  switch (true) {
    case bmi < 18.5:
      kategori = "Kurus";
      break;
    case bmi >= 18.5 && bmi < 25:
      kategori = "Normal";
      break;
    case bmi >= 25 && bmi < 30:
      kategori = "Gemuk";
      break;
    default:
      kategori = "Obesitas";
      break;
  }
  return kategori;
}

// Memanggil fungsi untuk menghitung BMI
var bmi = hitungBMI(beratBadan, tinggiBadan);

// Memanggil fungsi menentukan Kategori BMI
var kategori = tentukanKategoriBMI(bmi);

// Mencetak hasil dari perhitungan BMI serta penentuan kategori
console.log("BMI Anda: " + bmi.toFixed(2));
console.log("Kategori BMI Anda: " + kategori);
