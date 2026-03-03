
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen, faTrash, faThumbsUp, faThumbsDown,faSearch } from '@fortawesome/free-solid-svg-icons';


export default function CtrlBtn(props){

    function AskConfirm(message){
        confirm(message)
    }

    return (
        <>
            <button style={{"display":props.isActive ? "inline":"none"}} onClick={()=>AskConfirm("Voulez-vous effectuer cette activation ?")} className="btn btn-secondary" title="Activer" > <FontAwesomeIcon icon={faThumbsUp} /> </button>
            <button style={{"display":!props.isActive ? "inline":"none"}} onClick={()=>AskConfirm("Voulez-vous effectuer cette désactivation?")} className="btn btn-default" title="Desactiver" > <FontAwesomeIcon icon={faThumbsDown} /> </button>
            <a style={{"display":props.canModify ? "inline":"none"}} onClick={()=>AskConfirm("Voulez-vous effectuer cette modification?")} className="btn btn-primary" title="Modifier" > <FontAwesomeIcon icon={faPen} /> </a>
            <button style={{"display":props.isDeleted ? "inline":"none"}} onClick={()=>AskConfirm("Voulez-vous effectuer cette suppression?")} className="btn btn-danger text-white" title="Supprimer" > <FontAwesomeIcon icon={faTrash} /> </button>
            <button style={{"display":!props.isDeleted ? "inline":"none"}} onClick={()=>AskConfirm("Voulez-vous effectuer cette rehabilation?")} className="btn btn-success text-white" title="Rehabiliter" > <FontAwesomeIcon icon={faCheck} /> </button>
        </>
    );
}