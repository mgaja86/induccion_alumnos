"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, BookText, LayoutDashboard, Library, Link, Receipt, PhoneForwarded, Video } from "lucide-react";
import { ActionCard } from "@/components/action-card";
import { ProgressProvider, useProgress } from "@/context/progress-context";
import { OnboardingProgressBar } from "@/components/progress-bar";
import { WelcomeVideoModal } from "@/components/welcome-video-modal";
import { FaqSection } from "@/components/faq-section";
import { MasterCalendarSection } from "@/components/master-calendar-section";

function OnboardingDashboard() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { completedSteps, completeStep } = useProgress();

  const handleOpenVideo = () => setIsVideoModalOpen(true);
  const handleCloseVideo = () => {
    setIsVideoModalOpen(false);
    if (!completedSteps.has('welcomeVideo')) completeStep('welcomeVideo');
  };

  const actionCards = [
    { icon: Video, title: "Video de Bienvenida", onClick: handleOpenVideo, step: 'welcomeVideo' },
    { icon: LayoutDashboard, title: "Ingresa a tu campus", onClick: () => completeStep('campusAccess'), step: 'campusAccess' },
    { icon: BookText, title: "Plan Docente", onClick: () => completeStep('teachingPlan'), step: 'teachingPlan' },
    { icon: PhoneForwarded, title: "Contacto Docente", onClick: () => completeStep('teacherContact'), step: 'teacherContact' },
    { icon: Library, title: "Contenidos", onClick: () => completeStep('contents'), step: 'contents' },
    { icon: Link, title: "Enlaces de Interés", onClick: () => completeStep('linksAndMaterials'), step: 'linksAndMaterials' },
    { icon: Award, title: "Encuesta y Certificado", onClick: () => completeStep('surveyAndCertificate'), step: 'surveyAndCertificate' },
    { icon: Receipt, title: "Módulo de Facturación", onClick: () => completeStep('billingModule'), step: 'billingModule' },
  ] as const;

  return (
    <>
      <div className="bg-gray-100 dark:bg-isep-dark min-h-screen font-[family-name:var(--font-geist-sans)]">
        {/* Header */}
        <header className="container mx-auto px-6 py-6 flex justify-center items-center border-b border-gray-200 dark:border-isep-deep-purple/50">
          <Image
            src="https://f005.backblazeb2.com/file/elearning-img/Logo-UISEP-Slogan-Color+1.png"
            alt="Logo Universidad Isep con Slogan"
            width={240}
            height={58}
            priority
          />
        </header>

        <main className="container mx-auto px-6 py-8">
          <OnboardingProgressBar />
          {/* Main content area with curved background */}
          <div className="bg-gradient-to-br from-isep-deep-purple to-isep-primary text-white p-8 sm:p-12 rounded-3xl shadow-2xl shadow-[#7848FF]/30 opacity-0 animate-zoom-in" style={{ animationDelay: '300ms' }}>
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
                  Completa tu Onboarding
                </h2>
                <p className="text-lg text-purple-200">
                  Tu viaje hacia el éxito profesional comienza hoy. Completa los siguientes pasos para empezar.
                </p>
              </div>

              {/* Right Column (Action Cards) */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {actionCards.map((card, index) => (
                    <ActionCard 
                      key={card.step}
                      icon={card.icon} 
                      title={card.title} 
                      onClick={card.onClick} 
                      isCompleted={completedSteps.has(card.step)}
                      style={{ animationDelay: `${500 + index * 100}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <MasterCalendarSection />
        <FaqSection />

        <footer className="text-center py-8">
          {/* Footer content can go here */}
        </footer>
      </div>
      <WelcomeVideoModal isOpen={isVideoModalOpen} onClose={handleCloseVideo} />
    </>
  );
}

export default function OnboardingPage() {
  return (
    <ProgressProvider>
      <OnboardingDashboard />
    </ProgressProvider>
  );
}