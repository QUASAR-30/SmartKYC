

import React from 'react';
import { StepProps } from './Layout';

const Step2CNI: React.FC<StepProps> = ({ setFormData, nextStep, prevStep, formData }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, cniFile: e.target.files![0] }));
    }
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Étape 2/5 : Image de la CNI</h2>

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

export default Step2CNI;