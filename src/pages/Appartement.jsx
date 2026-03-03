import { Link } from "react-router-dom";

import Index from "../components/Index";


export default function Appartement(props) {
    
    const etats = [
        {id:1,libelle:"Actif",value:"A"},
        {id:2,libelle:"Inactif",value:"I"},
        {id:3,libelle:"Bloqué",value:"B"},
    ];

    const header = [
        {id:1,titre:"#"},
        {id:2,titre:"code"},
        {id:3,titre:"type"},
        {id:4,titre:"surface"},
        {id:5,titre:"etage"},
        {id:6,titre:"capacite Max"},
        {id:7,titre:"Dernier Nettoyage"},
        {id:8,titre:"Statut"},
        {id:9,titre:"Etat"},
        {id:10,titre:"Action"}
    ];


    const row = [
        {id:1, code:"Appart-20250925105900", type:"Villa Basse", surface:"80 m²",etage:1,capaciteMax:10,dernierNettoyage:"2025-01-01 10:00:00", observation:"A jour",etat:"A",isActive:true,isDeleted:true,canModify:false},
        {id:2, code:"Appart-20250925105900", type:"Villa Basse", surface:"50 m²",etage:3,capaciteMax:1,dernierNettoyage:"2025-01-01 10:00:00", observation:"A jour",etat:"A",isActive:false,isDeleted:false,canModify:true},
        {id:3, code:"Appart-20250925105900", type:"Villa Basse", surface:"100 m²",etage:2,capaciteMax:20,dernierNettoyage:"2025-01-01 10:00:00", observation:"A jour",etat:"A",isActive:false,isDeleted:true,canModify:true},
     ];


  return (
    
    <Index acteur={"appartement"} title={"Appartement"} row={row} header={header} etats={etats} />

  );
}