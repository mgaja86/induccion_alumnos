"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, Clock } from "lucide-react";

export const FaqSection = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-center text-isep-dark dark:text-white mb-8">
        Preguntas Frecuentes
      </h2>
      <div className="max-w-4xl mx-auto bg-white dark:bg-isep-deep-purple/30 p-6 rounded-2xl shadow-lg">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="text-lg font-semibold text-isep-dark dark:text-white hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <GraduationCap className="w-8 h-8 text-isep-primary flex-shrink-0" />
                <span>¿Dónde puedo ver la información de masterclass, talleres y grabaciones?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 dark:text-gray-300 pt-4 pl-12">
              <p className="mb-4">
                Toda la información relacionada con masterclass, talleres y grabaciones está disponible en la plataforma, dentro del módulo "TALLERES". Ahí encontrarás:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Fechas y horarios de próximas sesiones.</li>
                <li>Enlaces de acceso a eventos en vivo.</li>
                <li>Grabaciones de sesiones anteriores.</li>
              </ul>
              <h4 className="font-semibold text-isep-dark dark:text-white mb-2">Pasos para Acceder:</h4>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>Ingresa a tu plataforma con tu usuario y contraseña.</li>
                <li>Busca la sección o pestaña llamada "TALLERES".</li>
                <li>Explora el contenido organizado.</li>
              </ol>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-isep-primary/10 dark:bg-isep-primary/20">
                <Clock className="w-5 h-5 text-isep-primary" />
                <p className="font-medium text-sm">
                  La grabación suele procesarse en un lapso de 24 horas.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};