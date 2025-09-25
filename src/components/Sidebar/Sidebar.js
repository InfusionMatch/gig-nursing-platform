import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const nurseLinks = [
  { to: "/", label: "Dashboard" },
  { to: "/jobs", label: "Available Gigs" },
  { to: "/my-visits", label: "My Visits" },
  { to: "/settings", label: "Settings" }
];

const partnerLinks = [
  { to: "/", label: "Dashboard" },
  { to: "/post-job", label: "Post Job" },
  { to: "/patients", label: "Patients" },
  { to: "/settings", label: "Settings" }
];

const adminLinks = [
  { to: "/", label: "Admin Dashboard" },
  { to: "/nurses", label: "Nurses" },
  { to: "/partners", label: "Partners" },
  { to: "/settings", label: "Settings" }
];

export default function Sidebar() {
  const { user, switchRole } = useAuth();
  const location = useLocation();
  let links = [];
  if (user?.role === "nurse") links = nurseLinks;
  if (user?.role === "partner") links = partnerLinks;
  if (user?.role === "admin") links = adminLinks;

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen flex flex-col">
      <div className="p-6 font-bold text-xl text-green-700">InfusionMatch</div>
      <nav className="flex-1">
        {links.map(link => (
          <Link
            to={link.to}
            key={link.to}
            className={`block px-6 py-3 rounded hover:bg-green-100 ${location.pathname === link.to ? "bg-green-50 font-semibold" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      {/* Role switcher for demo/testing */}
      <div className="p-4">
        <div className="text-xs mb-2 text-gray-400">Switch role:</div>
        <div className="flex gap-2">
          <button className="bg-green-200 px-2 rounded" onClick={() => switchRole("nurse")}>Nurse</button>
          <button className="bg-blue-200 px-2 rounded" onClick={() => switchRole("partner")}>Partner</button>
          <button className="bg-red-200 px-2 rounded" onClick={() => switchRole("admin")}>Admin</button>
        </div>
        <div className="mt-4">
          <div className="text-sm">{user?.name}</div>
          <div className="text-xs text-gray-500">{user?.email}</div>
        </div>
      </div>
    </aside>
  );
}