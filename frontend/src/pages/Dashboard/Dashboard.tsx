// {"variant":"standard","id":"58210"}
import CreditRecommendation from "../../components/dashboard/CreditRecommendation";
import DocumentStatusTable from "../../components/dashboard/DocumentStatusTable";
import KYCProgressStepper from "../../components/dashboard/KYCProgressStepper";
import PerformanceMetrics from "../../components/dashboard/PerformanceMetrics";
import ReputationSection from "../../components/dashboard/ReputationSection";
import SubscriptionCard from "../../components/dashboard/SubscriptionCard";
import TrustBadgeSection from "../../components/dashboard/TrustBadgeSection";
import TrustScoreCard from "../../components/dashboard/TrustScoreCard";
import Header from "../../components/layout/Header";

const Dashboard: React.FC = () => {
  const trustData = {
    score: 818,
    badge: "Gold",
    trend: 12,
    status: ["✔ Comptes validés", "⚠ Vérification RCCM en attente"],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <Header />
      <div style={{height:"130px"}} />

          <p className="text-4xl font-bold mb-5 text-center text-gray-800">VOTRE ANALYSE KYC</p>

      {/* TOP SECTION – Score + Badge + Résumé */}
      <div className="px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div >
          <div className="md:col-span-1">
            <TrustScoreCard {...trustData} />
          </div>

          <div className="md:col-span-1 mt-7">
            <CreditRecommendation />
          </div>
        </div>
        

        
        <div className="md:col-span-2">
          <PerformanceMetrics />
        </div>
      

        
        <div >
          <div className="md:col-span-1">
            <KYCProgressStepper />
          </div>

          <div className="md:col-span-1 mt-7">
            <CreditRecommendation />
          </div>
        </div>
      </div>

      {/* SPACING */}
      {/* <div className="h-4" /> */}

      {/* KYC BLOCK – Stepper + Documents */}
      {/* <div className="px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <KYCProgressStepper />
        <DocumentStatusTable />
      </div> */}

      {/* SPACING */}
      {/* <div className="h-4" /> */}

      {/* REPUTATION */}  
      

      {/* SPACING */}
      {/* <div className="h-6" /> */}

      {/* RECOMMENDATION + SUBSCRIPTION + BADGE */}
      {/* <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <SubscriptionCard />
        <TrustBadgeSection />
      </div> */}
      <div style={{height:"20px"}} />
    </div>
  );
};

export default Dashboard;
