"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionReveal from "@/components/sections/SectionReveal";
import { testimonials } from "@/data/testimonials";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <SectionReveal id="testimonials" className="bg-neutral-50 py-20 lg:py-24">
      <Container size="7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
              Testimoni
            </p>
            <h2 className="text-3xl font-heading font-bold text-gray-900 md:text-4xl">
              Kata Mereka Tentang Wakaf
            </h2>
          </div>
          <p className="text-lg text-neutral-600 max-w-sm">
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="!px-1 [&_.swiper-wrapper]:items-stretch [&_.swiper-pagination]:!relative [&_.swiper-pagination]:!bottom-auto [&_.swiper-pagination]:!mt-10" // Equal height + pagination below cards
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto !flex">
                <div className="h-full w-full rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex items-center gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="text-neutral-600 mb-6 leading-relaxed italic">
                      &ldquo;{item.message}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-neutral-50 mt-auto">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-sm shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-neutral-900">
                        {item.name}
                      </p>
                      <p className="text-xs font-medium text-primary-600">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </SectionReveal>
  );
}
