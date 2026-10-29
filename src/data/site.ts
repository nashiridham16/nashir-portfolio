// Data umum website (link, kontak, daftar gambar portofolio).
// Teks halaman (2 bahasa) ada di src/data/home.ts dan src/data/pages.ts.
// Semua gambar disimpan di folder: public/images/

const img = (name: string) => `/images/${name}`;

export const site = {
  name: 'Idham Ahmad Nashir',
  whatsapp: 'https://wa.me/6289697376745',
  email: 'ahmadnashir135@gmail.com',
  cv: 'https://drive.google.com/file/d/1IADwNXF9z9jPEQoR1ZzPQ_XSpmJQosmo/view?usp=sharing',
  twitter: 'https://twitter.com/nashir_idham_16',
};

export const contacts = [
  { label: 'nashiridham16', href: 'https://github.com/nashiridham16', icon: 'github' },
  { label: 'Nashir Ithu Idham', href: 'https://id-id.facebook.com/ahmad.zidan.3914', icon: 'facebook' },
  { label: 'ahmadnashir135@gmail.com', href: 'mailto:ahmadnashir135@gmail.com', icon: 'mail' },
  { label: 'Idham Ahmad Nashir', href: 'https://id.linkedin.com/in/idham-ahmad-nashir-6bb417179', icon: 'linkedin' },
  { label: '089697376745', href: 'https://wa.me/6289697376745', icon: 'whatsapp' },
  { label: '08998725404', href: 'https://t.me/iddham', icon: 'telegram' },
  { label: 'nashir_idham_16', href: 'https://www.instagram.com/nashir_idham_16/', icon: 'instagram' },
  { label: 'nashircoy135', href: 'http://line.me/ti/p/~nashircoy135', icon: 'line' },
];

// ---------- Halaman Web Dev ----------
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// type = kategori untuk filter: profile | landing | store | other
export const webProjects = [
  ['Rajawali Trawel', 'profile'],
  ['Gerai Layang', 'profile'],
  ['CV. Srengenge Engginering', 'profile'],
  ['Desa Jatikerto', 'village'],
  ['Growlist', 'landing'],
  ['Javindo Powder Drink', 'store'],
  ['DF3 Trans Malang', 'landing'],
  ['Ukor UINSA', 'org'],
  ['Alpine Rope', 'landing'],
  ['Merteyasa Bali', 'profile'],
  ['Maxxi Roof', 'landing'],
  ['Kurnia Desain', 'profile'],
  ['Cazmilk', 'landing'],
  ['CV. Sanis Panca', 'profile'],
  ['Kayla Poenya', 'store'],
  ['Pecel Mbah Sri', 'landing'],
  ['Dylan Jaya Wisata', 'profile'],
  ['Caz Indonesia', 'profile'],
  ['Bunga Wisata', 'profile'],
  ['Vokasi UB', 'faculty'],
  ['Cahaya Florist Jombang', 'landing'],
  ['CPNSOnline', 'lms'],
  ['Karzana Trans', 'landing'],
  ['BPJN Merauke', 'gov'],
  ['Mental Health', 'blog'],
  ['Caerter Pickup Malang', 'landing'],
  ['Assalam Residence', 'landing'],
  ["D'Samara Residence", 'landing'],
  ['Brancocoa', 'profile'],
  ['Doskterku Sahabatku', 'profile'],
].map(([name, kind]) => ({ name, kind, image: img(`webdev-${slug(name)}.png`) }));

// ---------- Galeri ----------
export const seoGallery = [
  { src: 'seo-p1-tedmond.jpg', caption: 'Tedmond' },
  { src: 'seo-p2-jasatukang.jpg', caption: 'Jasa Tukang' },
  { src: 'seo-p3-samidi.jpg', caption: 'Samidi' },
  { src: 'seo-p4-galvalum.jpg', caption: 'Galvalum' },
  { src: 'seo-p5-ledeng.jpg', caption: 'Ledeng' },
  { src: 'seo-p6-tandon.jpg', caption: 'Tandon' },
  { src: 'seo-p7-atap.jpg', caption: 'Atap' },
  { src: 'seo-p8-merteyasa.jpg', caption: 'Merteyasa' },
].map((g) => ({ ...g, src: img(g.src) }));

export const adsGallery = [
  'ads-01.jpg', 'ads-02.jpg', 'ads-03.png', 'ads-04.jpg',
  'ads-05.jpg', 'ads-06.jpg', 'ads-07.jpg', 'ads-08.jpg',
].map((s) => ({ src: img(s), caption: '' }));

export const adsReportLink = 'https://drive.google.com/drive/folders/1xQallLvTu6YPXLRdZtrq4JHwAvNIewjz?usp=sharing';

export const designGallery = [
  'design-01.jpg', 'design-02.jpg', 'design-03.png', 'design-04.png', 'design-05.jpg', 'design-06.jpg',
  'design-07.jpg', 'design-08.jpg', 'design-09.jpg', 'design-10.jpg', 'design-11.jpg', 'design-12.png',
  'design-13.jpg', 'design-14.jpg', 'design-15.jpg', 'design-16.jpg', 'design-17.jpg', 'design-18.jpg',
].map((s) => ({ src: img(s), caption: '' }));

export const certificateGallery = [
  'cert-01-fundamentals-of-digital-marketing.jpg',
  'cert-02-landing-page.jpeg',
  'cert-03-coursera-ajwh2kxvbeqv.jpg',
  'cert-04-coursera-czqn3z4g48pv.jpg',
  'cert-05-coursera-yuvh7ek43dgx.jpg',
  'cert-06-certificate-2022-a.jpg',
  'cert-07-certificate-2022-b.jpg',
  'cert-08-dmmc22.jpg',
  'cert-09-meta-data-privasi-dan-iklan.jpg',
  'cert-10-google-ads-search.jpg',
  'cert-11-bnsp.jpg',
  'cert-12-teknologi-informasi.jpg',
  'cert-13-toefl.jpg',
  'cert-14-coursera-vjaq4v8a5b3r.jpg',
  'cert-15-html.jpg',
  'cert-16-css.jpg',
  'cert-17-javascript.jpg',
  'cert-18-digital-advertising.png',
  'cert-19-dicoding-pemrograman-web.jpg',
  'cert-20-ibm-data-science.jpg',
  'cert-21-cognitive-class-python.jpg',
].map((s) => ({ src: img(s), caption: '' }));
