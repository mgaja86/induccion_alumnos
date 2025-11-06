"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Video, 
  LayoutDashboard, 
  Megaphone, 
  GraduationCap, 
  Receipt, 
  HelpCircle, 
  MessageSquare,
  FolderKanban,
  type LucideIcon 
} from "lucide-react";
import { ActionCard } from "@/components/action-card";
import { ProgressProvider, useProgress, type Step } from "@/context/progress-context";
import { OnboardingProgressBar } from "@/components/progress-bar";
import { WelcomeVideoModal } from "@/components/welcome-video-modal";
import { CampusVideoSheet } from "@/components/campus-video-sheet";
import { WorkshopsAnnouncementsModal } from "@/components/workshops-announcements-modal";
import { ThesisPracticesModal } from "@/components/thesis-practices-modal";
import { BillingServicesModal } from "@/components/billing-services-modal";
import { RulesDoubtsModal } from "@/components/rules-doubts-modal";
import { ContactActivitiesModal } from "@/components/contact-activities-modal";
import { DocumentFileModal } from "@/components/document-file-modal";
import { FaqSection } from "@/components/faq-section";
import { MasterCalendarSection } from "@/components/master-calendar-section";

type ModalType = Step | null;

function OnboardingDashboard() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const { completedSteps, completeStep } = useProgress();

  const handleOpenModal = (modal: ModalType) => {
    if (modal) setActiveModal(modal);
  };

  const handleCloseModal = () => {
    if (activeModal && !completedSteps.has(activeModal)) {
      completeStep(activeModal);
    }
    setActiveModal(null);
  };

  const actionCards: { icon: LucideIcon; title: string; onClick: () => void; step: Step }[] = [
    { icon: Video, title: "BIENVENIDA", onClick: () => handleOpenModal('welcome'), step: 'welcome' },
    { icon: LayoutDashboard, title: "INGRESA A TU CAMPUS", onClick: () => handleOpenModal('campusAccess'), step: 'campusAccess' },
    { icon: Megaphone, title: "TALLERES Y TABLON DE ANUNCIOS", onClick: () => handleOpenModal('workshops'), step: 'workshops' },
    { icon: GraduationCap, title: "REVISION DE TESIS Y PRACTICAS", onClick: () => handleOpenModal('thesis'), step: 'thesis' },
    { icon: Receipt, title: "FACTURAS Y SERVICIOS ADICIONALES", onClick: () => handleOpenModal('billing'), step: 'billing' },
    { icon: HelpCircle, title: "NORMATIVA Y MIS DUDAS", onClick: () => handleOpenModal('rules'), step: 'rules' },
    { icon: MessageSquare, title: "CONTACTO DOCENTE Y ACTIVIDADES EVALUATIVAS", onClick: () => handleOpenModal('contactActivities'), step: 'contactActivities' },
    { icon: FolderKanban, title: "EXPEDIENTE DE DOCUMENTOS", onClick: () => handleOpenModal('documentFile'), step: 'documentFile' },
  ];

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
      
      {/* Modals */}
      <WelcomeVideoModal isOpen={activeModal === 'welcome'} onClose={handleCloseModal} />
      <CampusVideoSheet isOpen={activeModal === 'campusAccess'} onClose={handleCloseModal} />
      <WorkshopsAnnouncementsModal isOpen={activeModal === 'workshops'} onClose={handleCloseModal} />
      <ThesisPracticesModal isOpen={activeModal === 'thesis'} onClose={handleCloseModal} />
      <BillingServicesModal isOpen={activeModal === 'billing'} onClose={handleCloseModal} />
      <RulesDoubtsModal isOpen={activeModal === 'rules'} onClose={handleCloseModal} />
      <ContactActivitiesModal isOpen={activeModal === 'contactActivities'} onClose={handleCloseModal} />
      <DocumentFileModal isOpen={activeModal === 'documentFile'} onClose={handleCloseModal} />
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