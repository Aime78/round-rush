import { ReactElement, useState } from 'react';

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };
  return {
    currentStepIndex,
    steps,
    step: steps[currentStepIndex],
    goTo,
    next,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};
