// src/components/FinalStep.tsx

import React from 'react';
import { motion } from 'framer-motion';

const FinalStep: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="p-8 max-w-lg mx-auto border border-yellow-600 text-center bg-white rounded-2xl shadow-xl border-2 border-green-200"
    ><center>
<img
            src="/success_set_by_step_form.png"
            alt="SmartKYC App"
            className="w-64 md:w-80 mb-3 lg:w-96 rounded-xl"
          />
    </center>
      
      <h2 className="text-3xl font-bold text-yellow-700 mb-4">
        Processus Terminé !
      </h2>
      <p className="text-lg text-gray-700 mb-2">
        Vos documents ont été soumis avec succès pour vérification.
      </p>
      <p className="mt-4 text-gray-600 italic">
        Vous recevrez une notification par email dès que la vérification sera terminée.
      </p>
      
      <center>
<div className="mt-6 ">
            <a
              href="/dashboard"
              className="bg-yellow-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-green-700 transition"
            >
              Voir le tableau de bord →
            </a>
          </div>
      </center>
      
    </motion.div>
  );
};

export default FinalStep;