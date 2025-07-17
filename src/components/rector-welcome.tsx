"use client";

import Image from "next/image";

export const RectorWelcome = () => {
  return (
    <div className="bg-white dark:bg-isep-deep-purple/30 rounded-3xl shadow-lg overflow-hidden mb-8">
      <div className="grid md:grid-cols-5 items-center">
        <div className="md:col-span-2 h-full">
          <Image
            src="https://f005.backblazeb2.com/file/files-Uchat/imagen+(3).jpeg"
            alt="Rector Marc Gaja"
            width={400}
            height={400}
            className="w-full h-full object-cover object-center max-h-[300px] md:max-h-full"
          />
        </div>
        <div className="md:col-span-3 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-isep-primary mb-4">
            Un Mensaje de Nuestro Rector
          </h2>
          <div className="text-gray-700 dark:text-gray-300 space-y-3 text-base">
            <p>
              ¡Estimados y estimadas estudiantes,
            </p>
            <p>
              En nombre de toda la comunidad de Universidad Isep, les doy la más cordial y entusiasta bienvenida. Han elegido embarcarse en un viaje de transformación, y nos sentimos profundamente honrados de que nos hayan escogido para acompañarlos.
            </p>
            <p>
              Aquí, no solo adquirirán conocimientos y competencias de vanguardia, sino que también se unirán a una familia global de profesionales apasionados por generar un impacto positivo en la sociedad.
            </p>
            <p className="font-semibold text-isep-dark dark:text-white mt-4">
              Con mis mejores deseos,
              <br />
              Marc Gaja
              <br />
              <span className="font-normal text-sm">Rector de Universidad Isep</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};