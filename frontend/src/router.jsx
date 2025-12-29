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

    const profList = [
        {name: "Duangamol Tungasmita (Nuntasri)", position: "Associate Professor Dr.", division: "Organic Chemistry"},
        {name: "Panuwat Padungros", position: "Assistant Professor Dr.", division: "Organic Chemistry"},
        {name: "Sumrit Wacharasindhu", position: "Professor Dr.", division: "Organic Chemistry"},
        {name: "Wipark Anutrasakda", position: "Associate Professor Dr.", division: "Inorganic Chemistry"},
    ]

    return (
        <Routes>
            <Route path="/" element={<PublicHomePage profList={profList} />} />
            <Route path="/login" element={<Login />} />
            {profList.map((item) => (
                <Route path={item.name.split(" ")[0].toLowerCase()} element={<GroupProfile info={item} />} />
            ))}

            {/*
            <Route path="/dashboard/members" element={<PrivateRoute><MemberDashboard /></PrivateRoute>} />
            */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
};
