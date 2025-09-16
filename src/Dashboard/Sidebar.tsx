const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
   <div className="font-medium space-y-2">
       <h2>Profile</h2>
      <h2>Product Management</h2>
      <h2>Coupons</h2>
      <h2>User Manage</h2>
   </div>
    </div>
  );
}
export default Sidebar;