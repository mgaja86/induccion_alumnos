"use client";

import { FolderKanban } from "lucide-react";

export const ContentOrganizationSection = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-isep-deep-purple/30 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <FolderKanban className="w-12 h-12 text-isep-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-isep-dark dark:text-white">
            Tus contenidos siempre organizados y accesibles
          </h2>
        </div>
        <div className="text-gray-600 dark:text-gray-300 space-y-4 text-lg text-left">
          <p>
            En Universidad ISEP, todo lo que necesitas para avanzar en tu módulo está perfectamente organizado dentro de tu plataforma. Desde que ingresas, encuentras un entorno claro, intuitivo y adaptado para que puedas estudiar de manera ágil y sin complicaciones.
          </p>
          <p>
            Tendrás acceso directo a materiales de estudio en línea, documentos descargables y recursos complementarios que enriquecen tu experiencia y te ayudan a prepararte mejor. La estructura está pensada para que no pierdas tiempo buscando, y puedas enfocarte en aprender y avanzar.
          </p>
          <p>
            Además, puedes consultar gran parte del contenido sin conexión, lo que te da libertad para estudiar donde quieras y cuando quieras, incluso si no tienes internet en ese momento.
          </p>
          <p>
            Y si en algún momento algo no se visualiza bien, no te preocupes: la plataforma está diseñada para adaptarse fácilmente a tus ajustes de idioma y pantalla. Solo asegúrate de tener el idioma correcto seleccionado y, si es necesario, ajustar la vista para aprovechar al máximo cada recurso.
          </p>
          <p className="font-semibold text-isep-dark dark:text-white mt-6 bg-isep-primary/10 dark:bg-isep-primary/20 p-4 rounded-lg">
            🔸 Tu aprendizaje no se detiene. Aquí tienes todo lo necesario para avanzar, a tu ritmo y con autonomía.
          </p>
        </div>
      </div>
    </div>
  );
};