// src/components/FinalStep.tsx

import React from 'react';

const FinalStep: React.FC = () => {
  return (
    <div className="p-8 max-w-lg mx-auto text-center border-4 border-red-500 rounded-xl bg-red-50">
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        🚩 Processus Terminé
      </h2>
      <p className="text-lg text-gray-800">
        Vos documents ont été soumis avec succès pour vérification.
      </p>
      <p className="mt-4 text-gray-600">
        Le processus de vérification est en cours. Vous serez notifié(e) par email.
      </p>
    </div>
  );
};

export default FinalStep;