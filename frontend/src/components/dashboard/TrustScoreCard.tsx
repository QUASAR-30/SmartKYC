// src/components/dashboard/TrustScoreCard.tsx

import React from 'react';
// 💡 Importations pour Chart.js
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';

// Enregistrer les éléments nécessaires pour que Chart.js fonctionne
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

interface TrustScoreCardProps {
  score: number;
  badge: string;
  trend: number; // variation en points
  status: string[];
}

// ---------------------------------------------------------------------
// Configuration du Sparkline pour Chart.js
// ---------------------------------------------------------------------

const sparklineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { display: false }, // Masquer l'axe X
    y: { display: false }, // Masquer l'axe Y
  },
  plugins: {
    legend: { display: false }, // Masquer la légende
    tooltip: { enabled: false }, // Désactiver les tooltips
  },
  elements: {
    point: { radius: 0 }, // Masquer les points sur la ligne
    line: {
      tension: 0.3, // Rendre la ligne légèrement courbée
      borderWidth: 2,
    }
  }
};

const sparklineData = {
  // Nous utilisons simplement des indices pour l'axe X (les labels n'apparaissent pas)
  labels: [1, 2, 3, 4, 5, 6, 7], 
  datasets: [
    {
      data: [780, 795, 802, 808, 810, 815, 818], // Vos données de score
      borderColor: '#10B981', // Couleur de la ligne (Vert)
      backgroundColor: 'rgba(0,0,0,0)', // Rendre la zone sous la ligne transparente
    },
  ],
};

const TrustScoreCard: React.FC<TrustScoreCardProps> = ({ score, badge, trend, status }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Score : {score} / 1000</h2>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            badge === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
            badge === 'Silver' ? 'bg-gray-100 text-gray-800' :
            badge === 'Bronze' ? 'bg-orange-100 text-orange-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {badge} ⭐{badge === 'Gold' && '⭐⭐⭐'}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          
          {/* Remplacement du Sparklines par le composant Line de Chart.js */}
          <div style={{ width: 80, height: 30 }}>
            <Line options={sparklineOptions} data={sparklineData} />
          </div>

          <span className="text-sm text-green-600">+{trend} pts cette semaine</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {status.map((s, i) => (
          <div key={i} className="flex items-center text-sm">
            {s.startsWith('✔') ? (
              <span className="text-green-500 mr-2">✔</span>
            ) : s.startsWith('⚠') ? (
              <span className="text-yellow-500 mr-2">⚠</span>
            ) : (
              <span className="text-red-500 mr-2">❌</span>
            )}
            <span>{s}</span>
          </div>
        ))}
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition">
        Améliorer mon Score
      </button>
    </div>
  );
};

export default TrustScoreCard;