import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="font-medium space-y-2">
        {/* Profile */}
        <h2 className="cursor-pointer hover:text-gray-300">Profile</h2>

        {/* Product Management with dropdown */}
        <div>
          <h2
            className="cursor-pointer flex justify-between items-center hover:text-gray-300"
            onClick={() => setOpen(!open)}
          >
            Product Management
            <span className="text-sm">{open ? "▲" : "▼"}</span>
          </h2>

          {/* Dropdown */}
          {open && (
            <div className="ml-4 mt-2 space-y-1 text-sm text-gray-300">
              <h3 className="cursor-pointer hover:text-white">➕ Product Add</h3>
              <h3 className="cursor-pointer hover:text-white">📄 Product Detail</h3>
            </div>
          )}
        </div>

        {/* Coupons */}
        <h2 className="cursor-pointer hover:text-gray-300">Coupons</h2>

        {/* User Manage */}
        <h2 className="cursor-pointer hover:text-gray-300">User Manage</h2>
      </div>
    </div>
  );
};

export default Sidebar;
