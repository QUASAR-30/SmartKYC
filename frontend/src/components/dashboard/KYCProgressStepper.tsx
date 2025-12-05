// src/components/KYCProgressStepper.tsx
interface Step {
  title: string;
  status: 'completed' | 'pending' | 'locked';
}

const KYCProgressStepper: React.FC = () => {
  const steps: Step[] = [
    { title: 'Informations entreprise', status: 'completed' },
    { title: 'Documents', status: 'completed' },
    { title: 'Vérification automatisée', status: 'pending' },
    { title: 'Feedback & réputation', status: 'pending' },
    { title: 'Badge Platinum', status: 'locked' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">Progression KYC</h3>
      <div className="space-y-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
              step.status === 'completed' ? 'bg-green-500' :
              step.status === 'pending' ? 'bg-yellow-500' :
              'bg-gray-400'
            }`}>
              {step.status === 'completed' && '✔'}
              {step.status === 'pending' && '⏳'}
              {step.status === 'locked' && '🔒'}
            </div>
            <span className={`ml-3 text-sm ${step.status === 'completed' ? 'text-green-700' : step.status === 'pending' ? 'text-yellow-700' : 'text-gray-500'}`}>
              Étape {idx + 1} : {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KYCProgressStepper;