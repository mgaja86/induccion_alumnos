"use client";

import { Award } from "lucide-react";

export const CertificatesSection = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-isep-deep-purple/30 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Award className="w-12 h-12 text-isep-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-isep-dark dark:text-white">
            Solicita tus constancias y certificados de forma fácil, directa y sin complicaciones
          </h2>
        </div>
        <div className="text-gray-600 dark:text-gray-300 space-y-4 text-lg text-left">
          <p>
            En Universidad ISEP, tienes la ventaja de gestionar por tu cuenta cualquier constancia o certificado académico que necesites, de forma 100% digital, rápida y accesible desde tu plataforma. Ya no necesitas enviar correos, hacer filas o esperar respuestas: tú decides cuándo y qué documento solicitar.
          </p>
          <p>
            Esto te permite tener el control total sobre tus trámites, descargar tus documentos al instante y usarlos para cualquier gestión escolar, laboral o personal, desde donde estés y cuando lo necesites.
          </p>
          <p>
            Además, el sistema es intuitivo y está diseñado para que la experiencia sea clara y eficiente, sin depender de intermediarios ni procesos lentos. Así garantizamos que puedas enfocarte en lo más importante: tu formación.
          </p>
        </div>
      </div>
    </div>
  );
};