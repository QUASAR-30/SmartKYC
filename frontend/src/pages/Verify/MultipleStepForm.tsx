// src/MultiStepForm.tsx

import { useState } from 'react';
import { FormData, StepProps } from './Layout'; // Assurez-vous que le chemin est correct

// Importation des composants des étapes
import Step1RCCM from './Step1';
import Step2CNI from './Step2';
import Step3NFI from './Step3';
import SummaryStep from './Summary';
import FinalStep from './Final';

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    rccmFile: null,
    cniFile: null,
    nifFile: null, // Initialisation cohérente
  });

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  // 5 étapes : RCCM, CNI, NIF, Résumé, Finalisation
  const stepLabels = ["RCCM", "CNI", "NIF", "Résumé", "Finalisation"]; 
  const progressPercentage = (currentStep / stepLabels.length) * 100;
  
  const renderStep = () => {
    // Les props sont créées une seule fois
    const stepProps: StepProps = { 
        formData, 
        setFormData, 
        nextStep, 
        prevStep 
    };

    switch (currentStep) {
      case 1:
        return <Step1RCCM {...stepProps} />; 
      case 2:
        return <Step2CNI {...stepProps} />;
      case 3:
        return <Step3NFI {...stepProps} />;
      case 4: // Nouvelle étape: Résumé
        return <SummaryStep {...stepProps} />;
      case 5: // Étape Finale (Drapeau Rouge)
        return <FinalStep />;
      default:
        return <FinalStep />;
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      
      {/* 🧭 Indicateur de Progrès */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-1">
          {stepLabels.map((label, index) => (
            <span 
                key={index} 
                className={
                    `font-medium ${index + 1 === currentStep ? 'text-blue-600' : 
                    index + 1 < currentStep ? 'text-green-600' : 'text-gray-400'}`
                }>
              {label}
            </span>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      
      {/* Rendu de l'étape actuelle */}
      {renderStep()}
    </div>
  );
}