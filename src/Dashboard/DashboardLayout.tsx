import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Right-side content (nested route will load here) */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
