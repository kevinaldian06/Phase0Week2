//Tugas 2 Mengenal penggunaan Conditional (If-Else) dalam JavaScript



var nama = '';
var peran = '';

if (nama === '' && peran === '' ){
  console.log("Maaf nama dan peran tidak boleh kosong");
}
else
  if (nama !== '' && peran == 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
  }

else
  if (nama !== '' && peran == 'Tabib' ){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
}
else 
  if (nama !== '' && peran == 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}


else {
  console.log("Mohon maaf, pilihan belum tersedia.")
}