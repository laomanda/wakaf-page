import Image from "next/image";

import ProgramSlideshow from "@/components/program/program-slideshow";

export default function ProgramGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <div className="rounded-[2.5rem] border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="overflow-hidden rounded-[2rem]">
        <ProgramSlideshow
          slides={images.map((src, index) => ({
            id: `${title}-${index}`,
            content: (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-neutral-100">
                <Image
                  src={src}
                  alt={`${title} ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
            ),
          }))}
          autoPlay
        />
      </div>
    </div>
  );
}
