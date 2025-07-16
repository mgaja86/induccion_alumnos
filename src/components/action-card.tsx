import type { LucideIcon } from "lucide-react";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  onClick?: () => void;
}

export const ActionCard = ({ icon: Icon, title, onClick }: ActionCardProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-white/15 backdrop-blur-md p-4 sm:p-6 rounded-2xl text-center flex flex-col items-center justify-center aspect-square hover:bg-white/25 transition-all cursor-pointer group w-full border border-white/20 shadow-lg hover:shadow-xl"
    >
      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-isep-accent mb-4 transition-transform group-hover:scale-110" />
      <h3 className="font-bold text-sm sm:text-base text-white">{title}</h3>
    </button>
  );
};