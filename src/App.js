import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Sidebar from "./components/Sidebar/Sidebar";
import NurseDashboard from "./pages/Nurse/Dashboard";
import PartnerDashboard from "./pages/Partner/Dashboard";
import AdminDashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function RoleRoutes() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  switch (user.role) {
    case "nurse":
      return <NurseDashboard />;
    case "partner":
      return <PartnerDashboard />;
    case "admin":
      return <AdminDashboard />;
    default:
      return <NotFound />;
  }
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<RoleRoutes />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;