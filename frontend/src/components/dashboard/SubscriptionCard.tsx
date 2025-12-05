// src/components/SubscriptionCard.tsx
const SubscriptionCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">Abonnement</h3>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Plan actuel</p>
        <p className="text-xl font-bold text-gray-800">Basic</p>
      </div>
      <ul className="space-y-2 text-sm text-gray-700 mb-4">
        <li>✅ Recalcul Score : hebdomadaire</li>
        <li>✅ Limites partage : 50 vues / mois</li>
      </ul>
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition">
        Passer au plan PRO
      </button>
    </div>
  );
};

export default SubscriptionCard;