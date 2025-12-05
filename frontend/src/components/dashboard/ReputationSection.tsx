// src/components/ReputationSection.tsx
interface Feedback {
  text: string;
  impact: number; // + ou -
}

const ReputationSection: React.FC = () => {
  const feedbacks: Feedback[] = [
    { text: "Paiement reçu en avance, très sérieux.", impact: 10 },
    { text: "Paiement en retard de 5 jours.", impact: -30 },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">Notation & Réputation</h3>
      <div className="flex items-center mb-4">
        <div className="text-2xl font-bold text-yellow-500">⭐⭐⭐⭐☆</div>
        <span className="ml-2 text-gray-700">4.6 / 5</span>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Retards :</span>
          <span className="font-medium">2</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Paiements à temps :</span>
          <span className="font-medium">17</span>
        </div>
      </div>
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700">Feedback récents :</h4>
        {feedbacks.map((f, i) => (
          <div key={i} className="p-3 bg-gray-50 rounded-md">
            <p className="text-sm">{f.text}</p>
            <span className={`text-xs ${f.impact > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {f.impact > 0 ? `+${f.impact} pts` : `${f.impact} pts`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReputationSection;