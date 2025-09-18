import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      <div className="font-medium space-y-2">
        {/* Profile */}
        <Link to="/dashboard/profile" className="block hover:text-gray-300">
          Profile
        </Link>

        {/* Product Management with dropdown */}
        <div>
          <h2
            className="cursor-pointer flex justify-between items-center hover:text-gray-300"
            onClick={() => setOpen(!open)}
          >
            Product Management
            <span className="text-sm">{open ? "▲" : "▼"}</span>
          </h2>

          {open && (
            <div className="ml-4 mt-2 space-y-1 text-sm text-gray-300">
              <Link to="/dashboard/product-add" className="block hover:text-white">
                ➕ Product Add
              </Link>
              <Link to="/dashboard/product-detail" className="block hover:text-white">
                📄 Product Detail
              </Link>
            </div>
          )}
        </div>

        {/* Coupons */}
        <Link to="/dashboard/coupons" className="block hover:text-gray-300">
          Coupons
        </Link>

        {/* User Manage */}
        <Link to="/dashboard/user-manage" className="block hover:text-gray-300">
          User Manage
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
