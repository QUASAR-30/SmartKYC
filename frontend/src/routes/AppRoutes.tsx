// AppRoutes.tsx

import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";

// Verify
// Correction 1 : Importation du composant conteneur principal (MultiStepForm)
import MultiStepForm from '../pages/Verify/MultipleStepForm'; 

// Les imports de types (FormData, StepProps) sont inutiles ici et ont été retirés.
// Les imports des étapes individuelles (Step1RCCM, Step2CNI, etc.) sont aussi inutiles, car
// ils sont gérés et rendus par MultiStepForm.tsx, et non directement par les Routes.

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
            
            {/* ❌ Les anciennes routes d'étapes étaient incorrectes pour cette architecture
            {<Route path="/verify" element={<Layout />} /> }
            <Route path="/verify/step1" element={<Step1RCCM />} />
            <Route path="/verify/step2" element={<Step2CNI />} />
            <Route path="/verify/step3" element={<Step3 />} />
            <Route path="/verify/summary" element={<Summary />} /> 
            */}

            {/* Dashboard */}
            {/* <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/score" element={<Score />} />
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