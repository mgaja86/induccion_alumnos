"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface WelcomeVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WelcomeVideoModal = ({ isOpen, onClose }: WelcomeVideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-white dark:bg-isep-dark">
        <DialogHeader>
          <DialogTitle className="text-isep-dark dark:text-white text-2xl">¡Bienvenido a Isep!</DialogTitle>
        </DialogHeader>
        <div className="aspect-video rounded-lg overflow-hidden my-4">
          {/* Placeholder for YouTube video */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // ¡Un video de bienvenida clásico! ;)
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <DialogFooter>
          <Button onClick={onClose} className="bg-isep-primary hover:bg-isep-primary/90 text-white">Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};