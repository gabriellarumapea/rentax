import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SidebarLayout = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-blue-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md border-r border-blue-100 px-6 py-8 space-y-6 hidden md:block">
        <h2 className="text-xl font-bold text-blue-600">RentaX Admin</h2>
        <nav className="space-y-3">
          <a
            href="/dashboard"
            className="block hover:text-blue-600 font-medium"
          >
            Dashboard
          </a>
          <a
            href="/add-car"
            className="block hover:text-blue-600 font-medium"
          >
            Tambah Mobil
          </a>
          <a
            href="/landing"
            className="block hover:text-blue-600 font-medium"
          >
            Landing Page
          </a>
        </nav>
        <button
          onClick={handleLogout}
          className="mt-10 bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded text-sm"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;
