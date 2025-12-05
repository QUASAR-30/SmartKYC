import React from "react";

interface KycScoreCardProps {
  score: number;
  badge: string;
  levelColor?: string;
  city?: string;
  evolution?: string;
}

const KycScoreCard: React.FC<KycScoreCardProps> = ({
  score,
  badge,
  levelColor = "text-yellow-500",
  city = "Douala, Cameroun",
  evolution = "+12 pts cette semaine",
}) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
      
      {/* TOP IMAGE / BACKGROUND */}
      <div className="w-full h-48 bg-gradient-to-b from-blue-300 to-blue-100 flex items-center justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
          alt="badge"
          className="w-24 h-24 object-contain drop-shadow-md"
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="px-5 py-4">

        {/* Score */}
        <h2 className="text-3xl font-bold text-gray-900">${score}</h2>
        <p className="text-gray-700 text-lg mt-1">
          Score SmartKYC • <span className={`${levelColor} font-semibold`}>{badge}</span>
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <span>📍</span> <p>{city}</p>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-3">
          Votre niveau de crédibilité est basé sur l'analyse de vos documents, 
          l'historique de vos ventes Genuka et les vérifications SmartKYC.
        </p>

        {/* Evolution */}
        <p className="text-blue-600 text-sm font-medium mt-2">{evolution}</p>

        {/* BUTTON */}
        <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-2xl mt-5 shadow-md hover:bg-blue-700 transition">
          Améliorer mon score
        </button>
      </div>
    </div>
  );
};

export default KycScoreCard;
