"use client";

import { useState } from "react";
import { CalendarCheck, Compass, GraduationCap, Library, Mail, Phone, User, Video } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { ActionCard } from "@/components/action-card";
import { ProgressProvider, useProgress } from "@/context/progress-context";
import { OnboardingProgressBar } from "@/components/progress-bar";
import { WelcomeVideoModal } from "@/components/welcome-video-modal";

function WelcomeContent() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { completedSteps, completeStep } = useProgress();

  const handleCloseVideo = () => {
    setIsVideoModalOpen(false);
    completeStep('welcomeVideo');
  };

  return (
    <>
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
          <OnboardingProgressBar />
          {/* Main content area with new retro style */}
          <div className="bg-gradient-to-br from-isep-dark via-isep-deep-purple to-isep-primary text-white p-8 sm:p-12 rounded-3xl shadow-2xl shadow-[#7848FF]/40">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              
              {/* Left Column (Welcome Message) */}
              <div className="lg:col-span-1 text-center lg:text-left">
                <GraduationCap className="h-16 w-16 text-isep-accent mb-4 mx-auto lg:mx-0 drop-shadow-[0_0_8px_rgba(255,127,29,0.7)]" />
                <h2 className="text-4xl font-extrabold mb-4 leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  ¡Desbloquea Tu Potencial!
                </h2>
                <p className="text-lg text-purple-200">
                  Cada paso que das te acerca a tus metas. ¡Completa tu inducción y prepárate para un futuro brillante y lleno de éxitos!
                </p>
              </div>

              {/* Right Column (Action Cards) */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <ActionCard icon={Video} title="Video de Bienvenida" onClick={() => setIsVideoModalOpen(true)} isCompleted={completedSteps.has('welcomeVideo')} />
                  <ActionCard icon={Compass} title="Jornada de Orientación" isCompleted={completedSteps.has('orientation')} />
                  <ActionCard icon={CalendarCheck} title="Revisa tu Horario" isCompleted={completedSteps.has('schedule')} />
                  <ActionCard icon={Library} title="Explora Recursos" isCompleted={completedSteps.has('resources')} />
                  <ActionCard icon={Mail} title="Contacta a Soporte" isCompleted={completedSteps.has('support')} />
                  <ActionCard icon={Phone} title="Llámanos" isCompleted={completedSteps.has('contact')} />
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-center py-8">
          <MadeWithDyad />
        </footer>
      </div>
      <WelcomeVideoModal isOpen={isVideoModalOpen} onClose={handleCloseVideo} />
    </>
  );
}

export default function WelcomePage() {
  return (
    <ProgressProvider>
      <WelcomeContent />
    </ProgressProvider>
  );
}