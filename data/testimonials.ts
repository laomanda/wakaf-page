export type Testimonial = {
  name: string;
  role: string;
  message: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ahmad Fauzi",
    role: "Wakif Kebun Pangan",
    message:
      "Laporan panennya jelas dan rutin. Saya bisa melihat dampaknya langsung ke keluarga penerima manfaat.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Siti Rahma",
    role: "Relawan Klinik Wakaf",
    message:
      "Program klinik membuat layanan kesehatan jadi lebih terjangkau dan cepat. Transparansinya terasa.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Hendra Putra",
    role: "Mitra UMKM",
    message:
      "Rumah produksi membantu kami meningkatkan kualitas produk dan kapasitas. Dampaknya besar sekali.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Nadia Aulia",
    role: "Wakif Beasiswa Tahfidz",
    message:
      "Senang bisa mendukung santri tahfidz sekaligus melihat perkembangan usahanya.",
    avatar: "https://i.pravatar.cc/150?img=24",
  },
];
