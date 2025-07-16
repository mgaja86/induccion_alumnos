"use client";

import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

// Define los pasos que el estudiante debe completar
const OnboardingSteps = [
  'welcomeVideo',
  'orientation',
  'schedule',
  'resources',
  'support',
  'contact'
] as const;

type Step = typeof OnboardingSteps[number];

interface ProgressContextType {
  completedSteps: Set<Step>;
  completeStep: (step: Step) => void;
  progress: number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [completedSteps, setCompletedSteps] = useState<Set<Step>>(new Set());

  const completeStep = (step: Step) => {
    setCompletedSteps(prev => new Set(prev).add(step));
  };

  const progress = useMemo(() => {
    return (completedSteps.size / OnboardingSteps.length) * 100;
  }, [completedSteps]);

  return (
    <ProgressContext.Provider value={{ completedSteps, completeStep, progress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};