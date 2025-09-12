"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, CalendarDays } from "lucide-react";

export const MasterCalendarSection = () => {
  return (
    <div className="container mx-auto px-6 py-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
      <div className="max-w-4xl mx-auto bg-white dark:bg-isep-deep-purple/30 p-8 sm:p-12 rounded-2xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-isep-dark dark:text-white mb-4">
            ¿Cómo saber si vas bien en tus materias?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Sabemos que estudiar a tu ritmo 24/7 puede generar dudas sobre si tu avance es el correcto. Por eso, hemos creado un calendario modelo que te ayudará a orientarte y sentirte más seguro con tu progreso.
          </p>
        </div>

        <div className="bg-isep-primary/10 dark:bg-isep-primary/20 p-6 rounded-lg mb-8">
          <p className="text-isep-dark dark:text-white mb-4 font-medium">
            Este calendario no es obligatorio, pero sí es una guía sugerida que te permitirá:
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-isep-primary mr-3 mt-1 flex-shrink-0" />
              <span>Ver el avance ideal por semana o por materia.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-isep-primary mr-3 mt-1 flex-shrink-0" />
              <span>Comparar tu progreso con el ritmo estimado.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-isep-primary mr-3 mt-1 flex-shrink-0" />
              <span>Planificar mejor tus tiempos para no quedarte atrás.</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl text-isep-dark dark:text-white mb-3">
            📍 ¿Cómo usarlo?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Accede al calendario y selecciona tu formación. Si vas conforme a esas fechas, ¡vas excelente! Si te atrasaste, no pasa nada: aún puedes reorganizarte. El objetivo es ayudarte a tener claridad sobre tu avance y reducir la incertidumbre.
          </p>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="group bg-isep-accent hover:bg-isep-accent/90 text-isep-dark font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105 shadow-lg shadow-isep-accent/30">
            <a href="https://calendario.universidadisep.com/" target="_blank" rel="noopener noreferrer">
              <CalendarDays className="w-6 h-6 mr-3 transition-transform group-hover:rotate-12" />
              Ir a mi Calendario Maestro
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};