"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  "https://f005.backblazeb2.com/file/elearning-img/imagen+(5).jpeg",
  "https://f005.backblazeb2.com/file/elearning-img/imagen+(6).jpeg",
  "https://f005.backblazeb2.com/file/elearning-img/imagen+(7).jpeg",
];

export const InfoCarousel = () => {
  return (
    <div className="container mx-auto px-6 py-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
      <h2 className="text-3xl font-bold text-center text-isep-dark dark:text-white mb-8">
        Descubre más sobre tu Universidad
      </h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="overflow-hidden rounded-2xl shadow-lg border-0 bg-transparent">
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <Image
                      src={src}
                      alt={`Información ISEP ${index + 1}`}
                      width={1280}
                      height={720}
                      className="object-contain w-full h-full rounded-2xl"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex left-[-50px]" />
        <CarouselNext className="hidden sm:flex right-[-50px]" />
      </Carousel>
    </div>
  );
};