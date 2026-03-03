import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SeachForm({etat}){


    const list = etat.map((row)=> 

        <option key = {row.id} value={row.value}>
            {row.libelle}
        </option>

    );

    function handleSearch(){
        return;
    }

    return(

        <form className="row justify-content-center">
                    
            <div className="col-auto">
                <div className="my-3">
                    <input
                        type="date"
                        name=""
                        id=""
                        className="form-control"
                        placeholder=""
                        aria-describedby="helpId"
                    />

                </div>
            </div>
            <div className="col-auto">
                <div className="my-3">
                    <input
                        type="date"
                        name=""
                        id=""
                        className="form-control"
                        placeholder=""
                        aria-describedby="helpId"
                    />
                    
                </div>
            </div>
            <div className="col-auto">
                <div className="my-3">
                    <select
                        className="form-select"
                        name=""
                        id=""
                    >
                        
                        <option >choisissez un etat</option>
                        {list}

                    </select>
                </div>
            </div>
            <div className="col-auto">
                <div className=" my-3">
                    <button
                        type="button"
                        className="btn btn-primary"
                    >
                        <FontAwesomeIcon icon={faSearch} /> Rechercher
                    </button>
                </div>
            </div>
        </form>
    );
}