# Portofolio Idham Ahmad Nashir (Astro) — Redesign "Dev Workspace"

Website portofolio dengan gaya code editor: panel kaca (glass) gelap + hijau neon, bahasa Inggris dengan tombol ganti ke Bahasa Indonesia, animasi masuk, dan kursor khusus `{ • }`.

## Halaman

| File | URL |
| --- | --- |
| `src/pages/index.astro` | `/` (Home) |
| `src/pages/web-dev.astro` | `/web-dev/` (filter per jenis website) |
| `src/pages/seo.astro` | `/seo/` |
| `src/pages/marketing-ads.astro` | `/marketing-ads/` |
| `src/pages/graphic-design.astro` | `/graphic-design/` |
| `src/pages/certification.astro` | `/certification/` |
| `src/pages/404.astro` | halaman tidak ditemukan |

## Struktur folder

```
public/
  favicon.ico        ← ikon website (logo N daun + sirkuit, transparan)
  images/            ← SEMUA gambar website ada di sini
src/
  data/
    home.ts          ← teks Home (EN + ID)
    pages.ts         ← teks halaman lain (EN + ID)
    site.ts          ← link, kontak, daftar gambar galeri & proyek
  components/        ← L (teks 2 bahasa), Cursor, Icon, PageHead, WorkTabs, DevGallery, CtaBand
  layouts/DevLayout.astro   ← menu, tombol EN/ID, footer status bar
  styles/dev.css            ← warna, font, panel kaca
```

## Cara update konten

- **Teks** ada di `src/data/home.ts` dan `src/data/pages.ts`. Setiap teks punya dua versi: `en` (English) dan `id` (Indonesia).
- **Gambar baru**: taruh di `public/images/`, lalu tambahkan nama filenya di `src/data/site.ts` (misalnya `seoGallery`, `designGallery`, `certificateGallery`, atau `webProjects`).
- **Warna**: `src/styles/dev.css` (`--green: #9dff20`).

## Menjalankan di komputer

Butuh **Node.js 22.23 atau lebih baru**.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil ada di folder dist/
```

## Update ke GitHub (repo yang sudah ada)

1. Buka folder repo lama Anda (misalnya `D:\nashir-portfolio`).
2. Hapus semua isi folder **kecuali folder `.git`** (folder ini tersembunyi; jangan dihapus).
3. Ekstrak isi ZIP ini ke folder tersebut, sehingga `package.json`, `src`, dan `public` langsung berada di dalamnya.
4. Jalankan di Command Prompt:

```bat
D:
cd \nashir-portfolio
git add -A
git commit -m "Redesign: dev workspace style, EN/ID, new favicon"
git push
```

Vercel akan otomatis build ulang setelah push. Pastikan Node.js Version di Vercel (Settings → General) memakai **22.x** atau lebih baru.
