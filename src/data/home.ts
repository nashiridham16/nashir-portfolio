// Konten halaman Home (versi redesign) dalam 2 bahasa.
// en = English (default), id = Bahasa Indonesia (muncul saat tombol "ID" di menu diklik).

const img = (name: string) => `/images/${name}`;

export type T = { en: string; id: string };

export const nav: { href: string; label: T }[] = [
  { href: '/#about', label: { en: 'About', id: 'Tentang' } },
  { href: '/#work', label: { en: 'Work', id: 'Karya' } },
  { href: '/#experience', label: { en: 'Experience', id: 'Pengalaman' } },
  { href: '/#stack', label: { en: 'Stack', id: 'Skill' } },
  { href: '/certification/', label: { en: 'Certificates', id: 'Sertifikat' } },
  { href: '/#contact', label: { en: 'Contact', id: 'Kontak' } },
];

export const hero = {
  status: { en: 'Available now for new projects', id: 'Tersedia untuk proyek baru' },
  title: {
    en: 'I build websites that get found, clicked, and chosen.',
    id: 'Saya membangun website yang ditemukan, diklik, dan dipilih.',
  },
  lead: {
    en: "I'm Idham Ahmad Nashir, a front-end developer, SEO specialist, and digital advertiser from Malang, Indonesia. I design it, code it, rank it, and run the ads, so one person owns your site from the first pixel to the first sale.",
    id: 'Saya Idham Ahmad Nashir, front-end developer, SEO specialist, dan digital advertiser dari Malang, Indonesia. Saya mendesain, membuat, menaikkan ranking, sampai menjalankan iklannya, jadi website Anda ditangani satu orang dari pixel pertama sampai penjualan pertama.',
  },
  ctaPrimary: { en: 'Start a project', id: 'Mulai proyek' },
  ctaSecondary: { en: 'Download CV', id: 'Unduh CV' },
  trust: { en: 'Trusted by 79+ clients worldwide', id: 'Dipercaya 79+ klien dari berbagai negara' },
  trustSub: { en: '256+ projects shipped since 2020', id: '256+ proyek selesai sejak 2020' },
  codeComment: { en: '// ready when you are', id: '// siap kapan pun Anda siap' },
  chipSeo: { en: '60+ websites ranked & maintained', id: '60+ website dioptimasi & dirawat' },
  chipRevenue: {
    en: 'Helped businesses reach up to IDR 100M revenue a month',
    id: 'Membantu bisnis mencapai omzet hingga Rp100 Jt/bulan',
  },
};

// Bendera negara asal klien (gambar di public/images/flag-*.svg)
export const clientFlags = [
  { code: 'id', name: { en: 'Indonesia', id: 'Indonesia' } },
  { code: 'us', name: { en: 'United States', id: 'Amerika Serikat' } },
  { code: 'au', name: { en: 'Australia', id: 'Australia' } },
  { code: 'de', name: { en: 'Germany', id: 'Jerman' } },
  { code: 'cn', name: { en: 'China', id: 'Tiongkok' } },
].map((f) => ({ ...f, image: img(`flag-${f.code}.svg`) }));

export const clientsTitle: T = {
  en: 'Brands and teams I have built for',
  id: 'Brand dan tim yang pernah saya bantu',
};

export const clients = [
  { name: 'Tedmond Groups', logo: img('logo-tedmond.png') },
  { name: 'Aquila Kreatif Nusantara', logo: img('logo-aquila.webp') },
  { name: 'Organoo Studio', logo: img('logo-organoo-studio.png') },
  { name: 'Designskuy', logo: img('logo-designskuy.png') },
  { name: 'Solusi Digital Branding', logo: img('logo-solusi-digital-branding.png') },
  { name: 'CPNS Online', logo: img('logo-cpns-online.png') },
  { name: 'Pintara', logo: img('logo-pintara.png') },
  { name: 'Vokasi UB', logo: img('logo-vokasi-ub.png') },
];

export const about = {
  title: { en: "Hi, I'm Idham.", id: 'Halo, saya Idham.' },
  paragraphs: [
    {
      en: 'I work where design, code, and marketing meet. I graduated in Information Systems from the Faculty of Computer Science, Universitas Brawijaya, with a <strong>3.73 GPA</strong>, and I keep sharpening my craft through bootcamps, courses, and certifications.',
      id: 'Saya bekerja di titik temu desain, kode, dan marketing. Saya lulusan Sistem Informasi, Fakultas Ilmu Komputer Universitas Brawijaya, dengan <strong>IPK 3,73</strong>, dan terus mengasah kemampuan lewat bootcamp, course, dan sertifikasi.',
    },
    {
      en: 'Today I manage SEO for 25+ websites at Tedmond Groups, lead marketing at Organoo Studio, and run Designskuy, my own web development studio.',
      id: 'Saat ini saya menangani SEO untuk 25+ website di Tedmond Groups, memimpin marketing di Organoo Studio, dan menjalankan Designskuy, studio pembuatan website milik saya sendiri.',
    },
  ],
  facts: [
    { key: 'born', value: { en: '16 October 2001', id: '16 Oktober 2001' } },
    { key: 'based', value: { en: 'Kepanjen, Malang, Indonesia', id: 'Kepanjen, Kab. Malang' } },
    { key: 'speaks', value: { en: 'Indonesian, English', id: 'Indonesia, Inggris' } },
    { key: 'timezone', value: { en: 'UTC+7 (WIB)', id: 'UTC+7 (WIB)' } },
  ],
};

export const stats = [
  { value: 6, label: { en: 'years of experience', id: 'tahun pengalaman' } },
  { value: 12, label: { en: 'certifications earned', id: 'sertifikat keahlian' } },
  { value: 256, label: { en: 'projects shipped', id: 'proyek selesai' } },
  { value: 79, label: { en: 'happy clients', id: 'klien puas' } },
];

export const work = {
  title: { en: 'What I can do for you', id: 'Yang bisa saya kerjakan untuk Anda' },
  lead: {
    en: 'Four disciplines, one workflow. Pick where you want to start and see the real work behind it.',
    id: 'Empat keahlian, satu alur kerja. Pilih yang Anda butuhkan dan lihat hasil kerja nyatanya.',
  },
  view: { en: 'View projects', id: 'Lihat proyek' },
  items: [
    {
      file: 'web-dev',
      href: '/web-dev/',
      title: { en: 'Web Development', id: 'Web Development' },
      text: {
        en: 'Company profiles, landing pages, online stores, and LMS platforms. 30 websites built so far.',
        id: 'Company profile, landing page, toko online, sampai platform LMS. Sudah 30 website dibuat.',
      },
      image: img('illus-web-dev.svg'),
    },
    {
      file: 'seo',
      href: '/seo/',
      title: { en: 'SEO', id: 'SEO' },
      text: {
        en: 'On-page and off-page strategy that grows organic traffic, proven across 25+ client websites.',
        id: 'Strategi on-page dan off-page untuk menaikkan trafik organik, terbukti di 25+ website klien.',
      },
      image: img('illus-seo.svg'),
    },
    {
      file: 'marketing-ads',
      href: '/marketing-ads/',
      title: { en: 'Marketing Ads', id: 'Marketing Ads' },
      text: {
        en: 'Meta and Google Ads campaigns, A/B tested until the winning ad pays for itself.',
        id: 'Kampanye Meta Ads dan Google Ads, diuji A/B sampai menemukan iklan yang paling menghasilkan.',
      },
      image: img('illus-ads.svg'),
    },
    {
      file: 'graphic-design',
      href: '/graphic-design/',
      title: { en: 'Graphic Design', id: 'Graphic Design' },
      text: {
        en: 'Posters, logos, and social content designed to stop the scroll.',
        id: 'Poster, logo, dan konten sosial media yang bikin orang berhenti scroll.',
      },
      image: img('illus-graphic-design.svg'),
    },
  ],
};

export const experienceTitle: T = { en: 'Where I have worked', id: 'Tempat saya bekerja' };
export const experienceHint: T = {
  en: 'Newest first. Open a commit to read what I shipped there.',
  id: 'Urut dari yang terbaru. Buka tiap commit untuk melihat apa yang saya kerjakan.',
};
export const currentLabel: T = { en: 'current', id: 'saat ini' };

export const experience = [
  {
    hash: '7f3a2c1',
    company: 'PT Tedmonindo Pratama',
    role: { en: 'SEO Specialist', id: 'SEO Specialist' },
    period: { en: 'Dec 2024 – Present', id: 'Des 2024 – Sekarang' },
    current: true,
    logo: img('logo-tedmond.png'),
    points: [
      { en: 'Manage, maintain, and optimize 25+ websites to grow traffic every month, plus partner sites of Tedmond Groups.', id: 'Menangani, memelihara, dan mengoptimalkan 25+ website untuk meningkatkan trafik setiap bulan, serta website mitra Tedmond Groups.' },
      { en: 'Lead and coordinate a team of 6 copywriters.', id: 'Memimpin dan mengkoordinasikan 6 penulis naskah.' },
      { en: 'Schedule, audit, and publish 750+ articles per month.', id: 'Menjadwalkan, mengaudit, dan menerbitkan 750+ artikel per bulan.' },
      { en: 'Build on-page and off-page SEO strategy.', id: 'Membangun strategi SEO on-page maupun off-page.' },
      { en: 'Monitor DA, PA, and search engine rankings.', id: 'Memantau performa DA, PA, serta ranking website di mesin pencari.' },
      { en: 'Create, maintain, and A/B test Meta Ads campaigns.', id: 'Membuat, mengelola, dan melakukan A/B testing iklan Meta Ads.' },
    ],
  },
  {
    hash: 'c41e9b8',
    company: 'PT Aquila Kreatif Nusantara',
    role: { en: 'SEO Specialist', id: 'SEO Specialist' },
    period: { en: 'Apr 2024 – Jun 2024', id: 'Apr 2024 – Jun 2024' },
    current: false,
    logo: img('logo-aquila.webp'),
    points: [
      { en: 'Ran keyword research together with the team.', id: 'Berkoordinasi dengan tim dan melakukan riset kata kunci.' },
      { en: 'Connected sites to Google Search Console and Google Analytics.', id: 'Menghubungkan website dengan Google Search Console dan Google Analytics.' },
      { en: 'Optimized page load speed across every page.', id: 'Mengoptimalkan kecepatan loading di setiap halaman.' },
      { en: 'Wrote SEO articles targeting chosen keywords.', id: 'Menulis artikel SEO berdasarkan kata kunci target.' },
      { en: 'Monitored DA, PA, and rankings, and requested indexing in Search Console.', id: 'Memantau DA, PA, dan ranking, serta request indexing di Search Console.' },
      { en: 'Reported SEO performance every week.', id: 'Membuat laporan performa SEO setiap minggu.' },
    ],
  },
  {
    hash: '9d0b6fe',
    company: 'Organoo Studio',
    role: { en: 'Chief Marketing Officer', id: 'Chief Marketing Officer' },
    period: { en: 'Jun 2023 – Present', id: 'Jun 2023 – Sekarang' },
    current: true,
    logo: img('logo-organoo-studio.png'),
    points: [
      { en: 'Plan the Instagram content feed.', id: 'Merencanakan konten feed Instagram.' },
      { en: 'Maintain the website to match each campaign.', id: 'Memelihara website sesuai kebutuhan campaign.' },
      { en: 'Promote across every digital platform and coordinate running campaigns.', id: 'Melakukan promosi di seluruh platform digital dan mengkoordinasikan campaign.' },
      { en: 'Meet clients and research pricing, market trends, and competitors.', id: 'Meeting dengan klien serta riset harga, tren pasar, dan kompetitor.' },
      { en: 'Optimize and evaluate results every month.', id: 'Melakukan optimasi dan evaluasi setiap bulan.' },
    ],
  },
  {
    hash: '2b7c5a0',
    company: 'PT Solusi Digital Branding',
    role: { en: 'Social Media Advertising', id: 'Social Media Advertising' },
    period: { en: 'Aug 2022 – Jan 2023', id: 'Agu 2022 – Jan 2023' },
    current: false,
    logo: img('logo-solusi-digital-branding.png'),
    points: [
      { en: 'Handled ads for Casa Kreatif, a press release service.', id: 'Menangani iklan brand Casa Kreatif, jasa press release.' },
      { en: 'Set up fan pages, ad accounts, pixels, and domain verification.', id: 'Membuat fanspage, akun iklan, memasang pixel, dan verifikasi domain.' },
      { en: 'Produced ad creatives and copy.', id: 'Membuat materi dan creative iklan.' },
      { en: 'Ran A/B tests to find the winning campaign, then reported results.', id: 'Menjalankan A/B testing untuk menemukan winning campaign, lalu membuat laporan.' },
    ],
  },
  {
    hash: 'e58f113',
    company: 'PT Inspirasi Mandiri Nusantara',
    role: { en: 'WordPress Developer', id: 'WordPress Developer' },
    period: { en: 'Aug 2022 – Nov 2022', id: 'Agu 2022 – Nov 2022' },
    current: false,
    logo: img('logo-pintara.png'),
    points: [
      { en: 'Redesigned and rebuilt the PINTARA website (SNBT tutoring).', id: 'Meredesain dan membangun ulang website PINTARA (bimbel SNBT).' },
      { en: 'Worked with the UI/UX team on every service page.', id: 'Berkolaborasi dengan tim UI/UX untuk setiap halaman layanan.' },
      { en: 'Built a membership database, live chat, and forms with price integration.', id: 'Membuat database membership, fitur live chat, dan form dengan integrasi harga.' },
      { en: 'Kept plugins updated and the site healthy.', id: 'Mengupdate plugin dan menjaga kesehatan website.' },
    ],
  },
  {
    hash: '61ad4c7',
    company: 'PT Magau Jaya Digital',
    role: { en: 'Social Media Advertiser', id: 'Social Media Advertiser' },
    period: { en: 'Aug 2022', id: 'Agu 2022' },
    current: false,
    logo: img('logo-cpns-online.png'),
    points: [
      { en: 'Handled ads for CPNS Online.id, a civil service exam prep brand.', id: 'Menangani iklan brand CPNS Online.id, bimbel CPNS.' },
      { en: 'Set up ad accounts, pixels, and domain verification.', id: 'Membuat akun iklan, memasang pixel, dan verifikasi domain.' },
      { en: 'Created ads and A/B tested them to find the winner.', id: 'Membuat iklan dan melakukan A/B testing untuk menemukan winning campaign.' },
    ],
  },
  {
    hash: 'a90e2d4',
    company: 'PSIK Vokasi UB',
    role: { en: 'Web Developer', id: 'Web Developer' },
    period: { en: 'Feb 2022 – Jul 2022', id: 'Feb 2022 – Jul 2022' },
    current: false,
    logo: img('logo-vokasi-ub.png'),
    points: [
      { en: 'Maintained, designed, and optimized the faculty website.', id: 'Melakukan maintenance, desain, dan optimasi website fakultas.' },
      { en: 'Published posts by category with SEO and readability checks.', id: 'Mempublikasikan post per kategori dengan cek SEO dan readability.' },
      { en: 'Connected Google Analytics and analyzed traffic.', id: 'Menghubungkan Google Analytics dan menganalisis trafik.' },
    ],
  },
  {
    hash: '0c3f8e2',
    company: 'Designskuy',
    role: { en: 'CEO & Founder', id: 'CEO & Founder' },
    period: { en: 'Sep 2020 – Present', id: 'Sep 2020 – Sekarang' },
    current: true,
    logo: img('logo-designskuy.png'),
    points: [
      { en: 'Run a start-up that builds websites for clients.', id: 'Menjalankan start-up jasa pembuatan website.' },
      { en: 'Build and maintain websites to each client’s brief.', id: 'Membuat dan memelihara website sesuai kebutuhan klien.' },
      { en: 'Promote with Google Ads and Meta Ads.', id: 'Melakukan promosi dengan Google Ads dan Meta Ads.' },
      { en: 'Handle client meetings, finances, and monthly evaluation.', id: 'Menangani meeting klien, keuangan, dan evaluasi bulanan.' },
    ],
  },
];

export const educationTitle: T = { en: 'Education', id: 'Pendidikan' };
export const education = [
  { school: 'Universitas Brawijaya', major: { en: 'Bachelor (Extension), Information Systems', id: 'S1 Extension, Sistem Informasi' }, period: { en: 'Aug 2023 – 2025', id: 'Agu 2023 – 2025' }, logo: img('logo-universitas-brawijaya.png') },
  { school: 'Universitas Brawijaya', major: { en: 'Diploma, IT – Digital Business & E-commerce', id: 'D3 Teknologi Informasi – Bisnis Digital & E-commerce' }, period: { en: 'Jul 2020 – Jul 2023', id: 'Jul 2020 – Jul 2023' }, logo: img('logo-universitas-brawijaya.png') },
  { school: 'SMAN 1 Kepanjen', major: { en: 'High school', id: 'SMA' }, period: { en: '2017 – 2020', id: '2017 – 2020' }, logo: img('logo-sman-1-kepanjen.png') },
  { school: 'SMPN 3 Kepanjen', major: { en: 'Junior high school', id: 'SMP' }, period: { en: '2014 – 2017', id: '2014 – 2017' }, logo: img('logo-smpn-3-kepanjen.png') },
  { school: 'SDN 2 Kepanjen', major: { en: 'Elementary school', id: 'SD' }, period: { en: '2009 – 2014', id: '2009 – 2014' }, logo: img('logo-sdn-2-kepanjen.png') },
];

export const orgTitle: T = { en: 'Organizations', id: 'Organisasi' };
export const organizations = [
  { name: 'KKN Vokasi Desa Jatikerto', role: { en: 'Group Leader', id: 'Ketua Kelompok' }, period: '2023', logo: img('logo-vokasi-ub.png') },
  { name: 'Karang Taruna RT', role: { en: 'Chairman', id: 'Ketua' }, period: '2020 – 2023', logo: img('logo-karang-taruna.png') },
  { name: 'Gebyar Brawijaya Qurani 9', role: { en: 'Staff', id: 'Staff' }, period: '2022', logo: img('logo-gebyar-brawijaya-qurani.png') },
  { name: 'Gebyar Brawijaya Qurani 8', role: { en: 'Staff', id: 'Staff' }, period: '2021', logo: img('logo-gebyar-brawijaya-qurani.png') },
  { name: 'HIMBIS Vokasi UB', role: { en: 'Staff', id: 'Staff' }, period: '2020 – 2022', logo: img('logo-himbis-vokasi-ub.png') },
  { name: 'UKM Seni Religi UB', role: { en: 'Member', id: 'Anggota' }, period: '2020 – 2022', logo: img('logo-ukm-seni-religi-ub.png') },
  { name: 'Rohis Utsfillah SMANEKA', role: { en: 'Head of Division', id: 'Kepala Bidang' }, period: '2018 – 2020', logo: img('logo-rohis-smaneka.png') },
];

// Ikon skill & tools: `icon` = ikon brand (simple-icons), `mark` = teks singkat untuk logo yang tidak tersedia
export const skillIcons: { label: string; icon?: string; mark?: string }[] = [
  { label: 'HTML', icon: 'html5' },
  { label: 'CSS', icon: 'css' },
  { label: 'JavaScript', icon: 'javascript' },
  { label: 'WordPress', icon: 'wordpress' },
  { label: 'Google Analytics', icon: 'googleanalytics' },
  { label: 'Search Console', icon: 'googlesearchconsole' },
  { label: 'Google Ads', icon: 'googleads' },
  { label: 'Meta Ads', icon: 'meta' },
  { label: 'TikTok Ads', icon: 'tiktok' },
  { label: 'Yoast SEO', icon: 'yoast' },
];

export const toolIcons: { label: string; icon?: string; mark?: string }[] = [
  { label: 'VS Code', mark: '</>' },
  { label: 'Elementor', icon: 'elementor' },
  { label: 'Photoshop', mark: 'Ps' },
  { label: 'Illustrator', mark: 'Ai' },
  { label: 'Premiere Pro', mark: 'Pr' },
  { label: 'Figma', icon: 'figma' },
];

export const stack = {
  title: { en: 'Stack and tools', id: 'Skill dan tools' },
  lead: {
    en: 'The tools I reach for every day, from the first wireframe to the last report.',
    id: 'Tools yang saya pakai setiap hari, dari wireframe pertama sampai laporan terakhir.',
  },
  skillsLabel: { en: 'Skills', id: 'Skill' },
  toolsLabel: { en: 'Tools', id: 'Tools' },
  softLabel: { en: 'Soft skills', id: 'Soft skill' },
  soft: [
    { label: { en: 'Teamwork', id: 'Kerja tim' }, value: 100 },
    { label: { en: 'Leadership', id: 'Kepemimpinan' }, value: 90 },
    { label: { en: 'Public speaking', id: 'Public speaking' }, value: 95 },
  ],
};

export const quote = {
  text: {
    en: 'When problems pile up, when you feel defeated and there seems to be no way out, bow down in prayer. That is when God answers: “Don’t give up. Try again. This time I am right beside you.”',
    id: 'Bila kamu banyak masalah, merasa kalah, dan jalan keluar tiada celah. Maka bersujudlah. Saat itulah Tuhan langsung membalas sujudmu dengan berkata: “Janganlah menyerah, kembali cobalah, kali ini aku bersamamu di sebelah.”',
  },
  author: 'Idham Ahmad N.',
  more: { en: 'More quotes on X', id: 'Quote lainnya di X' },
};

export const contact = {
  title: { en: 'Got a project in mind? Let’s ship it.', id: 'Punya proyek? Yuk kita wujudkan.' },
  lead: {
    en: 'Tell me what you need: a new website, better rankings, or ads that convert.',
    id: 'Ceritakan kebutuhan Anda: website baru, ranking yang lebih baik, atau iklan yang menghasilkan.',
  },
  whatsapp: { en: 'Chat on WhatsApp', id: 'Chat via WhatsApp' },
  email: { en: 'Send an email', id: 'Kirim email' },
};

export const footer = {
  available: { en: 'Available for new projects', id: 'Tersedia untuk proyek baru' },
};
