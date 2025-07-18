import { CheckCircle2, type LucideIcon } from "lucide-react";
import React from "react";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
  isCompleted?: boolean;
  style?: React.CSSProperties;
}

export const ActionCard = ({ icon: Icon, title, onClick, isCompleted = false, style }: ActionCardProps) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className="relative bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-2xl text-center flex flex-col items-center justify-center aspect-square hover:bg-white/20 transition-colors cursor-pointer group w-full disabled:opacity-50 disabled:cursor-not-allowed opacity-0 animate-fade-in-up"
    >
      {isCompleted && (
        <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1 text-white">
          <CheckCircle2 className="w-5 h-5" />
        </div>
      )}
      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-isep-accent mb-4 transition-transform group-hover:scale-110" />
      <h3 className="font-bold text-sm sm:text-base text-white">{title}</h3>
    </button>
  );
};