"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface BillingServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BillingServicesModal = ({ isOpen, onClose }: BillingServicesModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-gradient-to-br from-isep-deep-purple to-isep-primary text-white border-0 shadow-2xl shadow-isep-primary/40">
        <DialogHeader className="text-center items-center">
          <DialogTitle className="text-3xl font-extrabold text-white mb-2">
            Facturas y Servicios Adicionales
          </DialogTitle>
          <p className="text-purple-200 text-lg max-w-md">
            Aprende a gestionar tus pagos, consultar facturas y conocer los servicios adicionales que tenemos para ti.
          </p>
        </DialogHeader>
        <div className="relative aspect-video rounded-lg overflow-hidden my-4 ring-2 ring-isep-accent/50 bg-isep-dark/50 flex items-center justify-center">
          <div className="text-center text-purple-200 p-4">
            <p className="font-semibold text-lg">¡Próximamente!</p>
            <p>Este video estará disponible mañana para que puedas continuar.</p>
          </div>
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