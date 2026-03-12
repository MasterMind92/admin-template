import { Link,NavLink } from "react-router-dom";
// Import the specific icon you need (e.g., a coffee mug)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faList, faUser,faUsers, faHome, faDollar, faArrowDown, faGear, faFileInvoice } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {

    // Style function for active links
const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#333' : '#fff',
    fontWeight: isActive ? 'bold' : 'normal',
    background: isActive ? '#fff' : 'rgb(33, 37, 41)',
    padding: '5px 10px'
});

  return (
    <div className="bg-dark p-3" style={{ width: "250px" }}>
      <h4 className="text-center mb-4">Admin Panel</h4>

      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink  style={navLinkStyles} className="nav-link">
            <FontAwesomeIcon icon={faList} />  Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink  style={navLinkStyles} className="nav-link" to="clients">
            <FontAwesomeIcon icon={faUsers} /> Clients
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink  style={navLinkStyles} className="nav-link" to="appartements">
            <FontAwesomeIcon icon={faHome} /> Appartements
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink  style={navLinkStyles} className="nav-link" to="reservations">
            <FontAwesomeIcon icon={faList} /> Reservations
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink  style={navLinkStyles} className="nav-link" to="facture">
            <FontAwesomeIcon icon={faDollar} /> Factures
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink  style={navLinkStyles} className="nav-link" to="inventaire">
            <FontAwesomeIcon icon={faFileInvoice} /> Inventaire
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink  style={navLinkStyles} className="nav-link" to="promotion">
            <FontAwesomeIcon icon={faArrowDown} /> Promotion
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink  style={navLinkStyles} className="nav-link" to="users">
            <FontAwesomeIcon icon={faUser} /> Utilisateurs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink  style={navLinkStyles} className="nav-link" to="/">
            <FontAwesomeIcon icon={faGear} /> Parametres
          </NavLink>
        </li>
      </ul>
    </div>
  );
}