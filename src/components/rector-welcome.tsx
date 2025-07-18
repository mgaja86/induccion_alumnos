"use client";

import Image from "next/image";

export const RectorWelcome = () => {
  return (
    <div className="bg-white dark:bg-isep-deep-purple/30 rounded-3xl shadow-lg overflow-hidden mb-8">
      <div className="grid md:grid-cols-5 items-center">
        <div className="md:col-span-2 h-full">
          <Image
            src="https://f005.backblazeb2.com/file/files-Uchat/imagen+(3).jpeg"
            alt="Director General Marc Gaja"
            width={400}
            height={400}
            className="w-full h-full object-cover object-center max-h-[300px] md:max-h-full"
          />
        </div>
        <div className="md:col-span-3 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-isep-primary mb-4">
            Un Mensaje de Nuestro Director General
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-3 text-base">
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
              Hoy quiero felicitarles, sinceramente. Porque decidir formarse no es solo llenar un requisito, es apostar por ustedes mismos, por su propósito, por su futuro. Y hacerlo en una universidad como la nuestra significa que están dispuestos a desafiar lo convencional y construir algo nuevo con su conocimiento, su experiencia y su pasión.
            </p>
            <p>
              Sé que el primer día puede venir con nervios, preguntas o incertidumbre. Pero también viene con fuerza, con ilusión y con la certeza de que están en el lugar correcto. A partir de hoy, cada clase, cada actividad, cada esfuerzo, será parte de una transformación profunda. No están solos en este proceso: están acompañados por una comunidad que cree en ustedes.
            </p>
            <p>
              Este es su momento. Este es su espacio. Sean curiosos, sean constantes, y sobre todo, sean valientes. Porque las personas que cambian el mundo comienzan así: decidiendo dar un primer paso.
            </p>
            <p>
              Bienvenidos a Universidad ISEP. Estamos orgullosos de tenerlos aquí.
            </p>
            <p className="font-semibold text-isep-dark dark:text-white mt-4">
              Con admiración y todo mi compromiso,
              <br />
              Marc Gaja
              <br />
              <span className="font-normal text-sm">Director General</span>
              <br />
              <span className="font-normal text-sm">Universidad ISEP</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};