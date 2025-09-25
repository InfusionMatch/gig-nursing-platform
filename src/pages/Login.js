import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-6">Login (Demo)</h2>
        <p className="mb-4">For this demo, use the sidebar to switch roles.</p>
        <button className="w-full py-2 bg-green-600 text-white rounded">Login</button>
      </div>
    </div>
  );
}