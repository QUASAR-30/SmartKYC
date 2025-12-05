// src/MultiStepForm.tsx

import { useState } from 'react';
import { FormData, StepProps } from './Layout';
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
    nifFile: null,
  });

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => Math.max(1, prev - 1));

  const stepLabels = ["RCCM", "CNI", "NIF", "Résumé", "Finalisation"];
  const progressPercentage = (currentStep / stepLabels.length) * 100;

  const renderStep = () => {
    const stepProps: StepProps = { formData, setFormData, nextStep, prevStep };

    switch (currentStep) {
      case 1: return <Step1RCCM {...stepProps} />;
      case 2: return <Step2CNI {...stepProps} />;
      case 3: return <Step3NFI {...stepProps} />;
      case 4: return <SummaryStep {...stepProps} />;
      case 5: return <FinalStep />;
      default: return <FinalStep />;
    }
  };

  return (
    <div className="w-full min-h-screen ">

      {/* --- GRID PRINCIPALE (2 COLONNES SUR DESKTOP) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

        {/* ======================== COLONNE GAUCHE / IMAGE ======================== */}
        <div className="relative flex items-center justify-center p-6 bg-gray-900">

          {/* Image de gauche */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('/step_by_step_form.png')`,
              filter: 'blur(3px)',
              transform: 'scale(1.05)'
            }}
          />

          {/* Overlay sombre */}
          {/* <div className="absolute inset-0 bg-black/40"></div> */}

          {/* Texte par-dessus */}
          <div className="relative z-10 text-center px-4">
            <blockquote className="text-white text-4xl md:text-4xl italic font-light mb-4 drop-shadow-md">
              « La <span className="font-semibold text-yellow-600 me-2">transparence documentaire</span>  
              est la pierre angulaire<br />
              de la <span className="font-bold text-yellow-200 me-2">confiance durable</span>  
              entre partenaires. »
            </blockquote>

            <p className="text-white text-3xl md:text-base max-w-md mx-auto drop-shadow">
              Nous vérifions vos documents avec rigueur pour garantir  
              des relations commerciales <strong className="text-white">sécurisées, fluides et crédibles</strong>.
            </p>
          </div>
        </div>

        {/* ======================== COLONNE DROITE / FORMULAIRE ======================== */}
        <div className="flex flex-col justify-center p-6 md:p-10">

          {/* 🧭 Indicateur de progression */}
          <div className="mb-8">
            
            <div className="flex justify-between text-xl sm:text-md mb-2">
              {stepLabels.map((label, index) => (
                <span
                  key={index}
                  className={`font-medium ${
                    index + 1 === currentStep
                      ? 'text-black'
                      : index + 1 < currentStep
                      ? 'text-green-600'
                      : 'text-gray-400'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
            

            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Étape actuelle */}
          <div className="max-w-xl mx-auto w-full">
            
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}
