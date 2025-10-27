"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface SurveyCertificateVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SurveyCertificateVideoModal = ({ isOpen, onClose }: SurveyCertificateVideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-gradient-to-br from-isep-deep-purple to-isep-primary text-white border-0 shadow-2xl shadow-isep-primary/40">
        <DialogHeader className="text-center items-center">
          <DialogTitle className="text-3xl font-extrabold text-white mb-2">
            Encuesta de Satisfacción y Certificado
          </DialogTitle>
          <p className="text-purple-200 text-lg max-w-md">
            Tu opinión es muy importante. Aprende cómo completar la encuesta de satisfacción y obtener tu certificado.
          </p>
        </DialogHeader>
        <div className="relative pt-[56.25%] rounded-lg overflow-hidden my-4 ring-2 ring-isep-accent/50">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://iframe.mediadelivery.net/embed/273279/bf47b590-23f0-4158-98ae-0f7c4af6c37a?autoplay=false&loop=false&muted=false&preload=false&responsive=true"
            loading="lazy"
            title="Encuesta y Certificado Video Player"
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
            ¡Listo!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};