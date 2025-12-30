// layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function AdminLayout() {
  return (
    <div className="d-flex vh-100">
      <Sidebar  />
      <div className="flex-grow-1 ">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
