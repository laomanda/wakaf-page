export type Program = {
  slug: string;
  title: string;
  shortDesc: string;
  images: [string, string, string];
  price: string;
  description: string;
  benefits: string[];
};

export const programs: Program[] = [
  {
    slug: "wakaf-uang",
    title: "Wakaf Melalui Uang",
    shortDesc: "Wakaf tunai yang dikelola secara produktif untuk menghasilkan manfaat berkelanjutan bagi umat.",
    images: [
      "/brand/program/uang/1.png",
      "/brand/program/uang/2.png",
      "/brand/program/uang/3.png",
    ],
    price: "Rp 50.000",
    description:
      "Program wakaf uang memungkinkan setiap muslim berpartisipasi dalam wakaf dengan nominal yang terjangkau. Dana wakaf dikelola secara produktif melalui instrumen keuangan syariah dan investasi riil untuk menghasilkan surplus yang disalurkan kepada penerima manfaat.",
    benefits: [
      "Nominal wakaf terjangkau untuk semua kalangan",
      "Dikelola melalui instrumen keuangan syariah",
      "Surplus disalurkan untuk program sosial",
      "Sertifikat wakaf uang resmi dari BWI",
    ],
  },
  {
    slug: "wakaf-masjid-pelosok",
    title: "Wakaf Masjid Pelosok & Bencana Indonesia",
    shortDesc: "Pembangunan sarana ibadah, pendidikan, dan fasilitas umum berbasis wakaf.",
    images: [
      "/brand/program/pembangunan/3.png",
      "/brand/program/pembangunan/1.png",
      "/brand/program/pembangunan/2.png",
    ],
    price: "Rp 50.000",
    description:
      "Program wakaf pembangunan difokuskan untuk membangun dan merenovasi sarana ibadah seperti masjid dan mushola, serta fasilitas pendidikan dan sosial. Setiap pembangunan dilakukan secara transparan dengan laporan progres berkala kepada para wakif.",
    benefits: [
      "Pembangunan masjid, mushola & pesantren",
      "Laporan progres pembangunan berkala",
      "Amal jariyah yang terus mengalir",
      "Dokumentasi lengkap setiap proyek",
    ],
  },
  {
    slug: "wakaf-peternakan",
    title: "Investasi Kebaikan Dengan Wakaf Peternakan",
    shortDesc: "Pengembangan peternakan produktif untuk pemberdayaan ekonomi masyarakat dhuafa.",
    images: [
      "/brand/program/ternak/1.png",
      "/brand/program/ternak/2.png",
      "/brand/program/ternak/3.png",
    ],
    price: "Rp 50.000",
    description:
      "Program wakaf ternak bertujuan memberdayakan ekonomi masyarakat dhuafa melalui peternakan kambing, sapi, dan unggas. Ternak dikelola secara profesional dengan sistem bagi hasil yang adil, sehingga peternak binaan mendapatkan penghasilan tetap dan kemandirian ekonomi.",
    benefits: [
      "Pemberdayaan peternak dhuafa",
      "Sistem bagi hasil yang adil & transparan",
      "Pelatihan manajemen peternakan",
      "Hasil ternak untuk program qurban & aqiqah",
    ],
  },
  {
    slug: "wakaf-umkm",
    title: "Wakaf Produktif Untuk UMKM Berdaya",
    shortDesc: "Pemberdayaan usaha mikro kecil menengah melalui pendanaan dan pendampingan berbasis wakaf.",
    images: [
      "/brand/program/umkm/1.png",
      "/brand/program/umkm/2.png",
      "/brand/program/umkm/3.png",
    ],
    price: "Rp 50.000",
    description:
      "Program wakaf UMKM menyediakan modal usaha, pelatihan keterampilan, dan pendampingan bisnis bagi pelaku usaha mikro kecil menengah dari kalangan dhuafa. Program ini bertujuan menciptakan kemandirian ekonomi melalui usaha produktif yang berkelanjutan.",
    benefits: [
      "Modal usaha tanpa bunga (qardh hasan)",
      "Pelatihan keterampilan & manajemen bisnis",
      "Pendampingan usaha berkelanjutan",
      "Laporan perkembangan usaha binaan",
    ],
  },
  {
    slug: "wakaf-speaker",
    title: "Wakaf Speaker QUR'AN Untuk Disabilitas & Turnatera & Hafidz QUR'AN",
    shortDesc: "Pengadaan speaker dan perangkat audio untuk mendukung kegiatan dakwah di masjid dan mushola.",
    images: [
      "/brand/program/speaker/1.png",
      "/brand/program/speaker/2.png",
      "/brand/program/speaker/3.png",
    ],
    price: "Rp 50.000",
    description:
      "Program wakaf speaker dakwah menyediakan perangkat audio berkualitas untuk masjid, mushola, dan lembaga pendidikan Islam. Dengan speaker yang memadai, kegiatan dakwah, kajian, dan pendidikan agama dapat berjalan lebih efektif dan menjangkau lebih banyak jamaah.",
    benefits: [
      "Speaker berkualitas untuk masjid & mushola",
      "Mendukung kegiatan dakwah & kajian",
      "Pemasangan dan perawatan gratis",
      "Amal jariyah melalui penyebaran ilmu",
    ],
  },
  {
    slug: "wakaf-amal-jariyah",
    title: "Hadiah Abadi Untuk Orang Tua Tercinta",
    shortDesc: "Program wakaf umum untuk berbagai kebutuhan sosial dan kemanusiaan yang bersifat jariyah.",
    images: [
      "/brand/program/amal-jariyah/1.png",
      "/brand/program/amal-jariyah/2.png",
      "/brand/program/amal-jariyah/3.png",
    ],
    price: "Rp 50.000",
    description:
      "Program wakaf amal jariyah adalah wadah bagi umat Islam untuk menyalurkan wakaf pada berbagai kebutuhan sosial dan kemanusiaan. Dana wakaf akan dialokasikan secara fleksibel untuk program-program yang paling membutuhkan, mulai dari pendidikan, kesehatan, hingga pemberdayaan ekonomi.",
    benefits: [
      "Fleksibel untuk berbagai kebutuhan umat",
      "Pahala yang terus mengalir (jariyah)",
      "Disalurkan ke program paling prioritas",
      "Laporan penyaluran dana transparan",
    ],
  },
  {
    slug: "wakaf-air-bersih",
    title: "Wakaf Air Bersih & Sanitasi",
    shortDesc: "Penyediaan akses air bersih dan sanitasi layak untuk masyarakat desa terpencil.",
    images: [
      "/brand/program/air/1.png",
      "/brand/program/air/2.png",
      "/brand/program/air/3.png",
    ],
    price: "Rp 50.000",
    description:
      "Program wakaf air bersih menyediakan sumur bor, filter air, dan fasilitas sanitasi untuk masyarakat di daerah terpencil yang kesulitan mendapatkan akses air layak konsumsi. Dengan air bersih, kualitas kesehatan dan kehidupan warga meningkat secara signifikan.",
    benefits: [
      "Akses air bersih untuk warga pelosok",
      "Penurunan risiko penyakit diare & kulit",
      "Pelatihan pemeliharaan fasilitas air",
      "Laporan distribusi & pemanfaatan air",
    ],
  },
];
