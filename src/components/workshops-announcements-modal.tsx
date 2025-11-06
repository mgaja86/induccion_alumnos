"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface WorkshopsAnnouncementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkshopsAnnouncementsModal = ({ isOpen, onClose }: WorkshopsAnnouncementsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-gradient-to-br from-isep-deep-purple to-isep-primary text-white border-0 shadow-2xl shadow-isep-primary/40">
        <DialogHeader className="text-center items-center">
          <DialogTitle className="text-3xl font-extrabold text-white mb-2">
            Talleres y Tablón de Anuncios
          </DialogTitle>
          <p className="text-purple-200 text-lg max-w-md">
            Aquí encontrarás información sobre masterclass, talleres, grabaciones y anuncios importantes para tu formación.
          </p>
        </DialogHeader>
        <div className="relative aspect-video rounded-lg overflow-hidden my-4 ring-2 ring-isep-accent/50">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://embed.app.guidde.com/playbooks/1iS9h4FYkmL54PcNGPX64X?mode=videoOnly"
            title="Configura Talleres Y Tablón De Anuncios En Universidadisep"
            frameBorder="0"
            referrerPolicy="unsafe-url"
            allowFullScreen={true}
            allow="clipboard-write"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
          ></iframe>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button 
            onClick={onClose} 
            className="bg-isep-accent hover:bg-isep-accent/90 text-isep-dark font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105"
          >
            <CheckCircle className="w-6 h-6 mr-2" />
            ¡Perfecto, lo entiendo!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};