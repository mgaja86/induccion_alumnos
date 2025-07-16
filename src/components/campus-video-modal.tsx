"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface CampusVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampusVideoModal = ({ isOpen, onClose }: CampusVideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-gradient-to-br from-isep-deep-purple to-isep-primary text-white border-0 shadow-2xl shadow-isep-primary/40">
        <DialogHeader className="text-center items-center">
          <DialogTitle className="text-3xl font-extrabold text-white mb-2">
            Explorando tu Campus Virtual
          </DialogTitle>
          <p className="text-purple-200 text-lg max-w-md">
            Este video te guiará a través de nuestro campus virtual, mostrándote cómo navegar, encontrar tus cursos y aprovechar al máximo todas las herramientas a tu disposición. ¡Prepárate para dominar tu entorno de aprendizaje!
          </p>
        </DialogHeader>
        <div className="aspect-video rounded-lg overflow-hidden my-4 ring-2 ring-isep-accent/50">
          <iframe
            width="100%"
            height="100%"
            src="https://iframe.mediadelivery.net/play/273279/09f7b914-ecc1-4317-b5f8-6fbd1850606c?autoplay=true"
            title="Campus Virtual Video Player"
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
            ¡Excelente, lo tengo!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};