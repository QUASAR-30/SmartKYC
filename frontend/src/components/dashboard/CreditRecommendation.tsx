// src/components/CreditRecommendation.tsx
const CreditRecommendation: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-yellow-600">
      <h3 className="text-lg font-semibold mb-4">Recommandation crédit</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Montant max recommandé</p>
          <p className="text-xl font-bold text-gray-800">800 000 CFA</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Délai recommandé</p>
          <p className="text-xl font-bold text-gray-800">30 jours</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Acompte conseillé</p>
          <p className="text-xl font-bold text-gray-800">20%</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Risque estimé</p>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            Faible
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreditRecommendation;