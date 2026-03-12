import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/UsersIndex";
import UserForm from "./pages/UsersForm";
import Clients from "./pages/Clients";
import ClientForm from "./components/ClientForm";
import { Login } from "./pages/Login";
import Appartement from "./pages/Appartement";
import Reservation from "./pages/Reservation";
import ReservationForm from "./components/ReservationForm";
import AppartementForm from "./components/AppartementForm";
import Facture from "./pages/Facture";
import FactureForm from "./components/FactureForm";
import Inventaire from "./pages/Inventaire";
import InventaireForm from "./components/InventaireForm";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="inventaire" element={<Inventaire />} />
          <Route path="inventaire/add" element={<InventaireForm />} />
          <Route path="promotion" element={<Facture />} />
          <Route path="promotion/add" element={<Facture />} />
          <Route path="facture" element={<Facture />} />
          <Route path="facture/add" element={<FactureForm />} />
          <Route path="users" element={<Users />} />
          <Route path="users/add" element={<UserForm />} />
          <Route path="clients" element={<Clients />} />
          <Route path="clients/add" element={<ClientForm />} />
          <Route path="appartements" element={<Appartement />} />
          <Route path="appartements/add" element={<AppartementForm />} />
          <Route path="reservations" element={<Reservation />} />
          <Route path="reservations/add" element={<ReservationForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
