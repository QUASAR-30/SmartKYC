
import React from 'react';
import { StepProps } from './Layout';

const SummaryStep: React.FC<StepProps> = ({ formData, nextStep, prevStep }) => {
  
  // Fonction utilitaire pour obtenir le nom du fichier ou un message "manquant"
  const getFileName = (file: File | null, type: string) => {
    return file 
      ? <span className="text-green-600 font-medium">{file.name}</span>
      : <span className="text-red-500 font-medium">{type} Manquant</span>;
  };

  const handleFinalSubmit = () => {
    // 1. Logique d'envoi des fichiers à l'API/au backend ici
    console.log("Envoi des données au serveur...", formData);
    
    // 2. Passage à l'étape finale (5)
    nextStep(); 
  }

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Étape 4/5 : Récapitulatif & Envoi</h2>

      <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
        <h3 className="text-xl font-bold mb-3">Documents à soumettre :</h3>
        <p className="text-lg border-b pb-2">
          **RCCM :** {getFileName(formData.rccmFile, "RCCM")}
        </p>
        <p className="text-lg border-b pb-2">
          **CNI :** {getFileName(formData.cniFile, "CNI")}
        </p>
        <p className="text-lg">
          **NIF :** {getFileName(formData.nifFile, "NIF")}
        </p>
      </div>

      <div className="mt-8 flex justify-between space-x-4">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
        >
          ← Modifier
        </button>
        <button
          type="button"
          onClick={handleFinalSubmit}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Confirmer & Envoyer →
        </button>
      </div>
    </div>
  );
};

export default SummaryStep;