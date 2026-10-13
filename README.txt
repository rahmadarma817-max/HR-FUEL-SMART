HR FUEL-SMART — Demo yang sudah diaudit logikanya
===================================================
File:
- index.html: portal publik, stok simulasi, riwayat terverifikasi, form pengaduan.
- staff.html: portal petugas untuk menambah catatan penerimaan.
- admin.html: portal admin untuk memeriksa, menolak, memverifikasi, dan mengatur publikasi.
- common.js: data demo dan penyimpanan browser.
- style.css: tampilan.

Perbaikan logika:
- Data simulasi otomatis dimuat saat pertama kali dibuka.
- Data baru diberi status Perlu verifikasi dan tidak langsung tampil sebagai data resmi.
- Verifikasi admin mengubah status dan mempublikasikan catatan.
- Penolakan tidak dipublikasikan.
- Catatan stok demo baru diperbarui ketika catatan penerimaan disetujui.
- Validasi angka tidak menerima volume negatif.
- Ada tombol Reset data demo untuk mengembalikan data contoh.
- Browser tab pada origin sama dapat menerima event perubahan penyimpanan; jika tidak diperbarui, muat ulang halaman.

Cara uji:
1. Deploy semua file ke direktori yang sama di satu domain HTTPS, atau uji dari server lokal.
2. Buka index.html dan periksa data awal.
3. Buka staff.html, isi dua kolom login demo dengan teks apa pun, masuk, lalu buat penerimaan (contoh rencana 500, aktual 450).
4. Buka admin.html pada origin yang sama, masuk, verifikasi atau tolak catatan.
5. Muat ulang index.html. Hanya data terverifikasi dan dipublikasikan yang muncul pada riwayat publik.
6. Kirim pengaduan di index.html, lalu buka admin.html dan muat ulang untuk melihatnya.
7. Klik Reset data demo jika ingin kembali ke contoh awal.

PENTING:
- Data memakai localStorage; hanya dibagi pada browser/profil dan origin yang sama. Ini bukan database server dan tidak menyinkronkan perangkat yang berbeda.
- Login hanya simulasi frontend. Tidak ada autentikasi aman atau pembatasan akses server.
- Volume stok contoh ditambah dengan volume penerimaan aktual saat admin menyetujui catatan. Ini hanya model demo sederhana; sistem nyata harus memperhitungkan stok awal, penjualan/keluar, koreksi, dan mencegah penerimaan yang sama dihitung dua kali.
- Tidak ada backend, unggah bukti foto, sensor, GPS, audit log server, atau integrasi pemasok.
- Jangan gunakan untuk operasi nyata.
