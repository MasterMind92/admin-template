import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchForm  from "../components/SearchForm";
import TableLayout from "../layouts/TableLayout";
import Index from "../components/Index";


export default function Users(props) {
    
    const etats = [
        {id:1,libelle:"Actif",value:"A"},
        {id:2,libelle:"Inactif",value:"I"},
        {id:3,libelle:"Bloqué",value:"B"},
    ];

    const header = [
        {id:1,titre:"#"},
        {id:2,titre:"Name"},
        {id:3,titre:"Email"},
        {id:4,titre:"Role"},
        {id:5,titre:"Etat"},
        {id:6,titre:"Action"}
    ];


    const row = [
        {id:1,nom:"Dalo Marc",email:"",role:"standard",isActive:false,isDeleted:true,canModify:true},
        {id:2,nom:"Son Goku",email:"son.goku@dbz.jpn",role:"Employe",isActive:true,isDeleted:false,canModify:true},
        {id:3,nom:"Kratos",email:"kratos@gow.psn",role:"standard",isActive:false,isDeleted:true,canModify:true},
        {id:4,nom:"Thor",email:"thor@greek.god",role:"Admin",isActive:true,isDeleted:true,canModify:true},
        {id:5,nom:"Gojou Satoru",email:"gojou.satoru@jjk.jpn",role:"standard",isActive:false,isDeleted:false,canModify:true},
        {id:6,nom:"God Toji",email:"toji.fushiguro@jjk.jpn",role:"standard",isActive:true,isDeleted:true,canModify:true},
    ];


  return (
    
    <Index acteur={"user"} title={"Utilisateurs"} row={row} header={header} etats={etats} />

  );
}