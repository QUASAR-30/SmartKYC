// TrustBadgeSection.tsx

import React from 'react';

const TrustBadgeSection: React.FC = () => {
  // 💡 Le lien d'accès public au profil
  const badgeUrl = 'smartkyc.com/marchand/kouassi88';

  // Logique du bouton "Copier" (peut être implémentée ici)
  const handleCopy = () => {
    navigator.clipboard.writeText(badgeUrl)
      .then(() => {
        alert('Lien copié dans le presse-papiers !');
      })
      .catch(err => {
        console.error('Erreur de copie:', err);
      });
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">Badge de Confiance</h3>
      
      <div className="flex flex-col md:flex-row items-center gap-6">
        
        {/* Affichage du Badge (Inchangé) */}
        <div className="bg-yellow-50 p-4 rounded-lg flex-shrink-0">
          <div className="text-3xl font-bold text-yellow-800">🏆 GOLD</div>
        </div>
        
        {/* Ancien emplacement du QR Code (Supprimé) */}
        {/* Remplacé par l'espace restant pour la facilité de lecture */}
        
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-2">Lien partageable :</p>
          <div className="flex">
            <input
              type="text"
              value={badgeUrl}
              readOnly
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm truncate"
            />
            {/* Ajout de la fonction handleCopy sur le bouton */}
            <button 
              onClick={handleCopy}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm hover:bg-blue-700"
            >
              Copier
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <a href={`https://${badgeUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
          ➡️ Aperçu public du profil
        </a>
      </div>
    </div>
  );
};

export default TrustBadgeSection;