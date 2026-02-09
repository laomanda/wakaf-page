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
    slug: "kebun-pangan",
    title: "Wakaf Kebun Pangan",
    shortDesc: "Menguatkan ketahanan pangan desa dengan model kebun produktif.",
    images: [
      "https://images.unsplash.com/photo-1500937386664-56e4cbdcd2b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    ],
    price: "Mulai Rp 250.000",
    description:
      "Program kebun pangan wakaf dikelola bersama kelompok tani untuk menghasilkan bahan pangan dan pendapatan berkelanjutan. Hasil usaha disalurkan untuk penerima manfaat serta penguatan ekonomi lokal.",
    benefits: [
      "Meningkatkan ketahanan pangan keluarga",
      "Skema bagi hasil transparan",
      "Laporan panen dan distribusi bulanan",
      "Memberdayakan petani lokal",
    ],
  },
  {
    slug: "klinik-sehat",
    title: "Klinik & Ambulans Wakaf",
    shortDesc: "Layanan kesehatan terjangkau dengan unit klinik berbasis wakaf.",
    images: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576765607924-3d02b5f8c84a?auto=format&fit=crop&w=1200&q=80",
    ],
    price: "Mulai Rp 500.000",
    description:
      "Pengelolaan klinik dan ambulans wakaf untuk menyediakan layanan kesehatan dasar, pemeriksaan rutin, dan rujukan cepat bagi masyarakat prasejahtera.",
    benefits: [
      "Akses layanan kesehatan lebih mudah",
      "Ambulans siaga 24/7",
      "Laporan kunjungan pasien bulanan",
      "Dampak sosial terukur",
    ],
  },
  {
    slug: "beasiswa-tahfidz",
    title: "Beasiswa Tahfidz",
    shortDesc: "Pendanaan pendidikan dan pembinaan santri penghafal Al-Qur'an.",
    images: [
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    ],
    price: "Mulai Rp 300.000",
    description:
      "Beasiswa tahfidz menanggung biaya pendidikan, asrama, dan pengembangan unit usaha pesantren untuk mendukung kemandirian.",
    benefits: [
      "Pembinaan hafalan terstruktur",
      "Dukungan kebutuhan santri",
      "Monitoring capaian akademik",
      "Unit usaha pesantren berkembang",
    ],
  },
  {
    slug: "rumah-produksi",
    title: "Rumah Produksi UMKM",
    shortDesc: "Fasilitas produksi bersama untuk meningkatkan kapasitas UMKM lokal.",
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=1200&q=80",
    ],
    price: "Rp 1.000.000 - Rp 5.000.000",
    description:
      "Pembangunan rumah produksi wakaf untuk membantu UMKM memproduksi barang dengan standar higienis dan efisiensi lebih tinggi.",
    benefits: [
      "Peningkatan kapasitas produksi",
      "Pelatihan kualitas dan packaging",
      "Akses pasar lebih luas",
      "Laporan omzet bulanan",
    ],
  },
  {
    slug: "energi-terbarukan",
    title: "Energi Surya Masjid",
    shortDesc: "Pemasangan panel surya untuk mendukung kemandirian energi masjid.",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=80",
    ],
    price: "Mulai Rp 750.000",
    description:
      "Panel surya wakaf untuk menekan biaya listrik masjid dan mengalihkan dana operasional ke program sosial.",
    benefits: [
      "Penghematan biaya listrik",
      "Energi bersih dan berkelanjutan",
      "Monitoring produksi energi",
      "Dana operasional dialihkan ke program sosial",
    ],
  },
  {
    slug: "air-bersih",
    title: "Air Bersih & Sanitasi",
    shortDesc: "Pembangunan sumur dan instalasi sanitasi untuk desa terpencil.",
    images: [
      "https://images.unsplash.com/photo-1501769214405-5e86fb87b1f6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    ],
    price: "Mulai Rp 400.000",
    description:
      "Pengadaan sumur bor, filter air, dan fasilitas sanitasi untuk meningkatkan kualitas hidup dan kesehatan warga.",
    benefits: [
      "Akses air bersih untuk warga",
      "Penurunan risiko penyakit",
      "Pelatihan pemeliharaan fasilitas",
      "Pelaporan penggunaan air",
    ],
  },
];
