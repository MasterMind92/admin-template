import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/UsersIndex";
import UserForm from "./pages/UsersForm";
import Clients from "./pages/Clients";
import ClientForm from "./components/ClientForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users title="Utilisateurs"/>} />
          <Route path="users/add" element={<UserForm />} />
          <Route path="clients" element={<Clients />} />
          <Route path="clients/add" element={<ClientForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
