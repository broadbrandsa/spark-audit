"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

interface PhotoStripProps {
  images: { src: string; alt: string }[];
  height?: string;
}

export function PhotoStrip({ images, height = "280px" }: PhotoStripProps) {
  return (
    <FadeIn>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${images.length}, 1fr)`,
          gap: "0",
          width: "100%",
          height,
          overflow: "hidden",
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
