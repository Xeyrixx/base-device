/* 
NOTE : JGN HPS DIBAWAH INI!!
RECODE : RAHMXBOT X RAHMAN GNTENG:V
WHATSAPP : 081280020649
NOMOR BOT : 081586594062
NOTE : JGN HPS AUTHORNYA!!!

DONASI LAH BANG BIAR 
ADMINNYA UPDATE LAGI

Kalau Mau Donasi Silahkan Pilih Yah
Payment : Ovo/Gopay/Dana
Number Payment : Chat Owner Wa nya Di Atas
Ovo : 081280020649
Gopay : 081280020649
Dana : 087877155289
*/

const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIs = {
liaacans: 'https://zenzapis.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zenzapis.xyz': '9d30efca66',
}

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
global.thumb = fs.readFileSync('./image/thumbnail.jpg') // JGN DI UBAH!
global.name = 'Xeyrix (Owner)', // GNTI NAMA LU!
global.creator = '𝐗𝐞𝐲𝐫𝐢𝐱𝐁𝐨𝐭𝐳-𝐌𝐝' // GANTI NAMA BOT LU BANH!
global.owner = ['6281280020649'] // GNTI NOMOR LU!
global.premium = ['6281280020649', '6281280020649']
 // ADD PREM YG LU MAU BANH!!
global.quotes = 'Kesempatan Anda Untuk Sukses Di Setiap Kondisi Selalu Dapat Diukur Oleh Seberapa Besar Kepercayaan Anda Pada Diri Sendiri' // Ganti Quotes, Tapi Trsrh Klian
global.pulsa = ['081280020649'] // UBAH NOMOR YG AKTIF!
global.botname = 'Created 𝐗𝐞𝐲𝐫𝐢𝐱𝐁𝐨𝐭𝐳-𝐌𝐝' // GNTI NAMA BOT LU!
global.packname = 'Nih Stikel Umtukmu' // TRSERAH MO GANTI AP!
global.author = '𝐗𝐞𝐲𝐫𝐢𝐱𝐁𝐨𝐭𝐳-𝐌𝐝' // GNTI NMA LU!
global.fake = '𝐗𝐞𝐲𝐫𝐢𝐱𝐁𝐨𝐭𝐳-𝐌𝐝 BOT VERIFIED' // GNTI NMA BOT LU BANH!
global.prefa = ['','!','.','/','#','$']
global.sp = '⭔' // JGN DI UBAH²! NTR EROR
global.mess = {
success: '*[SUCCESS]* SUKSES PERMINTAAN ANDA TERKIRIM!',
admin: 'Fitur Ini Khusus Untuk Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
prem: 'Fitur Ini Khusus Untuk Premium',
owner: 'Fitur Ini Khusus Untuk Owner Bot',
group: 'Fitur Ini Digunakan Hanya Untuk Group!',
private: 'Fitur Ini Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Ini Khusus Pengguna Nomor Bot',
user: 'Maaf Anda Belum Terdaftar Ke Database\n\nSilahkan Daftar Terlebih Dahulu\nKetik .register',
wait: '*[WAIT]* SEDANG DIPROSES, HARAP TUNGGU SEBENTAR!',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Unlimited",
free: 10
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
