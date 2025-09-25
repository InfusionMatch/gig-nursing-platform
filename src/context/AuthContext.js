import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // For demo: hardcoded user
  const [user, setUser] = useState({
    name: "Jane Nurse",
    email: "nurse@example.com",
    role: "nurse" // nurse | partner | admin
  });

  function switchRole(role) {
    let userData = {
      nurse: { name: "Jane Nurse", email: "nurse@example.com", role: "nurse" },
      partner: { name: "Pharma Partner", email: "partner@example.com", role: "partner" },
      admin: { name: "Admin", email: "admin@example.com", role: "admin" }
    };
    setUser(userData[role]);
  }

  return (
    <AuthContext.Provider value={{ user, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}