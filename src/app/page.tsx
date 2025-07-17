"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, BookText, LayoutDashboard, Library, Link, Receipt, PhoneForwarded, User, Video } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { ActionCard } from "@/components/action-card";
import { ProgressProvider, useProgress } from "@/context/progress-context";
import { OnboardingProgressBar } from "@/components/progress-bar";
import { WelcomeVideoModal } from "@/components/welcome-video-modal";
import { CampusVideoModal } from "@/components/campus-video-modal";
import { FaqSection } from "@/components/faq-section";

function WelcomeContent() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isCampusModalOpen, setIsCampusModalOpen] = useState(false);
  const { completedSteps, completeStep } = useProgress();

  const handleOpenVideo = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoModalOpen(false);
    if (!completedSteps.has('welcomeVideo')) {
      completeStep('welcomeVideo');
    }
  };

  const handleOpenCampusVideo = () => {
    setIsCampusModalOpen(true);
  };

  const handleCloseCampusVideo = () => {
    setIsCampusModalOpen(false);
    if (!completedSteps.has('campusAccess')) {
      completeStep('campusAccess');
    }
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-isep-dark min-h-screen font-[family-name:var(--font-geist-sans)]">
        {/* Header */}
        <header className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Image
            src="https://f005.backblazeb2.com/file/elearning-img/Logo-UISEP-Slogan-Color+1.png"
            alt="Logo Universidad Isep con Slogan"
            width={240}
            height={58}
            priority
          />
          <a href="#" className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg text-isep-dark dark:text-white font-bold py-2 px-4 rounded-full transition-all flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>Portal del Estudiante</span>
          </a>
        </header>

        <main className="container mx-auto px-6 py-8">
          <OnboardingProgressBar />
          {/* Main content area with curved background */}
          <div className="bg-gradient-to-br from-isep-deep-purple to-isep-primary text-white p-8 sm:p-12 rounded-3xl shadow-2xl shadow-[#7848FF]/30">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              
              {/* Left Column (Welcome Message) */}
              <div className="lg:col-span-1 text-center lg:text-left">
                <Image 
                  src="https://f005.backblazeb2.com/file/elearning-img/Isotipo-UISEP-W+1.png"
                  alt="Isotipo Universidad Isep"
                  width={64}
                  height={64}
                  className="h-16 w-16 mb-4 mx-auto lg:mx-0"
                />
                <h2 className="text-4xl font-extrabold mb-4 leading-tight">
                  ¡Bienvenido a la Familia Isep!
                </h2>
                <p className="text-lg text-purple-200">
                  Tu viaje hacia el éxito profesional comienza hoy. Completa los siguientes pasos para empezar.
                </p>
              </div>

              {/* Right Column (Action Cards) */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <ActionCard icon={Video} title="Video de Bienvenida" onClick={handleOpenVideo} isCompleted={completedSteps.has('welcomeVideo')} />
                  <ActionCard icon={LayoutDashboard} title="Ingresa a tu campus" onClick={handleOpenCampusVideo} isCompleted={completedSteps.has('campusAccess')} />
                  <ActionCard icon={BookText} title="Plan Docente" onClick={() => completeStep('teachingPlan')} isCompleted={completedSteps.has('teachingPlan')} />
                  <ActionCard icon={PhoneForwarded} title="Contacto Docente" onClick={() => completeStep('teacherContact')} isCompleted={completedSteps.has('teacherContact')} />
                  <ActionCard icon={Library} title="Contenidos" onClick={() => completeStep('contents')} isCompleted={completedSteps.has('contents')} />
                  <ActionCard icon={Link} title="Enlaces de Interés" onClick={() => completeStep('linksAndMaterials')} isCompleted={completedSteps.has('linksAndMaterials')} />
                  <ActionCard icon={Award} title="Encuesta y Certificado" onClick={() => completeStep('surveyAndCertificate')} isCompleted={completedSteps.has('surveyAndCertificate')} />
                  <ActionCard icon={Receipt} title="Módulo de Facturación" onClick={() => completeStep('billingModule')} isCompleted={completedSteps.has('billingModule')} />
                </div>
              </div>
            </div>
          </div>
        </main>

        <FaqSection />

        <footer className="text-center py-8">
          <MadeWithDyad />
        </footer>
      </div>
      <WelcomeVideoModal isOpen={isVideoModalOpen} onClose={handleCloseVideo} />
      <CampusVideoModal isOpen={isCampusModalOpen} onClose={handleCloseCampusVideo} />
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