// AppRoutes.tsx

import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";

// Verify
// import Start from "../pages/Verify/Start";
// import Step1 from "../pages/Verify/Step1";
// import MultiStepForm from "../pages/Verify/MultipleStepForm";
// import Dashboard from "../pages/Dashboard/Dashboard";
// import Step2 from "../pages/Verify/Step2";
// import Step3 from "../pages/Verify/Step3";
// import Summary from "../pages/Verify/Summary";

// Correction 1 : Importation du composant conteneur principal (MultiStepForm)
import MultiStepForm from '../pages/Verify/MultipleStepForm'; 
import Dashboard from "../pages/Dashboard/Dashboard";


// Dashboard
// import Dashboard from "../pages/Dashboard/Dashboard";
// import Score from "../pages/Dashboard/Score";
// import Documents from "../pages/Dashboard/Documents";
// import Badge from "../pages/Dashboard/Badge";

// Admin
// import AdminHome from "../pages/Admin/AdminHome";
// import Users from "../pages/Admin/Users";
// import AdminDocs from "../pages/Admin/Documents";
// import Audits from "../pages/Admin/Audits";

export default function AppRoutes() {
    console.log("efeke");
    
    return (
        <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />

            {/* Vérification KYC */}
            {/* 🟢 CORRECTION 2 : N'utiliser qu'UNE SEULE ROUTE pointant vers le conteneur MultiStepForm. 
                 Cela résout l'avertissement 'No routes matched location /verify/step2'. */}
            <Route path="/verify" element={<MultiStepForm />} />
          

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/dashboard/score" element={<Score />} />
      <Route path="/dashboard/documents" element={<Documents />} />
      <Route path="/dashboard/badge" element={<Badge />} /> */}

            {/* Admin */}
            {/* <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/documents" element={<AdminDocs />} />
            <Route path="/admin/audits" element={<Audits />} /> */}
        </Routes>
    );
}