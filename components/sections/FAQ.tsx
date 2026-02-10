"use client";

import Container from "@/components/layout/Container";
import SectionReveal from "@/components/sections/SectionReveal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqData = [
    {
        id: "item-1",
        question: "Apa itu Wakaf DPF?",
        answer:
            "Wakaf DPF adalah program wakaf tunai yang dikelola oleh Dompet Dhuafa untuk membiayai program-program sosial, kemanusiaan, dan pemberdayaan masyarakat secara berkelanjutan. Dana wakaf dikelola secara produktif dan hasilnya disalurkan untuk maukuf alaih.",
    },
    {
        id: "item-2",
        question: "Bagaimana cara berwakaf di sini?",
        answer:
            "Anda dapat berwakaf dengan mudah melalui website ini. Pilih program wakaf yang tersedia, tentukan nominal, dan ikuti instruksi pembayaran. Kami mendukung berbagai metode pembayaran online seperti transfer bank, e-wallet, dan QRIS.",
    },
    {
        id: "item-3",
        question: "Apakah wakaf saya bisa atas nama orang lain?",
        answer:
            "Ya, tentu saja. Anda bisa meniatkan wakaf atas nama orang tua, kerabat, atau orang lain yang Anda kehendaki. Pahalanya insya Allah akan mengalir kepada mereka yang diniatkan.",
    },
    {
        id: "item-4",
        question: "Apakah ada batas minimal nominal wakaf?",
        answer:
            "Tidak ada batas minimal yang mengikat, namun kami menyarankan nominal tertentu (misal Rp 50.000) agar manfaat wakaf dapat lebih optimal dan efisien dalam pengelolaannya.",
    },
    {
        id: "item-5",
        question: "Apakah saya akan mendapatkan laporan penyaluran?",
        answer:
            "Tentu. Transparansi adalah prioritas kami. Para wakif (donatur wakaf) akan mendapatkan laporan berkala mengenai perkembangan program dan penyaluran manfaat wakaf melalui email atau dapat diakses melalui dashboard donatur.",
    },
];

export default function FAQ() {
    return (
        <SectionReveal id="faq" className="bg-white py-20 lg:py-24">
            <Container size="6xl">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading font-bold text-gray-900"
                    >
                        Pertanyaan Umum
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-xl mx-auto"
                    >
                    </motion.p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((faq) => (
                            <AccordionItem
                                key={faq.id}
                                value={faq.id}
                                className="border-b border-gray-200 last:border-0"
                            >
                                <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-primary-600 hover:no-underline py-6 text-left transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-[15px]">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Container>
        </SectionReveal>
    );
}
