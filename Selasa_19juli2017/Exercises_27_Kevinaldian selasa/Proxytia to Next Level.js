//Tugas 2 Mengenal penggunaan Conditional (If-Else) dalam JavaScript



var nama = '';
var peran = '';
var tahunLahir = '';
var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir X Math.random();
var monsterHealth = tahunLahir X Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()))

if (nama === '') {
    peran === 'kacung'
}
}
else {
  console.log("Selamat datang di Dunia Proxytia, " + nama)
}

if(peran === '') {
    console.log("Pilih peranmu untuk memulai game");
  }

  else if (peran === 'Ksatria') {
    console.log("Halo Ksatria " + nama + 
                ", kamu dapat menyerang dengan senjatamu!" );
  }

  else if (peran === 'Tabib') {
    console.log("Halo Tabib " + nama + 
                ", kamu akan membantu temanmu yang terluka." );
  }

  else if (peran ==='Penyihir') {
    console.log("Halo Penyihir " + nama + 
                ", ciptakan keajaiban yang membantu kemenanganmu!" );
  }

  else {
    console.log("Mohon maaf, pilihan belum tersedia.")
  }

    for (var tahun = 1; tahun <= tahunLahir; tahun ++) {
      if (tahun % umur === 0) {
        console.log(peran + ' ' + nama + ' menyerang monster!');
        monsterHealth -= umur;
      }

      else if (tahun % kodeMonster === 0) {
        console.log('monster menyerang ' + peran + ' ' + nama + '!');
        playerHealth -= kodeMonster;
      }

      else if (tahun % umur === 0 && tahun % kodeMonster === 0) {
        console.log('Health keduanya bertambah')
        playerHealth += kodeMonster;
        monsterHealth += umur;
      }
    }

if (playerHealth > monsterHealth) {
      console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!')
    }
    else {
      console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...')
}