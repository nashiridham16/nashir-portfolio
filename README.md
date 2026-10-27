# Portofolio Idham Ahmad Nashir (Astro)

Konversi website portofolio dari WordPress (Pantheon) ke **Astro**, siap di-push ke GitHub dan di-hosting di **Vercel**.

## Struktur folder

```
nashir-portfolio/
├── public/
│   ├── images/        ← SEMUA gambar website ada di sini (125 file)
│   ├── animations/    ← animasi Lottie (.json) untuk Education, Portofolio, Contact
│   └── files/         ← CV (PDF)
├── src/
│   ├── data/site.ts   ← SEMUA teks & daftar konten (edit di sini)
│   ├── components/    ← Header, Footer, Gallery (lightbox), PageHero, Icon, Lottie
│   ├── layouts/       ← BaseLayout (head, SEO meta, tombol back-to-top)
│   ├── pages/         ← halaman website
│   │   ├── index.astro           → /
│   │   ├── web-dev.astro         → /web-dev/
│   │   ├── seo.astro             → /seo/
│   │   ├── marketing-ads.astro   → /marketing-ads/
│   │   ├── graphic-design.astro  → /graphic-design/
│   │   ├── certification.astro   → /certification/
│   │   └── 404.astro             → halaman tidak ditemukan
│   └── styles/global.css         ← warna, font, style dasar
└── astro.config.mjs
```

## Cara menjalankan di komputer

Butuh **Node.js 22.23 atau lebih baru** (Astro 7).

```bash
npm install
npm run dev       # buka http://localhost:4321
npm run build     # hasil build ada di folder dist/
npm run preview   # cek hasil build
```

## Cara update konten

- **Teks, pengalaman, pendidikan, organisasi, kontak, statistik** → edit `src/data/site.ts`.
- **Tambah gambar** → taruh file di `public/images/`, lalu tambahkan nama filenya ke daftar yang sesuai di `src/data/site.ts`
  (misalnya `seoGallery`, `adsGallery`, `designGallery`, `certificateGallery`, atau `webProjects`).
- **Warna & font** → `src/styles/global.css` (warna hijau utama: `--green: #9dff20`).

## Deploy ke Vercel

1. Push folder ini ke repository GitHub baru.
2. Di [vercel.com](https://vercel.com) → **Add New… → Project** → pilih repo tersebut.
3. Vercel otomatis mendeteksi **Astro**. Biarkan default (Build: `npm run build`, Output: `dist`).
4. Di **Settings → General → Node.js Version**, pilih **22.x** (atau lebih baru).
5. Klik **Deploy**.
6. Setelah dapat domain, ganti nilai `site` di `astro.config.mjs` dengan domain Anda (untuk canonical URL/SEO).

## Perubahan dari versi WordPress

- Card **SEO Project** diperbaiki (posisi ikon sejajar dengan card lain) dan mengarah ke `/seo/`.
- Bagian bar putih kosong yang rusak di bawah card SEO Project dihapus.
- Ikon login melayang di kiri bawah dihapus.
- Kalimat & link spam "Masterarbeit schreiben lassen" di bagian My Profile dihapus.
- Angka statistik memakai nilai yang benar (3+, 12+, 126+, 49+), bukan angka awal animasi (88+ dll.).
- Galeri memakai lightbox sendiri (klik untuk memperbesar, bisa geser di HP).
- Responsive untuk desktop, tablet, dan mobile (menu hamburger di layar kecil).
