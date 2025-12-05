// src/components/QuickActions.tsx
const QuickActions: React.FC = () => {
  const actions = [
    { icon: '📤', label: 'Déposer un document', disabled: false },
    { icon: '📎', label: 'Télécharger badge', disabled: false },
    { icon: '📊', label: 'Voir mon score', disabled: false },
    { icon: '⚙️', label: 'Paramètres du compte', disabled: false },
    { icon: '🔄', label: 'Recalculer mon score', disabled: true }, // désactivé si Basic
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">Actions rapides</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {actions.map((action, idx) => (
          <button
            key={idx}
            className={`p-3 rounded-lg text-center text-sm font-medium transition ${
              action.disabled
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
            disabled={action.disabled}
          >
            <div className="text-xl mb-1">{action.icon}</div>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;