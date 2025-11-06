"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface CampusVideoSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampusVideoSheet = ({ isOpen, onClose }: CampusVideoSheetProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-2xl lg:max-w-3xl p-0 flex flex-col bg-gradient-to-br from-isep-deep-purple to-isep-primary text-white border-0">
        <SheetHeader className="text-center items-center p-6 pb-4 flex-shrink-0">
          <SheetTitle className="text-3xl font-extrabold text-white mb-2">
            Ingresa a tu Campus
          </SheetTitle>
          <p className="text-purple-200 text-lg max-w-md">
            Este video te guiará a través de nuestro campus virtual, mostrándote cómo navegar, encontrar tus cursos y aprovechar al máximo todas las herramientas a tu disposición. ¡Prepárate para dominar tu entorno de aprendizaje!
          </p>
        </SheetHeader>
        <div className="flex-grow mx-6 mb-4 rounded-lg overflow-hidden ring-2 ring-isep-accent/50">
          <iframe
            className="w-full h-full"
            src="https://embed.app.guidde.com/playbooks/iGB46DDFxowW31uQj1wcRC?mode=videoOnly"
            title="Ingresar Al Campus Virtual De Universidadisep"
            frameBorder="0"
            allowFullScreen={true}
            allow="clipboard-write"
            referrerPolicy="unsafe-url"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
          ></iframe>
        </div>
        <SheetFooter className="sm:justify-center p-6 pt-0 flex-shrink-0">
          <SheetClose asChild>
            <Button 
              onClick={onClose} 
              className="bg-isep-accent hover:bg-isep-accent/90 text-isep-dark font-bold text-lg px-8 py-6 rounded-full transition-transform hover:scale-105"
            >
              <CheckCircle className="w-6 h-6 mr-2" />
              ¡Excelente, lo tengo!
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};