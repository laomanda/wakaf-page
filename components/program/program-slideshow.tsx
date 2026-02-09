"use client";

import "swiper/css";
import "swiper/css/pagination";
import type { ReactNode } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Slide = {
  id: string;
  content: ReactNode;
};

type ProgramSlideshowProps = {
  slides: Slide[];
  autoPlay?: boolean;
  delay?: number;
};

export default function ProgramSlideshow({
  slides,
  autoPlay = false,
  delay = 4000,
}: ProgramSlideshowProps) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={autoPlay ? { delay, disableOnInteraction: false } : false}
      spaceBetween={16}
      slidesPerView={1}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>{slide.content}</SwiperSlide>
      ))}
    </Swiper>
  );
}
