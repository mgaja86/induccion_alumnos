"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, Clock, MessageSquare, KeyRound } from "lucide-react";

export const FaqSection = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-center text-isep-dark dark:text-white mb-8">
        Preguntas Frecuentes
      </h2>
      <div className="max-w-4xl mx-auto bg-white dark:bg-isep-deep-purple/30 p-6 rounded-2xl shadow-lg">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
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
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold text-isep-dark dark:text-white hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <MessageSquare className="w-8 h-8 text-isep-primary flex-shrink-0" />
                <span>¿Cómo puedo resolver mis dudas académicas?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 dark:text-gray-300 pt-4 pl-12">
              <p className="mb-4">
                Para resolver tus dudas académicas, tienes varias opciones disponibles dentro de la plataforma. Aquí te explicamos cómo acceder a ellas:
              </p>
              <h4 className="font-semibold text-isep-dark dark:text-white mb-2">Contactar a tu tutor:</h4>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>Ingresa al módulo o materia en la que tienes dudas.</li>
                <li>Da clic en "Contacto Docente".</li>
                <li>Completa los datos solicitados para enviar tu solicitud de contacto con el tutor.</li>
              </ol>
              <h4 className="font-semibold text-isep-dark dark:text-white mb-2">Asesoría a través de agente automático:</h4>
              <p className="mb-4">
                En el mismo espacio, encontrarás un agente disponible para responder tus dudas académicas. Este agente está disponible 24 horas al día, 7 días a la semana, por llamada, para ofrecerte respuestas inmediatas y resolver tus inquietudes.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger className="text-lg font-semibold text-isep-dark dark:text-white hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <KeyRound className="w-8 h-8 text-isep-primary flex-shrink-0" />
                <span>Problemas de acceso a la plataforma, restablecer contraseña</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 dark:text-gray-300 pt-4 pl-12">
              <p className="mb-4">
                Primero, es importante que revises que tu conexión a internet sea estable y que estés ingresando desde un navegador actualizado como Google Chrome, Mozilla Firefox o Safari.
              </p>
              <p className="mb-4">
                Si ya lo intentaste y sigue sin funcionar, prueba ingresando desde una ventana en modo incógnito.
              </p>
              <p className="mb-4">
                Verifica que estás ingresando en el enlace correcto de la plataforma: <a href="https://app.universidadisep.com/" target="_blank" rel="noopener noreferrer" className="text-isep-primary hover:underline font-semibold">https://app.universidadisep.com/</a>
              </p>
              <h4 className="font-semibold text-isep-dark dark:text-white mb-2">Restablecimiento de Contraseña</h4>
              <p className="mb-4">
                Si no recuerdas tu contraseña o no la reconoce:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>Ve a la página de inicio de sesión del campus.</li>
                <li>Haz clic en "¿Olvidaste tu contraseña?".</li>
                <li>Ingresa tu correo electrónico y revisa tu bandeja de entrada.</li>
                <li>Busca un correo con el asunto "Restablecimiento de contraseña" y sigue las instrucciones paso a paso.</li>
                <li>Si no ves el correo en unos minutos, revisa la carpeta de spam o correo no deseado. A veces se esconde ahí. 😅</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};