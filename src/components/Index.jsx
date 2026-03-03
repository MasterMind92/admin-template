import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchForm  from "./SearchForm";
import TableLayout from "../layouts/TableLayout";
import { faPlus } from '@fortawesome/free-solid-svg-icons';



export default function Index(props) {


  return (
    
    <div>
        <h2 className="mb-4">{props.title} </h2>

        <div className="card mb-4">
            <div className="card-body">
                <SearchForm etat={props.etats} />
            </div>
        </div>
        
      <div className="card shadow-sm">
        <div className="card-body">

            <div className="row justify-content-between my-3">
                <div className="col-12 col-md-auto">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Rechercher" aria-label="" />                                                                                                                                                                                                               
                </div>
               
                <div className="col-12 col-md-auto">
                    <Link className="btn btn-primary" to="add">
                        <FontAwesomeIcon icon={faPlus} />  Ajouter
                    </Link>
                </div>
            </div>  

            <TableLayout acteur={props.acteur} header={props.header} row={props.row}/>
          
        </div>
      </div>
    </div>
  );
}