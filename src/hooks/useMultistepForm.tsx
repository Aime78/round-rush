import { ReactElement, useState } from 'react';

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  return {
    step: steps[currentStepIndex],
    next,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};
