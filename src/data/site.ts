// Semua konten website ada di file ini.
// Untuk mengubah teks, pengalaman, atau gambar, cukup edit data di bawah.
// Semua gambar disimpan di folder: public/images/

const img = (name: string) => `/images/${name}`;

export const site = {
  name: 'Idham Ahmad Nashir',
  title: 'Idham Ahmad Nashir | Portofolio',
  description:
    'Portofolio Idham Ahmad Nashir — Digital Marketing Specialist, Front End Web Developer, Digital Advertiser, SEO Specialist, UI Designer, dan Graphic Designer.',
  tagline:
    'Digital Marketing Specialist | Front End Web Developer | Digital Advertiser | SEO Specialist | UI Desainer | Graphic Designer.',
  whatsapp: 'https://wa.me/6289697376745',
  cv: '/files/Idham-Ahmad-Nashir-CV.pdf',
  twitter: 'https://twitter.com/nashir_idham_16',
};

export const homeNav = [
  { label: 'Home', href: '/' },
  { label: 'Education', href: '/#edu' },
  { label: 'Portofolio', href: '/#porto' },
  { label: 'Experience', href: '/#exp' },
  { label: 'Certification', href: '/certification/' },
  { label: 'Contact', href: '/#contact' },
];

export const pageNav = [
  { label: 'Home', href: '/' },
  { label: 'Web Develop', href: '/web-dev/' },
  { label: 'Marketing Ads', href: '/marketing-ads/' },
  { label: 'Graphic Design', href: '/graphic-design/' },
  { label: 'SEO', href: '/seo/' },
  { label: 'Certification', href: '/certification/' },
];

export const profileFacts = [
  { label: 'Birth', value: '16 Oktober 2001', icon: 'calendar' },
  { label: 'Address', value: 'Kepanjen, Kab. Malang', icon: 'pin' },
  { label: 'Language', value: 'Indonesian | English', icon: 'globe' },
];

export const profileText = [
  'Halo, Saya Idham, Saya adalah Digital Marketing Specialist, Front End Web Developer, Digital Advertiser, SEO Specialist, UI Desainer, serta Graphic Designer. Saya merupakan mahasiswa lulusan Fakultas Ilmu Komputer Universitas Brawijaya. Saya belajar pada jurusan Sistem Informasi. Saya lulus dengan <strong>IPK 3,73</strong>.',
  'Untuk mengeksplor dan mengetahui lebih jauh mengenai skill-skill yang saya miliki, saya terbiasa mengikuti bootcamp, course, maupun sertifikasi/tes. Pada saat ini saya telah memiliki beberapa sertifikat keahlian yang saya dapatkan dari mengikuti bootcamp, course, maupun sertifikasi/tes.',
];

export const education = [
  { school: 'Universitas Brawijaya', major: 'S1 Extension - Sistem Informasi', period: 'Aug 2023 - Now', logo: img('logo-universitas-brawijaya.png') },
  { school: 'Universitas Brawijaya', major: 'D3 Teknologi Informasi - Bisnis Digital & E-commerce', period: 'Jul 2020 - Jul 2023', logo: img('logo-universitas-brawijaya.png') },
  { school: 'SMAN 1 Kepanjen', major: '', period: 'Jul 2017 - Jun 2020', logo: img('logo-sman-1-kepanjen.png') },
  { school: 'SMPN 3 Kepanjen', major: '', period: 'Jun 2014 - Jun 2017', logo: img('logo-smpn-3-kepanjen.png') },
  { school: 'SDN 2 Kepanjen', major: '', period: 'Jun 2009 - Jun 2014', logo: img('logo-sdn-2-kepanjen.png') },
];

export const quote = {
  text: 'Bila kamu banyak masalah, merasa kalah, dan jalan keluar tiada celah. Maka bersujudlah. Saat itulah Tuhan langsung membalas sujudmu dengan berkata : "Janganlah menyerah, Kembali cobalah, Kali ini aku bersamamu di sebelah".',
  author: 'Idham Ahmad N.',
};

export const experience = [
  {
    company: 'PT Tedmonindo Pratama',
    role: 'SEO Specialist',
    period: 'Des 2024 - Sekarang',
    logo: img('logo-tedmond.png'),
    points: [
      'Bertanggung jawab untuk menangani, memelihara, dan mengoptimalkan lebih dari 25 situs web untuk meningkatkan trafik setiap bulan. Serta situs web lain yang bermitra dengan Tedmond Groups.',
      'Bertanggung jawab atas dan mengkoordinasikan 6 penulis naskah iklan.',
      'Menjadwalkan, mengaudit, dan menerbitkan lebih dari 750 konten artikel per bulan.',
      'Membangun strategi SEO baik on-page maupun off-page.',
      'Memantau performa DA, PA, serta rangking website pada mesin pencari',
      'Create, maintain, and conduct A/B testing on social media marketing (meta ads).',
    ],
  },
  {
    company: 'PT Aquila Keatif Nusantara',
    role: 'SEO Specialist',
    period: 'Apr 2024 - Jun 2024',
    logo: img('logo-aquila.webp'),
    points: [
      'Berkoordinasi dengan tim dan melakukan riset kata kunci',
      'Mengkoneksikan website dengan Google Search Console dan Google Analytic',
      'Mengoptimalkan kecepatan loading pada tiap halaman',
      'Pembuatan artikel berdasarkan kata kunci target dengan menerapkan kaidah SEO dalam penulisannya',
      'Memantau performa DA, PA, serta rangking website pada mesin pencari',
      'Request Indexing pada Google Search Console',
      'Terus mengoptimalkan SEO dengan membuat artikel yang relevan',
      'Memantau dan membuat laporan performa SEO setiap minggunya',
    ],
  },
  {
    company: 'Organoo Studio',
    role: 'Chief Marketing Officer',
    period: 'Jun 2023 - Now',
    logo: img('logo-organoo-studio.png'),
    points: [
      'Merencanakan konten feeds Instagram',
      'Memaintenance website sesuai kebutuhan campaign',
      'Melakukan promosi di seluruh platform digital',
      'Berkoordinasi dengan tim serta menjalankan campaign yang berjalan',
      'Melakukan meeting bersama client',
      'Riset harga, trend market, serta kompetitor',
      'Melakukan optimasi serta evaluasi setiap bulan',
    ],
  },
  {
    company: 'Designskuy',
    role: 'CEO and Founder',
    period: 'Sep 2020 - Now',
    logo: img('logo-designskuy.png'),
    points: [
      'Start-Up yang bergerak di bidang jasa pembuatan website',
      'Merencanakan dan membuat konten feeds Instagram',
      'Membuat dan maintenance website sesuai keinginan client',
      'Melakukan promosi menggunakan Google Ads atau Meta Ads',
      'Melakukan meeting bersama client',
      'Memanajemen keuangan',
      'Melakukan optimasi serta evaluasi setiap bulan',
    ],
  },
  {
    company: 'PT. Solusi Digital Branding',
    role: 'Social Media Advertising',
    period: 'Aug 2022 - Jan 2023',
    logo: img('logo-solusi-digital-branding.png'),
    points: [
      'Membantu pada brand Casa Kreatif - jasa press release',
      'Membuat fanspage dan menautkan dengan instagram',
      'Membuat akun iklan',
      'Memasangkan kode pixel ke website dan melakukan verifikasi domain',
      'Membuat ads creative dan materi iklan',
      'Setting dan menjalankan iklan serta melakukan testing A/B untuk menemukan winning campaign',
      'Membuat laporan serta evaluasi',
    ],
  },
  {
    company: 'PT. Magau Jaya Digital',
    role: 'Social Media Advertiser',
    period: 'Aug 2022',
    logo: img('logo-cpns-online.png'),
    points: [
      'Membantu pada brand CPNS Online.id - Bimbel CPNS',
      'Membuat fanspage dan menautkan dengan instagram',
      'Membuat akun iklan',
      'Memasangkan kode pixel ke website dan melakukan verifikasi domain',
      'Membuat ads creative dan materi iklan',
      'Setting dan menjalankan iklan serta melakukan testing A/B untuk menemukan winning campaign',
      'Membuat laporan serta evaluasi',
    ],
  },
  {
    company: 'PT. Inspirasi Mandiri Nusantara',
    role: 'WordPress Developer',
    period: 'Aug 2022 - Nov 2022',
    logo: img('logo-pintara.png'),
    points: [
      'Dengan brand PINTARA - Bimbel SNBT',
      'Meredesain dan mendevelop website',
      'Berkolaborasi dengan UI UX team',
      'Melengkapi halaman berdasarkan layanan yang disediakan perusahaan',
      'Membuat database dengan plugin membership',
      'Memasang fitur live chat pada web',
      'Membuat form dengan integrasi harga',
      'Mengupdate plugin serta melakukan cek terhadap kesehatan website',
    ],
  },
  {
    company: 'PSIK Vokasi UB',
    role: 'Web Developer',
    period: 'Feb 2022 - Jul 2022',
    logo: img('logo-vokasi-ub.png'),
    points: [
      'Melakukan maintenance, desain, dan optimasi.',
      'Mengganti tampilan website bila perlu',
      'Publikasi post berdasarkan kategori, melakukan cek SEO dan readability',
      'Mengupdate plugin serta melakukan cek terhadap kesehatan website',
      'Menautkan web dengan Google Analytic serta menganalisis traffic',
    ],
  },
];

export const stats = [
  { value: 3, label: 'Year of Experiences' },
  { value: 12, label: 'Certification Obtained' },
  { value: 126, label: 'Project Finished' },
  { value: 49, label: 'Happy Client' },
];

export const softSkills = [
  { label: 'Team Work', value: 90 },
  { label: 'Leadership', value: 90 },
  { label: 'Speaking', value: 90 },
];

export const hardSkills = [
  { label: 'HTML', image: img('skill-html.png') },
  { label: 'CSS', image: img('skill-css.png') },
  { label: 'JavaScript', image: img('skill-javascript.png') },
  { label: 'WordPress', image: img('skill-wordpress.png') },
  { label: 'Google Analytics', image: img('skill-analytic.png') },
  { label: 'Search Console', image: img('skill-search-console.png') },
  { label: 'Google Ads', image: img('skill-mentahan.png') },
  { label: 'Facebook Ads', image: img('skill-fb-ads.png') },
  { label: 'TikTok Ads', image: img('skill-tiktok-ads.png') },
  { label: 'Yoast SEO', image: img('skill-yoast.png') },
];

export const tools = [
  { label: 'VS Code', image: img('tool-vs-code.png') },
  { label: 'Elementor', image: img('tool-elementor.png') },
  { label: 'Adobe Photoshop', image: img('tool-photoshop.png') },
  { label: 'Adobe Illustrator', image: img('tool-illustrator.png') },
  { label: 'Adobe Premiere', image: img('tool-premier.png') },
  { label: 'Figma', image: img('tool-figma.png') },
];

// Card "My Awesome Portofolio" di halaman utama
export const portfolioCategories = [
  { title: 'Web Develop', subtitle: 'Project', href: '/web-dev/', icon: 'code' },
  { title: 'SEO Project', subtitle: 'Project', href: '/seo/', icon: 'chart' },
  { title: 'Marketing Ads', subtitle: 'Project', href: '/marketing-ads/', icon: 'megaphone' },
  { title: 'Graphic Design', subtitle: 'Project', href: '/graphic-design/', icon: 'pen' },
];

export const organizations = [
  { name: 'Rohis Utsfillah SMANEKA', role: 'Kepala Bidang', period: '2018 - 2020', logo: img('logo-rohis-smaneka.png') },
  { name: 'Karang Taruna RT', role: 'Ketua', period: '2020 - 2023', logo: img('logo-karang-taruna.png') },
  { name: 'UKM Seni Religi UB', role: 'Anggota', period: '2020 - 2022', logo: img('logo-ukm-seni-religi-ub.png') },
  { name: 'HIMBIS Vokasi UB', role: 'Staff', period: '2020 - 2022', logo: img('logo-himbis-vokasi-ub.png') },
  { name: 'KKN Vokasi Desa Jatikerto', role: 'Ketua Kelompok', period: 'Jan 2023', logo: img('logo-vokasi-ub.png') },
  { name: 'Gebyar Brawijaya Qurani 8', role: 'Staff', period: 'Oct 2021', logo: img('logo-gebyar-brawijaya-qurani.png') },
  { name: 'Gebyar Brawijaya Qurani 9', role: 'Staff', period: 'Oct 2022', logo: img('logo-gebyar-brawijaya-qurani.png') },
];

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

// ---------- Halaman portofolio ----------
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const webProjects = [
  ['Rajawali Trawel', 'Company Profile'],
  ['Gerai Layang', 'Company Profile'],
  ['CV. Srengenge Engginering', 'Company Profile'],
  ['Desa Jatikerto', 'Web Desa'],
  ['Growlist', 'Landingpage'],
  ['Javindo Powder Drink', 'Toko Online'],
  ['DF3 Trans Malang', 'Landingpage'],
  ['Ukor UINSA', 'Web UKM'],
  ['Alpine Rope', 'Landingpage'],
  ['Merteyasa Bali', 'Company Profile'],
  ['Maxxi Roof', 'Landingpage'],
  ['Kurnia Desain', 'Company Profile'],
  ['Cazmilk', 'Landingpage'],
  ['CV. Sanis Panca', 'Company Profile'],
  ['Kayla Poenya', 'Toko Online'],
  ['Pecel Mbah Sri', 'Landingpage'],
  ['Dylan Jaya Wisata', 'Company Profile'],
  ['Caz Indonesia', 'Company Profile'],
  ['Bunga Wisata', 'Company Profile'],
  ['Vokasi UB', 'Web Fakultas'],
  ['Cahaya Florist Jombang', 'Landingpage'],
  ['CPNSOnline', 'Web LMS'],
  ['Karzana Trans', 'Landingpage'],
  ['BPJN Merauke', 'Web Pemerintahan'],
  ['Mental Health', 'Blog & Test Web'],
  ['Caerter Pickup Malang', 'Landingpage'],
  ['Assalam Residence', 'Landingpage'],
  ["D'Samara Residence", 'Landingpage'],
  ['Brancocoa', 'Company Profile'],
  ['Doskterku Sahabatku', 'Company Profile'],
].map(([name, type]) => ({ name, type, image: img(`webdev-${slug(name)}.png`) }));

export const seoGallery = [
  'seo-p1-tedmond.jpg',
  'seo-p2-jasatukang.jpg',
  'seo-p3-samidi.jpg',
  'seo-p4-galvalum.jpg',
  'seo-p5-ledeng.jpg',
  'seo-p6-tandon.jpg',
  'seo-p7-atap.jpg',
  'seo-p8-merteyasa.jpg',
].map(img);

export const adsGallery = [
  'ads-01.jpg', 'ads-02.jpg', 'ads-03.png', 'ads-04.jpg',
  'ads-05.jpg', 'ads-06.jpg', 'ads-07.jpg', 'ads-08.jpg',
].map(img);

export const adsReportLink = 'https://drive.google.com/drive/folders/1xQallLvTu6YPXLRdZtrq4JHwAvNIewjz?usp=sharing';

export const designGallery = [
  'design-01.jpg', 'design-02.jpg', 'design-03.png', 'design-04.png', 'design-05.jpg', 'design-06.jpg',
  'design-07.jpg', 'design-08.jpg', 'design-09.jpg', 'design-10.jpg', 'design-11.jpg', 'design-12.png',
  'design-13.jpg', 'design-14.jpg', 'design-15.jpg', 'design-16.jpg', 'design-17.jpg', 'design-18.jpg',
].map(img);

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
].map(img);
