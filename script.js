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


// 1. kita memerlukan array karena array itu memiliki penyimpaanan yg efisien, mungkin kita ingin menyimpan banyak data dengan tipe yg sma dlm stu wadah jadi array ini sgt memungkinkan. Array juga disusun scr berurutan dariindex 0, jadi mempermudah dan mempercepat proses
// 2. dgn cara mengelompokkan data, tanpa array kta hrus membuat variabel secacra terpisah (contoh let nilai1=90 ; let nilai2=98;). Tapi jika kita menggunakan arrray bisa langsung di dalam satu variabel (contoh let nilai=[70,80,90];)
// 3. dampaknya jumlah elemen dlm array akan bertmbh, jadi lenght dri array nya juga akan menambah, elemen baru juga bakal di tempatkan di index terakhir
// 4. dgn cara menggunakan index dari elemen tersebut, spt metode filter,pop, push dll sesuai data
// 5. MENGAKSES elemendi luar batasan array, lupa menambah tanda kurung
