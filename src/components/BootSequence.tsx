import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BootSequenceProps {
  onDone: () => void;
  skipLabel: string;
}

const steps = [
  'Inicializando laboratório MF...',
  'Calibrando ambiente holográfico...',
  'Carregando módulos de pesquisa...',
  'Sistema pronto.',
];

export function BootSequence({ onDone, skipLabel }: BootSequenceProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentStep((step) => {
        if (step >= steps.length - 1) {
          window.clearInterval(timer);
          window.sessionStorage.setItem('portfolioBootSeen', 'true');
          window.setTimeout(onDone, 350);
          return step;
        }

        return step + 1;
      });
    }, 420);

    return () => window.clearInterval(timer);
  }, [onDone]);

  const skip = () => {
    window.sessionStorage.setItem('portfolioBootSeen', 'true');
    onDone();
  };

  return (
    <motion.div
      className="boot-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-label="Inicialização do portfólio"
    >
      <div className="boot-window">
        <div className="boot-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="boot-lines">
          {steps.slice(0, currentStep + 1).map((step) => (
            <motion.p key={step} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
              <span>&gt;</span> {step}
            </motion.p>
          ))}
        </div>
        <button type="button" onClick={skip}>
          {skipLabel}
        </button>
      </div>
    </motion.div>
  );
}
