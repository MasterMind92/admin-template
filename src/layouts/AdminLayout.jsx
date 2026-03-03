import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";

export default function AdminLayout() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Navbar />
        <div className="container-fluid p-4 bg-light min-vh-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}