var Human1 = [
				//Tabel1
				{
					'nama': 'Tono',
					'hari': 'Senin',
					'kehadiran': 'Masuk',
					'alasan': ''
				},
				
				//Tabel2
				{
					'nama': 'Tono',
					'hari': 'Rabu',
					'kehadiran': 'Masuk',
					'alasan': ''
				},
				
				//Tabel3
				{
					'nama': 'Tono',
					'hari': 'Jumat',
					'kehadiran': 'Absen',
					'alasan': 'Dinas Luar'
				}
			]

var hariKerja = 0;
var masukKerja= 0;
var absenKerja= 0;

var Tampil = function(Human1) {
	for (i = 0; i < Human1.length; i ++) {
		console.log('Nama: ' + Human1[i].nama);
		console.log('Hari: ' + Human1[i].hari);
		console.log('Kehadiran: ' + Human1[i].kehadiran);
		
		if (Human1[i].alasan === '') {
			console.log('\n');
			hariKerja ++;
			masukKerja ++;
		}
        else if (Human1[i].alasan != '') {
			console.log('Alasan: ' + Human1[i].alasan);
			hariKerja ++;
			absenKerja ++;
        }
	}
}


console.log(Tampil(Human1));
console.log('Total hari kerja minggu ini: ' + hariKerja + ' hari');
console.log('Total masuk: ' + masukKerja + ' hari');
console.log('Total tidak masuk: ' + absenKerja + ' hari');