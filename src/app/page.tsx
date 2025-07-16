import { CalendarCheck, Compass, GraduationCap, Library, Mail, Phone, Video } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function WelcomePage() {
  return (
    <div className="bg-isep-dark text-white min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Universidad <span className="text-isep-accent">Isep</span>
        </h1>
        <a href="#" className="bg-isep-primary hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Portal del Estudiante
        </a>
      </header>

      <main className="container mx-auto px-6 py-16 sm:py-24">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <GraduationCap className="mx-auto h-16 w-16 text-isep-accent mb-4" />
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
            ¡Bienvenido a la Familia Isep!
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Estamos increíblemente felices de que te unas a nuestra comunidad. Tu viaje hacia el éxito profesional comienza hoy.
          </p>
          <button className="bg-isep-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
            Comienza tu Aventura
          </button>
        </section>

        {/* Next Steps Section */}
        <section className="py-20">
          <div className="text-center mb-16 px-6">
            <h3 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-isep-primary to-isep-accent text-transparent bg-clip-text">
              Tu Aventura Isep Comienza Ahora
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Sigue estos pasos para un inicio de semestre exitoso y sin contratiempos.
            </p>
          </div>

          <div className="container mx-auto px-6">
            <div className="relative flex flex-col gap-12 pl-14">
              {/* Vertical Line */}
              <div className="absolute left-5 top-0 w-1 h-full bg-isep-primary/30 rounded-full"></div>

              {/* Step 1 */}
              <div className="relative opacity-0 animate-timeline-item-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="absolute left-5 top-0 w-10 h-10 rounded-full bg-isep-dark border-2 border-isep-accent flex items-center justify-center transform -translate-x-1/2">
                  <Compass className="w-5 h-5 text-isep-accent" />
                </div>
                <div className="bg-gray-900/20 p-6 rounded-lg border border-isep-primary/30">
                  <h4 className="font-bold text-xl mb-2 text-isep-primary">1. Jornada de Orientación</h4>
                  <p className="text-gray-400">Únete al evento de bienvenida virtual. Conocerás a tus profesores, tutores y compañeros. ¡Es el punto de partida perfecto!</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative opacity-0 animate-timeline-item-fade-in" style={{ animationDelay: '300ms' }}>
                <div className="absolute left-5 top-0 w-10 h-10 rounded-full bg-isep-dark border-2 border-isep-accent flex items-center justify-center transform -translate-x-1/2">
                  <Video className="w-5 h-5 text-isep-accent" />
                </div>
                <div className="bg-gray-900/20 p-6 rounded-lg border border-isep-primary/30">
                  <h4 className="font-bold text-xl mb-2 text-isep-primary">2. Accede al Campus Virtual</h4>
                  <p className="text-gray-400 mb-4">Tu centro de aprendizaje. Mira este video para aprender a ingresar y encontrar todo lo que necesitas:</p>
                  <div className="aspect-video overflow-hidden rounded-lg border border-isep-accent/30">
                    <iframe
                      className="w-full h-full"
                      src="https://iframe.mediadelivery.net/play/273279/09f7b914-ecc1-4317-b5f8-6fbd1850606c"
                      title="Cómo ingresar al campus virtual"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative opacity-0 animate-timeline-item-fade-in" style={{ animationDelay: '500ms' }}>
                <div className="absolute left-5 top-0 w-10 h-10 rounded-full bg-isep-dark border-2 border-isep-accent flex items-center justify-center transform -translate-x-1/2">
                  <CalendarCheck className="w-5 h-5 text-isep-accent" />
                </div>
                <div className="bg-gray-900/20 p-6 rounded-lg border border-isep-primary/30">
                  <h4 className="font-bold text-xl mb-2 text-isep-primary">3. Revisa tu Horario y Calendario</h4>
                  <p className="text-gray-400">Encuentra tus horarios de clase, fechas de exámenes y el calendario académico completo dentro del portal. ¡Organízate desde el primer día!</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative opacity-0 animate-timeline-item-fade-in" style={{ animationDelay: '700ms' }}>
                <div className="absolute left-5 top-0 w-10 h-10 rounded-full bg-isep-dark border-2 border-isep-accent flex items-center justify-center transform -translate-x-1/2">
                  <Library className="w-5 h-5 text-isep-accent" />
                </div>
                <div className="bg-gray-900/20 p-6 rounded-lg border border-isep-primary/30">
                  <h4 className="font-bold text-xl mb-2 text-isep-primary">4. Explora los Recursos</h4>
                  <p className="text-gray-400">Descubre la biblioteca digital, los servicios de bienestar estudiantil y los clubes a los que te puedes unir para enriquecer tu experiencia universitaria.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 text-center py-8 mt-16">
        <div className="container mx-auto px-6">
          <h4 className="text-xl font-bold mb-4">¿Necesitas Ayuda?</h4>
          <p className="text-gray-400 mb-4">Nuestro equipo de soporte está aquí para ti.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-6">
            <a href="mailto:soporte@isep.edu" className="flex items-center gap-2 hover:text-isep-accent transition-colors">
              <Mail className="h-5 w-5" />
              soporte@isep.edu
            </a>
            <a href="tel:+123456789" className="flex items-center gap-2 hover:text-isep-accent transition-colors">
              <Phone className="h-5 w-5" />
              +1 (234) 567-89
            </a>
          </div>
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
}