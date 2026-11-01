# Inventaris Laboratorium 

Aplikasi web yang digunakan untuk mengelola inventaris alat-alat laboratorium fisika, yang dibuat untuk memenuhi syarat mengikuti Ujian Tengah Semester Pengembangan Aplikasi Web.

## Identitas
- **Nama:** ADELIA EVA ANANTA
- **NIM:** 124140123
- **Kelas:** RB
- **Tema:** Inventaris Laboratorium

## URL Deployment
https://adelia124140123.github.io/uts-paw/

## Daftar Fitur
- Beranda yang berisi ringkasan jumlah alat dan kategorinya
- Daftar koleksi alat yang berbentuk tabel
- Pencarian alat yang berdasarkan nama alat dan filter kategori
- Halaman detail alat yang berisi kategori, kode alat, jumlah, dan kondisi
- Menghapus alat dengan adanya konfirmasi dari server
- Menambahkan alat baru dengan memvalidasi judul, jika kosong maka akan ditampilkan pesan error
- Statistik jumlah alat yang berisi alat per kategori
- Halaman tentang yang berisi biodata pembuat web
- Halaman 404 yang ditampilkan untuk alamat yang tidak dikenal
- Data awal dari `koleksi.json`, kemudian perubahan data disimpan di LocalStorage

## Tangkapan Layar

![Beranda](screenshots/beranda.png)
![Koleksi](screenshots/koleksi.png)
![Detail](screenshots/detail.png)

## Cara Menjalankan

```bash
npm install
npm run dev
```

Menjalankan pengujian

```bash
npm test
```