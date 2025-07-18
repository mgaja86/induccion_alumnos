"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { RectorWelcome } from "@/components/rector-welcome";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleNavigate = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push('/onboarding');
    }, 600); // Match animation duration
  };

  return (
    <>
      {/* Pantalla de transición animada */}
      <div
        className={`fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-isep-dark transition-opacity duration-300 ${
          isExiting ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="animate-zoom-in">
          <Rocket className="h-16 w-16 animate-pulse text-isep-accent" />
        </div>
      </div>

      <div
        className={`bg-gray-100 dark:bg-isep-dark min-h-screen font-[family-name:var(--font-geist-sans)] ${
          isExiting ? "animate-zoom-out" : ""
        }`}
      >
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
          <RectorWelcome />
          <div className="text-center mt-8 mb-8">
            <Button
              onClick={handleNavigate}
              size="lg"
              className="bg-isep-accent hover:bg-isep-accent/90 text-isep-dark font-bold text-xl px-12 py-8 rounded-full transition-transform hover:scale-105 shadow-lg shadow-isep-accent/30"
            >
              <Rocket className="w-7 h-7 mr-3" />
              Iniciar mi aventura con Isep
            </Button>
          </div>
        </main>

        <footer className="text-center py-8">
          {/* Footer content can go here */}
        </footer>
      </div>
    </>
  );
}