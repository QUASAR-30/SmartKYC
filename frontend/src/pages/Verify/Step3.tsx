
import React from 'react';
import { StepProps } from './Layout';

const Step3NFI: React.FC<StepProps> = ({ setFormData, nextStep, prevStep, formData }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // CORRECTION: Utilise nifFile (pour correspondre à l'interface)
      setFormData(prev => ({ ...prev, nifFile: e.target.files![0] })); 
    }
  };
  
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nifFile) {
        // Passe à l'étape 4 : Résumé
        nextStep(); 
    }
  }

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Étape 3/5 : Image du NIF</h2>

      <form onSubmit={handleNext} className="space-y-4">
        <label className="block text-gray-700">Sélectionnez le document NIF :</label>
        <input
          type="file"
          accept="image/*, application/pdf"
          onChange={handleFileChange}
          className="w-full border p-3 rounded"
          required
        />
        {formData.nifFile && (
          <p className="text-sm text-green-600">Fichier sélectionné : {formData.nifFile.name}</p>
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
            disabled={!formData.nifFile}
            className={`text-white px-6 py-3 rounded-lg transition ${
              formData.nifFile ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Suivant →
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3NFI;