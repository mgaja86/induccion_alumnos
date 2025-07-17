"use client";

import { Target } from "lucide-react";

export const EvaluationSection = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-isep-deep-purple/30 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
            <Target className="w-12 h-12 text-isep-accent mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-isep-dark dark:text-white">
              Evaluación clara, justa y pensada para tu aprendizaje
            </h2>
        </div>
        <div className="text-gray-600 dark:text-gray-300 space-y-4 text-lg text-left">
          <p>
            En Universidad ISEP, tu evaluación está diseñada para apoyarte en todo momento. Tanto las actividades que realizas en línea como aquellas que implican entregas más elaboradas se enfocan en reflejar tu verdadero avance y darte oportunidades para mejorar.
          </p>
          <p>
            Contarás con dos intentos por actividad, lo que te permite aprender de tus errores y mejorar tu calificación sin presión. Además, muchas de las evaluaciones se corrigen automáticamente, así que tendrás tu resultado al instante, sin tiempos de espera.
          </p>
          <p>
            Cuando se trata de tareas más complejas, como análisis de casos o talleres, contarás con una rúbrica clara y transparente para que sepas exactamente qué se espera de ti y cómo puedes alcanzar el mejor resultado.
          </p>
          <p>
            Y si en algún momento se presenta un imprevisto, tienes la posibilidad de solicitar una extensión de tiempo directamente con tu tutor, quien evaluará tu situación con cercanía y flexibilidad.
          </p>
          <p className="font-semibold text-isep-dark dark:text-white mt-6 bg-isep-primary/10 dark:bg-isep-primary/20 p-4 rounded-lg">
            Lo más importante: tú estás en el centro del proceso, y cada herramienta está pensada para ayudarte a avanzar, aprender a tu ritmo y alcanzar tus objetivos académicos con claridad y confianza.
          </p>
        </div>
      </div>
    </div>
  );
};