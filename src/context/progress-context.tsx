"use client";

import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

// Define los pasos que el estudiante debe completar
const OnboardingSteps = [
  'welcome',
  'campusAccess',
  'workshops',
  'thesis',
  'billing',
  'rules',
  'contactActivities'
] as const;

export type Step = typeof OnboardingSteps[number];

interface ProgressContextType {
  completedSteps: Set<Step>;
  completeStep: (step: Step) => void;
  progress: number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [completedSteps, setCompletedSteps] = useState<Set<Step>>(new Set());

  const completeStep = (step: Step) => {
    setCompletedSteps(prev => {
      const newSteps = new Set(prev);
      // Toggle completion
      if (newSteps.has(step)) {
        newSteps.delete(step);
      } else {
        newSteps.add(step);
      }
      return newSteps;
    });
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