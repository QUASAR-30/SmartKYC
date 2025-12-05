// src/pages/Dashboard.tsx

import CreditRecommendation from "../../components/dashboard/CreditRecommendation";
import DocumentStatusTable from "../../components/dashboard/DocumentStatusTable";
import KYCProgressStepper from "../../components/dashboard/KYCProgressStepper";
import PerformanceMetrics from "../../components/dashboard/PerformanceMetrics";
import QuickActions from "../../components/dashboard/QuickActions";
import ReputationSection from "../../components/dashboard/ReputationSection";
import SubscriptionCard from "../../components/dashboard/SubscriptionCard";
// import TrustBadgeSection from "../../components/dashboard/TrustBadgeSection";
// import TrustScoreCard from "../../components/dashboard/TrustScoreCard";

const Dashboard: React.FC = () => {
  // Mock data
  const trustData = {
    score: 818,
    badge: 'Gold',
    trend: 12,
    status: [
      '✔ Comptes validés',
      '⚠ Vérification RCCM en attente',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">SmartKYC — Tableau de bord</h1>
        <div className="flex items-center space-x-4">
          <div className="bg-white rounded-full p-2 shadow-sm">
            <span className="text-sm text-gray-600">📅 Tue, December 05</span>
          </div>
          <div className="bg-white rounded-full p-2 shadow-sm">
            <img src="https://via.placeholder.com/32" alt="User" className="rounded-full" />
          </div>
        </div>
      </div>

      {/* Section 1: TrustScore Card */}
      <div className="mb-6">
        {/* <TrustScoreCard {...trustData} /> */}
      </div>

      {/* Sections 2-9: Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DocumentStatusTable />
            {/* <TrustBadgeSection /> */}
            <ReputationSection />
            <KYCProgressStepper />
          </div>
        </div>
        <div className="space-y-6">
          <PerformanceMetrics />
          <CreditRecommendation />
          <SubscriptionCard />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <QuickActions />
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © 2025 SmartKYC — Votre partenaire de confiance B2B
      </div>
    </div>
  );
};

export default Dashboard;