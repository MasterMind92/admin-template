import { Link } from "react-router-dom";
// Import the specific icon you need (e.g., a coffee mug)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faList, faUser,faUsers, faHome, faDollar, faArrowDown, faGear, faFileInvoice } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
      <h4 className="text-center mb-4">Admin Panel</h4>

      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            <FontAwesomeIcon icon={faList} />  Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/clients">
            <FontAwesomeIcon icon={faUsers} /> Clients
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/appartements">
            <FontAwesomeIcon icon={faHome} /> Appartements
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            <FontAwesomeIcon icon={faList} /> Reservations
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            <FontAwesomeIcon icon={faDollar} /> Factures
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            <FontAwesomeIcon icon={faFileInvoice} /> Inventaire
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            <FontAwesomeIcon icon={faArrowDown} /> Promotion
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/users">
            <FontAwesomeIcon icon={faUser} /> Utilisateurs
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            <FontAwesomeIcon icon={faGear} /> Parametres
          </Link>
        </li>
      </ul>
    </div>
  );
}