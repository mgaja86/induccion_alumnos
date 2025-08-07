"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface TeacherContactVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherContactVideoModal = ({ isOpen, onClose }: TeacherContactVideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-gradient-to-br from-isep-deep-purple to-isep-primary text-white border-0 shadow-2xl shadow-isep-primary/40">
        <DialogHeader className="text-center items-center">
          <DialogTitle className="text-3xl font-extrabold text-white mb-2">
            Contacta con tu Docente
          </DialogTitle>
          <p className="text-purple-200 text-lg max-w-md">
            Este video te muestra cómo puedes comunicarte con tus docentes para resolver dudas académicas y recibir orientación.
          </p>
        </DialogHeader>
        <div className="relative pt-[56.25%] rounded-lg overflow-hidden my-4 ring-2 ring-isep-accent/50">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://iframe.mediadelivery.net/embed/273279/df0887e3-9029-4310-b1ec-69ffc9398777?autoplay=false&loop=false&muted=false&preload=false&responsive=true"
            loading="lazy"
            title="Contacto Docente Video Player"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
            allowFullScreen={true}
            frameBorder="0"
          ></iframe>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button 
            onClick={onClose} 
            className="bg-isep-accent hover:bg-isep-accent/90 text-isep-dark font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105"
          >
            <CheckCircle className="w-6 h-6 mr-2" />
            ¡Entendido!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};