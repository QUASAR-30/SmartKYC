// src/components/SummaryStep.tsx

import React, { useState, useRef } from "react";
import { StepProps } from "./Layout";
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from "react-router-dom";

const SummaryStep: React.FC<StepProps> = ({ formData, nextStep, prevStep }) => {

  const navigate = useNavigate();
  const loadingRef = useRef<any>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Lance le loading intelligent
  const handleFinalSubmit = () => {
    console.log("🚀 Envoi des données…", formData);

    setIsLoading(true);
    loadingRef.current.continuousStart(); // démarre la barre

    // Simuler les 5 secondes
    setTimeout(() => {
      loadingRef.current.complete();
      setSuccess(true);

      // Redirection 5 sec après le message
      setTimeout(() => {
        navigate("/dashboard");
      }, 5000);

    }, 5000);
  };

  // UTILITAIRE : Preview images
  const renderPreview = (file: File | null) => {
    if (!file) return null;

    if (!file.type.startsWith("image/")) {
      return <p className="text-sm text-gray-500 italic">📄 Aperçu indisponible</p>;
    }

    const url = URL.createObjectURL(file);
    return (
      <img
        src={url}
        alt="preview"
        className="mt-2 rounded-lg shadow max-h-[400px] object-contain border"
      />
    );
  };

  // ---------- UI PRINCIPALE ----------
  return (
    <div className="p-8 border border-yellow-600 max-w-2xl mx-auto bg-white rounded-2xl shadow-md relative">

      {/* ---------- BARRE DE CHARGEMENT ---------- */}
      <LoadingBar color="#FACC15" ref={loadingRef} height={4} />

      {/* ---------- ÉCRAN DE LOADING ---------- */}
      {isLoading && !success && (
        <div className="relative inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 rounded-2xl">

          {/* Logo */}
          <img src="/Logo.png" alt="SmartKYC" className="w-24 animate-pulse" />

          <p className="text-lg font-semibold mt-6 text-gray-700">
            Vérification en cours...
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Veuillez patienter quelques instants
          </p>
        </div>
      )}

      {/* ---------- MESSAGE DE FÉLICITATION ---------- */}
      {success && (
        <div className="relative inset-0 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center text-center p-6 rounded-2xl animate-fade-in">

          <img src="/Logo.png" alt="Success" className="w-24 mb-4" />

          <h2 className="text-2xl font-bold text-yellow-600">Félicitations !</h2>

          <p className="mt-3 text-gray-700 max-w-sm">
            Vos documents ont été vérifiés avec succès.
            <br />
            Vous serez redirigé vers votre tableau de bord dans un instant.
          </p>
        </div>
      )}

      {/* ---------- CONTENU NORMAL (si pas loading) ---------- */}
      {!isLoading && !success && (
        <>
          <h2 className="text-2xl font-semibold mb-2">
            Étape 4/5 : Récapitulatif & Envoi
          </h2>
          <p className="text-gray-600 mb-6">
            Veuillez vérifier les documents avant d’envoyer.
          </p>

          <div className="mt-6 border rounded-xl bg-gray-50 p-4">
            <h3 className="text-xl font-bold mb-3">Aperçu des documents</h3>

            {/* CARROUSEL HORIZONTAL */}
            <div className="w-full overflow-x-auto scroll-smooth">
              <div className="flex flex-row space-x-6 min-w-max">

                {/* RCCM */}
                <div className="min-w-[350px] max-w-[350px] p-3 bg-white rounded-lg shadow">
                  <p className="font-medium mb-2">📄 RCCM</p>
                  {renderPreview(formData.rccmFile)}
                </div>

                {/* CNI */}
                <div className="min-w-[350px] max-w-[350px] p-3 bg-white rounded-lg shadow">
                  <p className="font-medium mb-2">🪪 CNI</p>
                  {renderPreview(formData.cniFile)}
                </div>

                {/* NIF */}
                <div className="min-w-[350px] max-w-[350px] p-3 bg-white rounded-lg shadow">
                  <p className="font-medium mb-2">🧾 NIF</p>
                  {renderPreview(formData.nifFile)}
                </div>

              </div>
            </div>
          </div>

          {/* BOUTONS */}
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
        </>
      )}
    </div>
  );
};

export default SummaryStep;
