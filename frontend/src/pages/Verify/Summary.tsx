// src/components/SummaryStep.tsx

import React from 'react';
import { StepProps } from './Layout';

const SummaryStep: React.FC<StepProps> = ({ formData, nextStep, prevStep }) => {
  
  // Fonction utilitaire : prévisualiser si image
  const renderPreview = (file: File | null) => {
    if (!file) return null;

    if (!file.type.startsWith("image/")) {
      // Si PDF ou autre → pas d'aperçu image
      return (
        <p className="text-sm text-gray-500 italic">
          📄 Aperçu indisponible (fichier non-image)
        </p>
      );
    }

    const url = URL.createObjectURL(file);

    return (
      <img 
        src={url} 
        alt="document preview"
        className="mt-2 rounded-lg shadow max-h-[400px] object-contain border"
      />
    );
  };

  const getFileName = (file: File | null, type: string) => {
    return file 
      ? <span className="text-green-600 font-medium">{file.name}</span>
      : <span className="text-red-500 font-medium">⚠️ {type} Manquant</span>;
  };

  const handleFinalSubmit = () => {
    console.log("🚀 Envoi des données…", formData);
    nextStep();
  };

  return (
    <div className="p-8 border border-yellow-600 max-w-2xl mx-auto bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-2">Étape 4/5 : Récapitulatif & Envoi</h2>
      <p className="text-gray-600 mb-6">
        Veuillez vérifier les documents avant d’envoyer.
      </p>

      <div className="mt-6 border rounded-xl bg-gray-50 p-4">
  <h3 className="text-xl font-bold mb-3">Aperçu des documents</h3>

  {/* Carrousel horizontal */}
<div className="w-full overflow-x-auto scroll-smooth">
  <div className="flex flex-row space-x-6 min-w-max">

    {/* RCCM */}
    <div className="min-w-[350px] max-w-[350px] p-3 bg-white rounded-lg shadow">
      <p className="font-medium mb-2">📄 RCCM</p>
      {formData.rccmFile ? (
        formData.rccmFile.type.startsWith("image/") ? (
          <img
            src={URL.createObjectURL(formData.rccmFile)}
            alt="RCCM Preview"
            className="rounded-lg max-h-[400px] object-contain mx-auto"
          />
        ) : (
          <div className="text-center text-gray-600 italic">
            PDF – Aperçu indisponible
          </div>
        )
      ) : (
        <p className="text-red-500 font-medium">⚠️ RCCM manquant</p>
      )}
    </div>

    {/* CNI */}
    <div className="min-w-[350px] max-w-[350px] p-3 bg-white rounded-lg shadow">
      <p className="font-medium mb-2">🪪 CNI</p>
      {formData.cniFile ? (
        formData.cniFile.type.startsWith("image/") ? (
          <img
            src={URL.createObjectURL(formData.cniFile)}
            alt="CNI Preview"
            className="rounded-lg max-h-[400px] object-contain mx-auto"
          />
        ) : (
          <div className="text-center text-gray-600 italic">
            PDF – Aperçu indisponible
          </div>
        )
      ) : (
        <p className="text-red-500 font-medium">⚠️ CNI manquante</p>
      )}
    </div>

    {/* NIF */}
    <div className="min-w-[350px] max-w-[350px] p-3 bg-white rounded-lg shadow">
      <p className="font-medium mb-2">🧾 NIF</p>
      {formData.nifFile ? (
        formData.nifFile.type.startsWith("image/") ? (
          <img
            src={URL.createObjectURL(formData.nifFile)}
            alt="NIF Preview"
            className="rounded-lg max-h-[400px] object-contain mx-auto"
          />
        ) : (
          <div className="text-center text-gray-600 italic">
            PDF – Aperçu indisponible
          </div>
        )
      ) : (
        <p className="text-red-500 font-medium">⚠️ NIF manquant</p>
      )}
    </div>

  </div>
</div>

</div>


      <div className="mt-8 flex justify-between space-x-4">
        <button
          type="button"
          onClick={prevStep}
          className="flex-1 py-3 px-4 rounded-lg bg-gray-500 hover:bg-gray-600 text-white font-medium transition"
        >
          ← Modifier
        </button>
        <button
          type="button"
          onClick={handleFinalSubmit}
          className="flex-1 py-3 px-4 rounded-lg bg-yellow-600 hover:bg-green-700 text-white font-medium transition"
        >
          Confirmer & Envoyer →
        </button>
      </div>
      
    </div>
  );
};

export default SummaryStep;
