// src/components/Step2CNI.tsx

import React, { useCallback, useState } from 'react';
import { StepProps } from './Layout';

const Step2CNI: React.FC<StepProps> = ({ setFormData, nextStep, prevStep, formData }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, cniFile: e.target.files![0] }));
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFormData(prev => ({ ...prev, cniFile: e.dataTransfer.files[0] }));
    }
  }, [setFormData]);

  return (
    <div className="p-8 max-w-lg border border-yellow-600 mx-auto bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Étape 2/5 : Carte Nationale d'Identité (CNI)</h2>
      <p className="text-gray-600 mb-6">
        Téléchargez une image ou un PDF de votre CNI (recto et verso si possible).
      </p>

      <div
  onClick={() => document.getElementById("cni-upload")?.click()}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
    isDragging 
      ? 'border-yellow-500 bg-blue-50' 
      : 'border-gray-300 hover:border-blue-300'
  }`}
>

        <div className="text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <p className="text-sm mb-1">
          <span className="text-blue-600 font-medium underline cursor-pointer">
            Cliquez pour télécharger
          </span>
          {' '}ou glissez-déposez ici
        </p>
        <p className="text-xs text-gray-400">Max. 15MB • JPG, PNG, PDF</p>
        <input
          type="file"
          accept="image/*, application/pdf"
          onChange={handleFileChange}
          className="hidden"
          id="cni-upload"
        />
      </div>

      {formData.cniFile && (
        <div className="mt-4 p-3 bg-green-50 rounded-lg flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 6l-6-6-6 6" />
          </svg>
          <span className="text-sm text-green-700 truncate">{formData.cniFile.name}</span>
        </div>
      )}

      <div className="mt-6 flex justify-between space-x-4">
        <button
          type="button"
          onClick={prevStep}
          className="flex-1 py-3 px-4 rounded-lg bg-gray-500 hover:bg-gray-600 text-white font-medium transition"
        >
          ← Précédent
        </button>
        <button
          type="button"
          onClick={nextStep}
          disabled={!formData.cniFile}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition ${
            formData.cniFile 
              ? 'bg-yellow-600 hover:bg-blue-700 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Suivant →
        </button>
      </div>
    </div>
  );
};

export default Step2CNI;