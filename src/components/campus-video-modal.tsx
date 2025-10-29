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
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0 flex flex-col bg-gradient-to-br from-isep-deep-purple to-isep-primary text-white border-0 shadow-2xl shadow-isep-primary/40">
        <DialogHeader className="text-center items-center p-6 pb-4 flex-shrink-0">
          <DialogTitle className="text-3xl font-extrabold text-white mb-2">
            Ingresa a tu Campus
          </DialogTitle>
          <p className="text-purple-200 text-lg max-w-md">
            Este video te guiará a través de nuestro campus virtual, mostrándote cómo navegar, encontrar tus cursos y aprovechar al máximo todas las herramientas a tu disposición. ¡Prepárate para dominar tu entorno de aprendizaje!
          </p>
        </DialogHeader>
        <div className="flex-grow mx-6 mb-4 rounded-lg overflow-hidden ring-2 ring-isep-accent/50">
          <iframe
            className="w-full h-full"
            src="https://embed.app.guidde.com/playbooks/4Yckvp57pHbu1r4BzqBaSF?mode=videoAndDoc"
            title="Ingresar Al Campus Universidadisep Paso A Paso"
            frameBorder="0"
            allowFullScreen={true}
            allow="clipboard-write"
            referrerPolicy="unsafe-url"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
          ></iframe>
        </div>
        <DialogFooter className="sm:justify-center p-6 pt-0 flex-shrink-0">
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