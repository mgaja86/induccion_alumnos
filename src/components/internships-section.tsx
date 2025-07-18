"use client";

import { Briefcase } from "lucide-react";

export const InternshipsSection = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-isep-deep-purple/30 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <Briefcase className="w-12 h-12 text-isep-accent mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-isep-dark dark:text-white">
            ¿Quieres hacer tus prácticas en una empresa o institución de tu interés? ¡En ISEP te apoyamos para lograrlo!
          </h2>
        </div>
        <div className="text-gray-600 dark:text-gray-300 space-y-4 text-lg text-left">
          <p>
            En Universidad ISEP, tienes la posibilidad de gestionar tus prácticas profesionales en la empresa o institución que tú elijas, siempre que cumpla con los requisitos necesarios.
          </p>
          <p>
            Si ya tienes un lugar en mente, el proceso es muy sencillo y diseñado para darte autonomía, pero con todo el respaldo de nuestra área de vinculación. No importa si la institución aún no está afiliada, te ayudamos a establecer el convenio de manera formal.
          </p>
          <p>
            Solo necesitas compartir algunos datos clave sobre la empresa y la persona encargada, y nuestro equipo se encargará de coordinar lo necesario para que puedas realizar tus prácticas allí, de forma oficial, segura y con todo el respaldo institucional.
          </p>
          <p className="font-semibold text-isep-dark dark:text-white mt-6 bg-isep-primary/10 dark:bg-isep-primary/20 p-4 rounded-lg">
            🔸 En ISEP te damos la libertad de construir tu experiencia profesional desde tus intereses, con acompañamiento y facilidad para gestionar cada paso.
          </p>
        </div>
      </div>
    </div>
  );
};