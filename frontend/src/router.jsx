import { Route, Routes, Navigate } from "react-router-dom";
import PublicHomePage from "./pages/Home";
import Login from "./pages/Login";
import ProfessorPublicationPage from "./pages/Publications";

const isAuthenticated = () => {
    return Boolean(localStorage.getItem("token"));
};

function PrivateRoute({ children }) {
    return isAuthenticated() ? children : <Navigate to="/login" replace />
};

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<PublicHomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/publication/panuwat" element={<ProfessorPublicationPage name={"Assoc. Prof. Dr. Panuwat Padungros"} />} />
            <Route path="/publication/duangkamon" element={<ProfessorPublicationPage name={"Assoc. Prof. Dr. Duangkamon Tungkasamit"} />} />
            <Route path="/publication/wipark" element={<ProfessorPublicationPage name={"Assoc. Prof. Dr. Wipark Anutaraksakda"} />} />
            <Route path="/publication/sumrit" element={<ProfessorPublicationPage name={"Prof. Dr. Sumrit Washarasindhu"} />} />

            {/*
            <Route path="/dashboard/members" element={<PrivateRoute><MemberDashboard /></PrivateRoute>} />
            */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
};
