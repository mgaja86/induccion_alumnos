import { BookOpen, CalendarDays, Compass, GraduationCap, Mail, Phone } from "lucide-react";
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

      <main className="container mx-auto px-6 py-16 sm:py-24 text-center">
        {/* Hero Section */}
        <section className="mb-20">
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
        <section className="py-16 bg-gray-900/20 rounded-xl">
          <h3 className="text-3xl font-bold mb-2">Tus Próximos Pasos</h3>
          <p className="text-gray-400 mb-12">Aquí tienes todo lo que necesitas para empezar con el pie derecho.</p>
          <div className="grid md:grid-cols-3 gap-8 text-left px-4">
            {/* Card 1 */}
            <div className="bg-isep-dark p-6 rounded-lg border border-isep-primary/30">
              <Compass className="h-10 w-10 text-isep-primary mb-4" />
              <h4 className="font-bold text-xl mb-2">Jornada de Orientación</h4>
              <p className="text-gray-400">No te pierdas el evento de bienvenida donde conocerás a tus profesores y compañeros.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-isep-dark p-6 rounded-lg border border-isep-primary/30">
              <BookOpen className="h-10 w-10 text-isep-primary mb-4" />
              <h4 className="font-bold text-xl mb-2">Accede a tus Cursos</h4>
              <p className="text-gray-400">Explora el campus virtual para encontrar tus materiales de estudio y horarios.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-isep-dark p-6 rounded-lg border border-isep-primary/30">
              <CalendarDays className="h-10 w-10 text-isep-primary mb-4" />
              <h4 className="font-bold text-xl mb-2">Calendario Académico</h4>
              <p className="text-gray-400">Marca las fechas importantes: inicio de clases, exámenes y vacaciones.</p>
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