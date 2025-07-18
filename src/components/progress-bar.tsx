"use client";

import { useProgress } from '@/context/progress-context';
import { Progress } from '@/components/ui/progress';

export const OnboardingProgressBar = () => {
  const { progress } = useProgress();

  return (
    <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
      <h3 className="text-xl font-bold text-isep-dark dark:text-white mb-2">Tu Progreso de Incorporación</h3>
      <div className="flex items-center gap-4">
        <Progress value={progress} className="w-full h-3" />
        <span className="font-semibold text-isep-primary dark:text-isep-accent w-20 text-right">{Math.round(progress)}%</span>
      </div>
    </div>
  );
};