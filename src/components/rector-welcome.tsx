"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export const RectorWelcome = () => {
  return (
    <div className="bg-white dark:bg-isep-deep-purple/30 rounded-3xl shadow-lg overflow-hidden mb-8 p-8 sm:p-12">
      <div className="max-w-4xl mx-auto text-center">
        <Image
          src="https://f005.backblazeb2.com/file/files-Uchat/imagen+(3).jpeg"
          alt="Director General Marc Gaja"
          width={160}
          height={160}
          className="rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 mx-auto ring-4 ring-isep-primary ring-offset-4 ring-offset-white dark:ring-offset-isep-deep-purple/30"
        />
        <div className="mt-4">
          <p className="font-bold text-xl text-isep-dark dark:text-white">
            Marc Gaja
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400">
            Director General, Universidad ISEP
          </p>
        </div>

        <div className="relative mt-10">
          <Quote className="absolute -top-6 -left-6 w-20 h-20 text-isep-primary/10 dark:text-isep-primary/20" />
          <div className="text-gray-700 dark:text-gray-300 space-y-4 text-base text-left sm:text-justify relative">
            <p>
              Queridas y queridos estudiantes,
            </p>
            <p>
              Hoy están dando un paso que no cualquiera se atreve a dar. Un paso que representa crecimiento, compromiso y valentía. En nombre de todo el equipo de Universidad ISEP, quiero darles la más cálida bienvenida a esta comunidad académica que, desde ahora, también es suya.
            </p>
            <p>
              Este no es un inicio cualquiera. Es el comienzo de una etapa en la que ustedes serán parte de algo mucho más grande: una universidad que cree en la innovación, en el aprendizaje autónomo, en la tecnología al servicio del ser humano, y en la educación como motor de transformación personal y social.
            </p>
            <p>
              En ISEP nos mueve la idea de hacer las cosas de manera distinta. Somos una institución que no se conforma con lo tradicional, que busca nuevas formas de enseñar, de conectar, de inspirar. Y ustedes están aquí porque comparten esa visión. Porque no se conforman. Porque quieren marcar la diferencia.
            </p>
            <p>
              Hoy quiero felicitarles, sinceramente. Porque decidir formarse no es solo llenar un requisito, es apostar por ustedes mismos, por su propósito, por su futuro. Y hacerlo en una universidad como la nuestra significa que están dispuestos y dispuestas a desafiar lo convencional y construir algo nuevo con su conocimiento, su experiencia y su pasión.
            </p>
            <p>
              Sé que el primer día puede venir con nervios, preguntas o incertidumbre. Pero también viene con fuerza, con ilusión y con la certeza de que están en el lugar correcto. A partir de hoy, cada clase, cada actividad, cada esfuerzo, será parte de una transformación profunda. No están solos ni solas en este proceso: están acompañados y acompañadas por una comunidad que cree en ustedes.
            </p>
            <p>
              Este es su momento. Este es su espacio. Sean curiosos, curiosas, sean constantes, y sobre todo, sean valientes. Porque las personas que cambian el mundo comienzan así: decidiendo dar un primer paso.
            </p>
            <p>
              Bienvenidos y bienvenidas a Universidad ISEP. Estamos orgullosos y orgullosas de tenerles aquí.
            </p>
            <p className="font-semibold text-isep-dark dark:text-white mt-6 text-center">
              Con admiración y todo mi compromiso,
            </p>
          </div>
          <Quote className="absolute -bottom-6 -right-6 w-20 h-20 text-isep-primary/10 dark:text-isep-primary/20 transform scale-x-[-1] scale-y-[-1]" />
        </div>
      </div>
    </div>
  );
};