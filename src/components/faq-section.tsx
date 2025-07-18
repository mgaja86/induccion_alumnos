"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, Clock, MessageSquare, KeyRound, Users, Award, Target, FolderKanban, Briefcase, Badge, HeartHandshake } from "lucide-react";

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
          <AccordionItem value="item-3">
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
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold text-isep-dark dark:text-white hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Users className="w-8 h-8 text-isep-primary flex-shrink-0" />
                <span>¿Cómo ingresar a Microsoft Teams?</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 dark:text-gray-300 pt-4 pl-12">
              <p className="mb-4">
                Para acceder a Microsoft Teams, es necesario utilizar las credenciales proporcionadas en tu correo de bienvenida. Recuerda que el dominio de tu correo institucional es: <span className="font-semibold text-isep-dark dark:text-white">@alumnisep.com</span>.
              </p>
              <h4 className="font-semibold text-isep-dark dark:text-white mb-2">Pasos para ingresar:</h4>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Ubica tu correo de bienvenida en la bandeja de entrada, correo no deseado o spam de tu email.</li>
                <li>Copia tu usuario y contraseña proporcionados en el correo.</li>
                <li>Accede a Microsoft Teams desde el navegador o la aplicación.</li>
                <li>Inicia sesión con las credenciales indicadas.</li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-semibold text-isep-dark dark:text-white hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Award className="w-8 h-8 text-isep-primary flex-shrink-0" />
                <span>Solicita tus constancias y certificados de forma fácil, directa y sin complicaciones</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 dark:text-gray-300 pt-4 pl-12">
              <p className="mb-4">
                En Universidad ISEP, tienes la ventaja de gestionar por tu cuenta cualquier constancia o certificado académico que necesites, de forma 100% digital, rápida y accesible desde tu plataforma. Ya no necesitas enviar correos, hacer filas o esperar respuestas: tú decides cuándo y qué documento solicitar.
              </p>
              <p className="mb-4">
                Esto te permite tener el control total sobre tus trámites, descargar tus documentos al instante y usarlos para cualquier gestión escolar, laboral o personal, desde donde estés y cuando lo necesites.
              </p>
              <p>
                Además, el sistema es intuitivo y está diseñado para que la experiencia sea clara y eficiente, sin depender de intermediarios ni procesos lentos. Así garantizamos que puedas enfocarte en lo más importante: tu formación.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-semibold text-isep-dark dark:text-white hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Target className="w-8 h-8 text-isep-primary flex-shrink-0" />
                <span>Evaluación clara, justa y pensada para tu aprendizaje</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 dark:text-gray-300 pt-4 pl-12">
              <p className="mb-4">
                En Universidad ISEP, tu evaluación está diseñada para apoyarte en todo momento. Tanto las actividades que realizas en línea como aquellas que implican entregas más elaboradas se enfocan en reflejar tu verdadero avance y darte oportunidades para mejorar.
              </p>
              <p className="mb-4">
                Contarás con dos intentos por actividad, lo que te permite aprender de tus errores y mejorar tu calificación sin presión. Además, muchas de las evaluaciones se corrigen automáticamente, así que tendrás tu resultado al instante, sin tiempos de espera.
              </p>
              <p className="mb-4">
                Cuando se trata de tareas más complejas, como análisis de casos o talleres, contarás con una rúbrica clara y transparente para que sepas exactamente qué se espera de ti y cómo puedes alcanzar el mejor resultado.
              </p>
              <p className="mb-4">
                Y si en algún momento se presenta un imprevisto, tienes la posibilidad de solicitar una extensión de tiempo directamente con tu tutor, quien evaluará tu situación con cercanía y flexibilidad.
              </p>
              <p className="font-semibold text-isep-dark dark:text-white mt-6 bg-isep-primary/10 dark:bg-isep-primary/20 p-4 rounded-lg">
                Lo más importante: tú estás en el centro del proceso, y cada herramienta está pensada para ayudarte a avanzar, aprender a tu ritmo y alcanzar tus objetivos académicos con claridad y confianza.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg font-semibold text-isep-dark dark:text-white hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <FolderKanban className="w-8 h-8 text-isep-primary flex-shrink-0" />
                <span>Tus contenidos siempre organizados y accesibles</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 dark:text-gray-300 pt-4 pl-12">
              <p className="mb-4">
                En Universidad ISEP, todo lo que necesitas para avanzar en tu módulo está perfectamente organizado dentro de tu plataforma. Desde que ingresas, encuentras un entorno claro, intuitivo y adaptado para que puedas estudiar de manera ágil y sin complicaciones.
              </p>
              <p className="mb-4">
                Tendrás acceso directo a materiales de estudio en línea, documentos descargables y recursos complementarios que enriquecen tu experiencia y te ayudan a prepararte mejor. La estructura está pensada para que no pierdas tiempo buscando, y puedas enfocarte en aprender y avanzar.
              </p>
              <p className="mb-4">
                Además, puedes consultar gran parte del contenido sin conexión, lo que te da libertad para estudiar donde quieras y cuando quieras, incluso si no tienes internet en ese momento.
              </p>
              <p className="mb-4">
                Y si en algún momento algo no se visualiza bien, no te preocupes: la plataforma está diseñada para adaptarse fácilmente a tus ajustes de idioma y pantalla. Solo asegúrate de tener el idioma correcto seleccionado y, si es necesario, ajustar la vista para aprovechar al máximo cada recurso.
              </p>
              <p className="font-semibold text-isep-dark dark:text-white mt-6 bg-isep-primary/10 dark:bg-isep-primary/20 p-4 rounded-lg">
                🔸 Tu aprendizaje no se detiene. Aquí tienes todo lo necesario para avanzar, a tu ritmo y con autonomía.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg font-semibold text-isep-dark dark:text-white hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Briefcase className="w-8 h-8 text-isep-primary flex-shrink-0" />
                <span>¿Quieres hacer tus prácticas en una empresa o institución de tu interés? ¡En ISEP te apoyamos para lograrlo!</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 dark:text-gray-300 pt-4 pl-12">
              <p className="mb-4">
                En Universidad ISEP, tienes la posibilidad de gestionar tus prácticas profesionales en la empresa o institución que tú elijas, siempre que cumpla con los requisitos necesarios.
              </p>
              <p className="mb-4">
                Si ya tienes un lugar en mente, el proceso es muy sencillo y diseñado para darte autonomía, pero con todo el respaldo de nuestra área de vinculación. No importa si la institución aún no está afiliada, te ayudamos a establecer el convenio de manera formal.
              </p>
              <p className="mb-4">
                Solo necesitas compartir algunos datos clave sobre la empresa y la persona encargada, y nuestro equipo se encargará de coordinar lo necesario para que puedas realizar tus prácticas allí, de forma oficial, segura y con todo el respaldo institucional.
              </p>
              <p className="font-semibold text-isep-dark dark:text-white mt-6 bg-isep-primary/10 dark:bg-isep-primary/20 p-4 rounded-lg">
                🔸 En ISEP te damos la libertad de construir tu experiencia profesional desde tus intereses, con acompañamiento y facilidad para gestionar cada paso.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="text-lg font-semibold text-isep-dark dark:text-white hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <Badge className="w-8 h-8 text-isep-primary flex-shrink-0" />
                <span>Tu credencial ISEP: más que un documento, una llave de acceso a beneficios</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 dark:text-gray-300 pt-4 pl-12">
              <p className="mb-4">
                En Universidad ISEP, puedes solicitar tu credencial de estudiante en formato digital de forma sencilla y rápida. Este documento no solo te identifica como parte de nuestra comunidad académica, sino que te abre la puerta a una amplia variedad de beneficios dentro y fuera del ámbito educativo.
              </p>
              <p className="mb-4">
                Contar con tu credencial puede hacer una gran diferencia: en muchas ciudades, te permite acceder a tarifas especiales en transporte público, descuentos en museos, cines, librerías, y también aprovechar convenios con restaurantes, gimnasios y comercios locales.
              </p>
              <p className="mb-4">
                Además, si resides en una zona donde existen programas de apoyo estudiantil, como servicios de salud u orientación psicológica, es común que se solicite una credencial vigente para acceder a ellos.
              </p>
              <p className="mb-4">
                Lo mejor es que puedes gestionarla desde donde estés y recibirla en formato digital. Solo necesitas contar con una buena fotografía y nosotros nos encargamos del resto.
              </p>
              <p className="font-semibold text-isep-dark dark:text-white mt-6 bg-isep-primary/10 dark:bg-isep-primary/20 p-4 rounded-lg">
                🔸 Gestionar tu credencial es una forma de aprovechar al máximo tu vida universitaria y todos los beneficios que vienen con ella.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10" className="border-b-0">
            <AccordionTrigger className="text-lg font-semibold text-isep-dark dark:text-white hover:no-underline">
              <div className="flex items-center gap-3 text-left">
                <HeartHandshake className="w-8 h-8 text-isep-primary flex-shrink-0" />
                <span className="text-left">Beneficio exclusivo: Accede a atención psicológica gratuita con ISEP CLINIC</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600 dark:text-gray-300 pt-4 pl-12">
              <p className="mb-4">
                En Universidad ISEP, tu bienestar es una prioridad. Por eso, como parte de nuestra comunidad, tienes acceso a ISEP CLINIC, un programa de atención psicológica en línea, totalmente gratuito, creado especialmente para apoyar tu salud emocional.
              </p>
              <h4 className="font-semibold text-isep-dark dark:text-white mb-2">💙 ¿Qué es ISEP CLINIC?</h4>
              <p className="mb-4">
                ISEP CLINIC es un programa de acompañamiento terapéutico brindado por estudiantes avanzados de la Maestría en Psicología Clínica de Universidad ISEP, quienes cuentan con experiencia profesional y realizan sus prácticas supervisadas ofreciendo terapia gratuita y de calidad.
              </p>
              <h4 className="font-semibold text-isep-dark dark:text-white mb-2">🧠 ¿Cómo funciona?</h4>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Las sesiones son totalmente en línea y se realizan mediante plataformas accesibles, elegidas en conjunto por el paciente y el terapeuta.</li>
                <li>Cada persona recibe un mínimo de 15 sesiones, con posibilidad de extender el tratamiento si se considera necesario.</li>
                <li>Todas las sesiones están supervisadas por profesionales expertos, garantizando así una atención ética y comprometida.</li>
              </ul>
              <h4 className="font-semibold text-isep-dark dark:text-white mb-2">🌍 ¿Quién puede acceder?</h4>
              <p className="mb-4">
                ¡Cualquier persona interesada en recibir apoyo psicológico puede hacerlo! No necesitas cumplir con ningún requisito específico para acceder al servicio.
              </p>
              <h4 className="font-semibold text-isep-dark dark:text-white mb-2">📅 ¿Cómo agendar una cita?</h4>
              <p className="mb-4">
                Puedes registrarte de forma muy sencilla a través del siguiente enlace:
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block bg-isep-accent hover:bg-isep-accent/90 text-isep-dark font-bold py-2 px-4 rounded-lg transition-colors">
                👉 Haz clic aquí para solicitar tu cita
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};