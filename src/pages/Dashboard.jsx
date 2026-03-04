import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faRecycle,faPlus, faPen, faTrash, faThumbsUp, faThumbsDown,faSearch } from '@fortawesome/free-solid-svg-icons';


export default function Dashboard() {
  return (
    <div>
      <h2 className="mb-4"> Dashboard</h2>

        <div className="row mb-4">
            <div className="col-md-4">
            <div className="card shadow-sm">
                <div className="card-body">
                <h5>Total Appartements</h5>
                <h3>120</h3>
                    <a name="" id="" className="btn btn-warning" href="#" role="button"> <FontAwesomeIcon icon={faEye} />  Voir</a>
                </div>
            </div>
            </div>

            <div className="col-md-4">
            <div className="card shadow-sm">
                <div className="card-body">
                <h5>Reservations en attente</h5>
                <h3>5</h3>
                <a name="" id="" className="btn btn-warning" href="#" role="button"> <FontAwesomeIcon icon={faEye} />  Voir</a>
                </div>
            </div>
            </div>

            <div className="col-md-4">
            <div className="card shadow-sm">
                <div className="card-body">
                <h5>Reservations validées</h5>
                <h3>10</h3>
                <a name="" id="" className="btn btn-success" href="#" role="button"> <FontAwesomeIcon icon={faEye} />  Voir</a>
                </div>
            </div>
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-md-4">
            <div className="card shadow-sm">
                <div className="card-body">
                <h5>Total Clients</h5>
                <h3>120</h3>
                    <a name="" id="" className="btn btn-info" href="#" role="button"> <FontAwesomeIcon icon={faEye} />  Voir</a>

                </div>
            </div>
            </div>

            <div className="col-md-4">
                <div className="card shadow-sm">
                    <div className="card-body">
                    <h5>Clients en attente</h5>
                    <h3>5</h3>
                    <a name="" id="" className="btn btn-warning" href="#" role="button"> <FontAwesomeIcon icon={faEye} />  Voir</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card shadow-sm">
                    <div className="card-body">
                    <h5>Clients validées</h5>
                    <h3>10</h3>
                    <a name="" id="" className="btn btn-success" href="#" role="button"> <FontAwesomeIcon icon={faEye} />  Voir</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12">

            {/* <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                    <td>1</td>
                    <td>Marc Dalo</td>
                    <td>marc@email.com</td>
                    <td>Admin</td>
                    <td> 
                        <span className="text-success font-weight-bold">Activé</span>
                    </td>
                    <td>
                        <button className="btn btn-secondary" title="Activer" > <FontAwesomeIcon icon={faThumbsUp} /> </button>
                        <button className="btn btn-default" title="Desactiver" > <FontAwesomeIcon icon={faThumbsDown} /> </button>
                        <button className="btn btn-primary" title="Modifier" > <FontAwesomeIcon icon={faPen} /> </button>
                        <button className="btn btn-danger text-white" title="Supprimer" > <FontAwesomeIcon icon={faTrash} /> </button>
                    </td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>Marc Dalo</td>
                    <td>marc@email.com</td>
                    <td>Admin</td>
                    <td> 
                        <span className="text-danger font-weight-bold">Bloqué</span>
                    </td>
                    
                    <td>
                        <button className="btn btn-secondary" title="Activer" > <FontAwesomeIcon icon={faThumbsUp} /> </button>
                        <button className="btn btn-default" title="Desactiver" > <FontAwesomeIcon icon={faThumbsDown} /> </button>
                        <button className="btn btn-primary" title="Modifier" > <FontAwesomeIcon icon={faPen} /> </button>
                        <button className="btn btn-danger text-white" title="Supprimer" > <FontAwesomeIcon icon={faTrash} /> </button>
                    </td>
                    </tr>
                    
                </tbody>
                </table> */}
            </div>
        </div>
    </div>

    
  );
}