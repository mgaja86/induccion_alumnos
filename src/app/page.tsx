import { CalendarCheck, Compass, GraduationCap, Library, Mail, Phone, User, Video } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { ActionCard } from "@/components/action-card";

export default function WelcomePage() {
  return (
    <div className="bg-gray-100 dark:bg-isep-dark min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-isep-dark dark:text-white">
          Universidad <span className="text-isep-primary">Isep</span>
        </h1>
        <a href="#" className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg text-isep-dark dark:text-white font-bold py-2 px-4 rounded-full transition-all flex items-center gap-2">
          <User className="w-5 h-5" />
          <span>Portal del Estudiante</span>
        </a>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Main content area with curved background */}
        <div className="bg-gradient-to-br from-isep-primary/90 to-purple-700/90 backdrop-blur-lg border border-white/20 text-white p-8 sm:p-12 rounded-3xl shadow-2xl shadow-purple-500/50">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            
            {/* Left Column (Welcome Message) */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <GraduationCap className="h-16 w-16 text-isep-accent mb-4 mx-auto lg:mx-0" />
              <h2 className="text-4xl font-extrabold mb-4 leading-tight">
                ¡Bienvenido a la Familia Isep!
              </h2>
              <p className="text-lg text-purple-200">
                Tu viaje hacia el éxito profesional comienza hoy. Explora los siguientes pasos para empezar.
              </p>
            </div>

            {/* Right Column (Action Cards) */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <ActionCard icon={Compass} title="Jornada de Orientación" />
                <ActionCard icon={CalendarCheck} title="Revisa tu Horario" />
                <ActionCard icon={Library} title="Explora Recursos" />
                <ActionCard icon={Video} title="Video Institucional" />
                <ActionCard icon={Mail} title="Contacta a Soporte" />
                <ActionCard icon={Phone} title="Llámanos" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-8">
        <MadeWithDyad />
      </footer>
    </div>
  );
}