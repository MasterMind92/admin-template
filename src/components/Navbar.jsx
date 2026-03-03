// Import the specific icon you need (e.g., a coffee mug)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <span className="navbar-brand fw-bold">Administration</span>

      <div className="ms-auto">
        <button className="btn btn-outline-danger btn-sm">
          <FontAwesomeIcon icon={faArrowLeft} />  Déconnexion
        </button>
      </div>
    </nav>
  );
}