"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface WelcomeVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WelcomeVideoModal = ({ isOpen, onClose }: WelcomeVideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-gradient-to-br from-isep-deep-purple to-isep-primary text-white border-0 shadow-2xl shadow-isep-primary/40">
        <DialogHeader className="text-center items-center">
          <DialogTitle className="text-3xl font-extrabold text-white mb-2">
            ¡Te Damos la Bienvenida!
          </DialogTitle>
          <p className="text-purple-200 text-lg max-w-md">
            Este video es el punto de partida de un viaje increíble. ¡Estamos emocionados de tenerte y no podemos esperar a ver todo lo que lograrás!
          </p>
        </DialogHeader>
        <div className="relative pt-[56.25%] rounded-lg overflow-hidden my-4 ring-2 ring-isep-accent/50">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/rQuSiR_wKxY?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button 
            onClick={onClose} 
            className="bg-isep-accent hover:bg-isep-accent/90 text-isep-dark font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105"
          >
            <CheckCircle className="w-6 h-6 mr-2" />
            ¡Entendido, a empezar!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};