let nilaiSiswa = [80, 75, 90, 60, 85, 70];

//menampilkan nilai siswa
console.log ("nilai siswa:", nilaiSiswa) ;

// reduce (hitung rata-rata)
let  total= nilaiSiswa.reduce((jumlah, nilai) => jumlah + nilai, 0)
let rataRata= total / nilaiSiswa.length;
console.log ("rata-rata:", rataRata);

// filter (nilai >= 75)
let nilaiTinggi= nilaiSiswa.filter(nilai => nilai >= 75);
console.log ("nilai :", nilaiTinggi);

// push (tambah nilai 95)
nilaiSiswa.push(95);
console.log ("setelah tmbbh nilai:", nilaiSiswa);

// pop (hapus nilai terakhir)
let hapusTerakhir= nilaiSiswa.pop();
console.log ("setelah hps nilai:",hapusTerakhir);
console.log (nilaiSiswa);

// splice (salin array)
let salinArray= nilaiSiswa.splice (1, 4);
console.log (hapusTerakhir);
console.log (nilaiSiswa);

// menampilkan semua hasil di console
console.log("===hasil akhir===");
console.log ("nilai siswa:", nilaiSiswa) ;
console.log ("rata-rata:", rataRata);
console.log ("nilai :", nilaiTinggi);
console.log ("setelah tmbbh nilai:", nilaiSiswa);
console.log ("setelah hps nilai:",hapusTerakhir);
console.log (nilaiSiswa);
console.log (hapusTerakhir);
console.log (nilaiSiswa);
