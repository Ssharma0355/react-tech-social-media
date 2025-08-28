import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>

      {/* Example cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">Card 1</div>
        <div className="bg-white p-6 rounded-xl shadow-md">Card 2</div>
        <div className="bg-white p-6 rounded-xl shadow-md">Card 3</div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
