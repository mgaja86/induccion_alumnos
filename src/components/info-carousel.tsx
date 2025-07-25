"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const images = [
  "https://f005.backblazeb2.com/file/elearning-img/imagen+(5).jpeg",
  "https://f005.backblazeb2.com/file/elearning-img/imagen+(6).jpeg",
  "https://f005.backblazeb2.com/file/elearning-img/imagen+(7).jpeg",
];

export const InfoCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);

    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <div className="py-12 sm:py-16 bg-gray-100 dark:bg-isep-dark opacity-0 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-isep-dark dark:text-white">
            Una Universidad <span className="text-isep-primary">Diferente</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Descubre por qué nuestra metodología está diseñada para potenciar tu futuro profesional.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-8">
            {images.map((src, index) => (
              <CarouselItem key={index} className="pl-8 md:basis-2/3 lg:basis-1/2">
                <div className="p-1">
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl transition-all duration-500 ease-in-out",
                      index === current ? "shadow-2xl shadow-isep-primary/40" : "scale-90 opacity-60"
                    )}
                  >
                    <Image
                      src={src}
                      alt={`Información ISEP ${index + 1}`}
                      width={1280}
                      height={720}
                      className="aspect-video object-cover w-full h-full rounded-2xl"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex left-[-20px] h-12 w-12 bg-white/80 dark:bg-isep-deep-purple/80 backdrop-blur-sm hover:bg-white dark:hover:bg-isep-deep-purple border-isep-primary text-isep-primary" />
          <CarouselNext className="hidden sm:flex right-[-20px] h-12 w-12 bg-white/80 dark:bg-isep-deep-purple/80 backdrop-blur-sm hover:bg-white dark:hover:bg-isep-deep-purple border-isep-primary text-isep-primary" />
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                current === index ? "w-6 bg-isep-primary" : "bg-gray-300 dark:bg-gray-600"
              )}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};