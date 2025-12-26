import { Route, Routes, Navigate } from "react-router-dom";
import PublicHomePage from "./pages/Home";
import Login from "./pages/Login";
import GroupProfile from "./pages/GroupProfile";

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
            <Route path="/duangamol" element={<GroupProfile name={"duangamol"} />} />
            <Route path="/panuwat" element={<GroupProfile name={"panuwat"} />} />
            <Route path="/sumrit" element={<GroupProfile name={"sumrit"}/>} />
            <Route path="/wipark" element={<GroupProfile name={"wipark"}/>} />

            {/*
            <Route path="/dashboard/members" element={<PrivateRoute><MemberDashboard /></PrivateRoute>} />
            */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
};
