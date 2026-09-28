# Portfolio Seni Intermedia — Hanan Izzu

Template website portofolio static yang siap diunggah ke GitHub Pages.

## Struktur

```text
portfolio-github/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── perkara-pulang.jpg
    ├── sangu.jpg
    ├── terlihat-tak-terlihat.jpg
    └── karya-04.jpg
```

## Cara mengganti karya

Buka `script.js`. Semua isi utama website ada di bagian `const portfolio`.

Untuk menambah karya, copy satu blok karya di dalam `works` lalu ubah:
- `title` = judul karya
- `year` = tahun
- `medium` = medium
- `image` = nama file foto di folder `images`
- `description` = deskripsi karya
- `details` = informasi tambahan

Contoh:

```js
{
  title: 'Nama Karya',
  year: '2026',
  medium: 'Instalasi',
  image: 'images/nama-foto.jpg',
  description: 'Deskripsi singkat karya.',
  details: {
    'Medium': 'Instalasi',
    'Tahun': '2026',
    'Ukuran': 'Variabel'
  }
}
```

## Cara mengganti foto

Masukkan foto ke folder `images/`, lalu samakan nama file dengan bagian `image` di `script.js`.

Disarankan foto JPG/WebP dengan ukuran sekitar 1600–2400 px pada sisi terpanjang agar tetap tajam tetapi tidak terlalu berat.

## Cara mengganti nama, tentang, dan kontak

Semua ada di bagian awal `const portfolio` pada `script.js`.

## Menjalankan di komputer

Cara paling sederhana: klik dua kali `index.html` untuk membukanya di browser.

## Upload ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `portfolio`.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, dan folder `images`.
3. Buka **Settings → Pages**.
4. Pada bagian deployment, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`.
6. Simpan.
7. Tunggu proses deployment selesai. GitHub akan memberikan alamat website.

Setelah itu, setiap kali kamu mengubah file dan melakukan commit/push, website akan ikut diperbarui.
