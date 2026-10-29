// Konten halaman Web Dev, SEO, Marketing Ads, Graphic Design, Certification (2 bahasa).
import type { T } from './home';

const img = (name: string) => `/images/${name}`;

// Tab di atas konten halaman portofolio
export const workTabs = [
  { href: '/web-dev/', file: 'web-dev', label: { en: 'Web Development', id: 'Web Development' } },
  { href: '/seo/', file: 'seo', label: { en: 'SEO', id: 'SEO' } },
  { href: '/marketing-ads/', file: 'marketing-ads', label: { en: 'Marketing Ads', id: 'Marketing Ads' } },
  { href: '/graphic-design/', file: 'graphic-design', label: { en: 'Graphic Design', id: 'Graphic Design' } },
];

export type PageHead = {
  path: string;
  file: string;
  metaTitle: string;
  metaDescription: string;
  title: T;
  lead: T;
  highlights: { value: string | T; label: T }[];
  image: string;
};

export const webDevPage: PageHead = {
  path: '~/work/web-dev',
  file: 'web-dev.svg',
  metaTitle: 'Web Development Projects | Idham Ahmad Nashir',
  metaDescription: 'Company profiles, landing pages, online stores, and platforms built by Idham Ahmad Nashir for real businesses across Indonesia.',
  title: { en: 'Websites I have built', id: 'Website yang pernah saya buat' },
  lead: {
    en: 'Company profiles, landing pages, online stores, and full platforms for real businesses, from Bali to Merauke. Filter by type to find work like yours.',
    id: 'Company profile, landing page, toko online, sampai platform lengkap untuk bisnis nyata, dari Bali sampai Merauke. Pilih kategori untuk melihat proyek yang mirip dengan kebutuhan Anda.',
  },
  highlights: [
    { value: '30', label: { en: 'websites in this showcase', id: 'website di halaman ini' } },
    { value: '256+', label: { en: 'projects shipped', id: 'proyek selesai' } },
    { value: '79+', label: { en: 'happy clients', id: 'klien puas' } },
  ],
  image: img('illus-web-dev.svg'),
};

export const webFilters = [
  { key: 'all', label: { en: 'All', id: 'Semua' } },
  { key: 'profile', label: { en: 'Company profile', id: 'Company profile' } },
  { key: 'landing', label: { en: 'Landing page', id: 'Landing page' } },
  { key: 'store', label: { en: 'Online store', id: 'Toko online' } },
  { key: 'other', label: { en: 'Platforms & others', id: 'Platform & lainnya' } },
];

// Label tiap jenis website
export const webKinds: Record<string, T> = {
  profile: { en: 'Company profile', id: 'Company profile' },
  landing: { en: 'Landing page', id: 'Landing page' },
  store: { en: 'Online store', id: 'Toko online' },
  village: { en: 'Village website', id: 'Website desa' },
  org: { en: 'Student organization', id: 'Website UKM' },
  faculty: { en: 'Faculty website', id: 'Website fakultas' },
  lms: { en: 'Learning platform (LMS)', id: 'Platform belajar (LMS)' },
  gov: { en: 'Government website', id: 'Website pemerintahan' },
  blog: { en: 'Blog & self-test', id: 'Blog & tes online' },
};
export const filterGroup = (kind: string) => (['profile', 'landing', 'store'].includes(kind) ? kind : 'other');

export const seoPage: PageHead = {
  path: '~/work/seo',
  file: 'seo.svg',
  metaTitle: 'SEO Results | Idham Ahmad Nashir',
  metaDescription: 'Real Google Search Console results from websites optimized by Idham Ahmad Nashir: more clicks, more impressions, steady growth.',
  title: { en: 'Search engine optimization', id: 'Search engine optimization' },
  lead: {
    en: 'Real Google Search Console reports from sites I optimize. Keyword research, technical fixes, and consistent content turn into more clicks every month.',
    id: 'Laporan Google Search Console asli dari website yang saya optimasi. Riset kata kunci, perbaikan teknis, dan konten yang konsisten menghasilkan klik yang terus naik setiap bulan.',
  },
  highlights: [
    { value: '+50%', label: { en: 'traffic growth per month', id: 'kenaikan trafik per bulan' } },
    { value: '60+', label: { en: 'websites ranked & maintained', id: 'website dioptimasi & dirawat' } },
    { value: '750+', label: { en: 'articles published monthly', id: 'artikel terbit per bulan' } },
  ],
  image: img('illus-seo.svg'),
};

export const adsPage: PageHead = {
  path: '~/work/marketing-ads',
  file: 'marketing-ads.svg',
  metaTitle: 'Marketing Ads | Idham Ahmad Nashir',
  metaDescription: 'Meta Ads and Google Ads campaigns by Idham Ahmad Nashir: pixel setup, creatives, A/B testing, and reporting.',
  title: { en: 'Ads that earn their budget', id: 'Iklan yang menghasilkan' },
  lead: {
    en: 'Meta and Google Ads, set up end to end: pixel and domain verification, creatives, A/B tests to find the winning ad, and clear reports. These are real dashboards from my campaigns.',
    id: 'Meta Ads dan Google Ads dari awal sampai akhir: pemasangan pixel dan verifikasi domain, materi iklan, A/B testing untuk menemukan iklan terbaik, dan laporan yang jelas. Ini dashboard asli dari kampanye saya.',
  },
  highlights: [
    { value: { en: 'IDR 1.5B', id: 'Rp1,5 M' }, label: { en: 'monthly sales target reached with the sales team', id: 'target penjualan per bulan tercapai bersama tim sales' } },
    { value: { en: 'IDR 100M', id: 'Rp100 Jt' }, label: { en: 'monthly revenue reached by client businesses', id: 'omzet per bulan yang dicapai bisnis klien' } },
    { value: 'A/B', label: { en: 'tested before every scale-up', id: 'diuji sebelum anggaran dinaikkan' } },
  ],
  image: img('illus-ads.svg'),
};

export const adsMore: T = { en: 'View more ad reports', id: 'Lihat laporan iklan lainnya' };

export const designPage: PageHead = {
  path: '~/work/graphic-design',
  file: 'graphic-design.svg',
  metaTitle: 'Graphic Design | Idham Ahmad Nashir',
  metaDescription: 'Posters, logos, banners, and social media designs by Idham Ahmad Nashir.',
  title: { en: 'Graphic design', id: 'Graphic design' },
  lead: {
    en: 'Posters, logos, banners, and social content for events, campuses, and small businesses. Designed to be noticed in a busy feed.',
    id: 'Poster, logo, banner, dan konten sosial media untuk acara, kampus, dan UMKM. Dirancang supaya menonjol di feed yang ramai.',
  },
  highlights: [
    { value: '18', label: { en: 'designs in this showcase', id: 'desain di halaman ini' } },
    { value: '30+', label: { en: 'event videos edited for YouTube', id: 'video lomba diedit untuk YouTube' } },
    { value: 'Ps / Ai', label: { en: 'Photoshop, Illustrator & Figma', id: 'Photoshop, Illustrator & Figma' } },
  ],
  image: img('illus-graphic-design.svg'),
};

export const certPage: PageHead = {
  path: '~/certification',
  file: 'certificates.svg',
  metaTitle: 'Certificates | Idham Ahmad Nashir',
  metaDescription: 'Certificates earned by Idham Ahmad Nashir from BNSP, Google, Meta, ETS, Coursera, Dicoding, and more.',
  title: { en: 'Certificates', id: 'Sertifikat' },
  lead: {
    en: 'The proof behind the work: certifications from BNSP, Google, Meta, ETS, Coursera, Dicoding, and more. Click any certificate to see it in full.',
    id: 'Bukti di balik hasil kerja: sertifikasi dari BNSP, Google, Meta, ETS, Coursera, Dicoding, dan lainnya. Klik sertifikat untuk melihatnya lebih jelas.',
  },
  highlights: [
    { value: '21', label: { en: 'certificates shown here', id: 'sertifikat di halaman ini' } },
    { value: 'BNSP', label: { en: 'national professional certification', id: 'sertifikasi profesi nasional' } },
    { value: 'TOEFL', label: { en: 'ITP by ETS, 2024', id: 'ITP dari ETS, 2024' } },
  ],
  image: img('illus-certification.svg'),
};

export const certListTitle: T = { en: 'Key certifications', id: 'Sertifikasi utama' };
export const certGalleryTitle: T = { en: 'All certificates', id: 'Semua sertifikat' };

export const certifications = [
  { name: 'Digital Retail Marketing', issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)', date: { en: 'Sep 2022', id: 'Sep 2022' } },
  { name: 'Google Ads Search Certification', issuer: 'Google Digital Academy (Skillshop)', date: { en: 'Mar 2022', id: 'Mar 2022' } },
  { name: 'Understand Meta’s Advertising', issuer: 'Meta', date: { en: 'Dec 2022', id: 'Des 2022' } },
  { name: 'Digital Advertising', issuer: 'HubSpot Academy', date: { en: 'Sep 2023', id: 'Sep 2023' } },
  { name: 'Increase SEO Traffic with WordPress', issuer: 'Coursera', date: { en: 'Sep 2023', id: 'Sep 2023' } },
  { name: 'Front End Developer', issuer: 'Great Learning', date: { en: 'Mar 2022', id: 'Mar 2022' } },
  { name: 'Web Programming', issuer: 'Dicoding Indonesia', date: { en: 'Sep 2023', id: 'Sep 2023' } },
  { name: 'Python for Data Science', issuer: 'Cognitive Class', date: { en: 'Nov 2023', id: 'Nov 2023' } },
  { name: 'Microsoft Office Desktop Application', issuer: 'Microsoft Partner', date: { en: 'Aug 2022', id: 'Agu 2022' } },
  { name: 'TOEFL ITP', issuer: 'Educational Testing Service (ETS)', date: { en: 'Jun 2024', id: 'Jun 2024' } },
];

export const galleryLabels = {
  seo: { en: 'Search Console report', id: 'Laporan Search Console' },
  ads: { en: 'Ads dashboard', id: 'Dashboard iklan' },
  design: { en: 'Design', id: 'Desain' },
  cert: { en: 'Certificate', id: 'Sertifikat' },
};

export const cta = {
  title: { en: 'Like what you see? Let’s build yours.', id: 'Suka dengan hasilnya? Yuk buat punya Anda.' },
  lead: {
    en: 'Tell me about your business and what you need, and we will plan the next step together.',
    id: 'Ceritakan bisnis dan kebutuhan Anda, lalu kita rencanakan langkah berikutnya bersama.',
  },
  primary: { en: 'Start a project', id: 'Mulai proyek' },
  secondary: { en: 'Back to home', id: 'Kembali ke beranda' },
};

export const notFound = {
  title: { en: 'Page not found', id: 'Halaman tidak ditemukan' },
  lead: {
    en: 'The page you are looking for does not exist or has moved. Head back home or browse my work.',
    id: 'Halaman yang Anda cari tidak ada atau sudah dipindahkan. Kembali ke beranda atau lihat karya saya.',
  },
  home: { en: 'Back to home', id: 'Kembali ke beranda' },
  work: { en: 'See my work', id: 'Lihat karya saya' },
};
