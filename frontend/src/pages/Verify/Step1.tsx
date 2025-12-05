import React, { useState } from 'react';

// --- Définition de l'état global (les fichiers) ---
interface FormData {
  rccmFile: File | null;
  cniFile: File | null;
  nfiFile: File | null;
}

// --- Composant des étapes (Définis après) ---
interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
}

// Composant pour l'étape 1 (Image RCCM)
const Step1RCCM: React.FC<StepProps> = ({ setFormData, nextStep, formData }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, rccmFile: e.target.files![0] }));
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Étape 1/3 : Image du RCCM</h2>

      <form className="space-y-4">
        <label className="block text-gray-700">Sélectionnez le document RCCM :</label>
        <input
          type="file"
          accept="image/*, application/pdf" // Accepter images et PDF
          onChange={handleFileChange}
          className="w-full border p-3 rounded"
          required
        />
        {formData.rccmFile && (
          <p className="text-sm text-green-600">Fichier sélectionné : {formData.rccmFile.name}</p>
        )}

        <button
          type="button"
          onClick={nextStep}
          disabled={!formData.rccmFile} // Désactiver si pas de fichier
          className={`w-full text-white px-6 py-3 rounded-lg transition ${
            formData.rccmFile ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Suivant →
        </button>
      </form>
    </div>
  );
};

// Composant pour l'étape 2 (Image CNI)
const Step2CNI: React.FC<StepProps> = ({ setFormData, nextStep, prevStep, formData }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, cniFile: e.target.files![0] }));
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Étape 2/3 : Image de la CNI</h2>

      <form className="space-y-4">
        <label className="block text-gray-700">Sélectionnez le document CNI :</label>
        <input
          type="file"
          accept="image/*, application/pdf"
          onChange={handleFileChange}
          className="w-full border p-3 rounded"
          required
        />
        {formData.cniFile && (
          <p className="text-sm text-green-600">Fichier sélectionné : {formData.cniFile.name}</p>
        )}
        
        <div className="flex justify-between space-x-4">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
          >
            ← Précédent
          </button>
          <button
            type="button"
            onClick={nextStep}
            disabled={!formData.cniFile}
            className={`text-white px-6 py-3 rounded-lg transition ${
              formData.cniFile ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Suivant →
          </button>
        </div>
      </form>
    </div>
  );
};

// Composant pour l'étape 3 (Image NFI)
const Step3NFI: React.FC<StepProps> = ({ setFormData, nextStep, prevStep, formData }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, nfiFile: e.target.files![0] }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nfiFile) {
        // Logique de soumission finale ici si nécessaire
        console.log("Données à soumettre :", formData);
        nextStep();
    }
  }

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Étape 3/3 : Image du NFI</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-gray-700">Sélectionnez le document NFI :</label>
        <input
          type="file"
          accept="image/*, application/pdf"
          onChange={handleFileChange}
          className="w-full border p-3 rounded"
          required
        />
        {formData.nfiFile && (
          <p className="text-sm text-green-600">Fichier sélectionné : {formData.nfiFile.name}</p>
        )}

        <div className="flex justify-between space-x-4">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
          >
            ← Précédent
          </button>
          <button
            type="submit"
            disabled={!formData.nfiFile}
            className={`text-white px-6 py-3 rounded-lg transition ${
              formData.nfiFile ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Finaliser la soumission
          </button>
        </div>
      </form>
    </div>
  );
};


// Composant pour l'étape finale (Drapeau Rouge)
const FinalStep: React.FC = () => {
  return (
    <div className="p-8 max-w-lg mx-auto text-center border-4 border-red-500 rounded-xl bg-red-50">
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        🚩 Finalisation de la Vérification
      </h2>
      <p className="text-lg text-gray-800">
        Vos documents ont été soumis avec succès.
      </p>
      <p className="mt-4 text-gray-600">
        Le processus de vérification est en cours. Vous serez notifié(e) par email.
      </p>
    </div>
  );
};


// Le composant CONTENEUR principal
export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    rccmFile: null,
    cniFile: null,
    nfiFile: null,
  });

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  // Barre de progression
  const stepLabels = ["RCCM", "CNI", "NFI", "Finalisation"];
  const progressPercentage = (currentStep / stepLabels.length) * 100;
  
  // Fonction de rendu conditionnel pour afficher la bonne étape
  const renderStep = () => {
    const stepProps: StepProps = { formData, setFormData, nextStep, prevStep };

    switch (currentStep) {
      case 1:
        return <Step1RCCM {...stepProps} />;
      case 2:
        return <Step2CNI {...stepProps} />;
      case 3:
        return <Step3NFI {...stepProps} />;
      case 4:
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