// src/components/Step1RCCM.tsx (Corrigé avec chaînage optionnel)

import React from 'react';
import { StepProps } from './Layout'; // ⚠️ Vérifiez ce chemin d'accès !

const Step1RCCM: React.FC<StepProps> = ({ setFormData, nextStep, formData }) => {
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, rccmFile: e.target.files![0] }));
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Étape 1/5 : Image du RCCM</h2>

      <form className="space-y-4">
        <label className="block text-gray-700">Sélectionnez le document RCCM :</label>
        <input
          type="file"
          accept="image/*, application/pdf"
          onChange={handleFileChange}
          className="w-full border p-3 rounded"
          required
        />
        
        {/* 🟢 CORRECTION 1: Ajout de '?' pour vérifier si formData existe */}
        {formData?.rccmFile && (
          <p className="text-sm text-green-600">Fichier sélectionné : {formData.rccmFile.name}</p>
        )}

        <button
          type="button"
          onClick={nextStep}
          /* 🟢 CORRECTION 2: Ajout de '?' pour désactiver le bouton */
          disabled={!formData?.rccmFile}
          className={`w-full text-white px-6 py-3 rounded-lg transition ${
                /* 🟢 CORRECTION 3: Ajout de '?' pour le style */
            formData?.rccmFile ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Suivant →
        </button>
      </form>
    </div>
  );
};

export default Step1RCCM;