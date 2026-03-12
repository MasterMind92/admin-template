import { Link } from "react-router-dom";

import Index from "../components/Index";


export default function Promotion(props) {
    
    const etats = [
        {id:1,libelle:"Actif",value:"A"},
        {id:2,libelle:"Inactif",value:"I"},
        {id:3,libelle:"Bloqué",value:"B"},
    ];

    const header = [
        {id:1,titre:"#"},
        {id:2,titre:"Code"},
        {id:3,titre:"Description"},
        {id:4,titre:"Type Remise"},
        {id:5,titre:"Valeur Remise"},
        {id:6,titre:"Date Début"},
        {id:7,titre:"Date Fin"},
        {id:8,titre:"Conditions Application"},
        {id:9,titre:"Etat"},
        {id:10,titre:"Action"}
    ];


    const row = [
        {id:1, code:"Rem-20250925105900", Description:"Remise de m'bon", TypeRemise:"Euh...", ValeurRemise:"15%", DateDebut:"2025-01-01 10:00:00" ,DateFin:"2025-01-01 10:00:00", observation:"A jour", ConditionsApplication:"Condition 1", Etat:"A", isActive:true,isDeleted:true,canModify:false},
        {id:2, code:"Rem-20250925105900", Description:"Remise de m'bon", TypeRemise:"Euh...", ValeurRemise:"15%", DateDebut:"2025-01-01 10:00:00" ,DateFin:"2025-01-01 10:00:00", observation:"A jour", ConditionsApplication:"Condition 1", Etat:"A", isActive:true,isDeleted:true,canModify:false},
        {id:3, code:"Rem-20250925105900", Description:"Remise de m'bon", TypeRemise:"Euh...", ValeurRemise:"15%", DateDebut:"2025-01-01 10:00:00" ,DateFin:"2025-01-01 10:00:00", observation:"A jour", ConditionsApplication:"Condition 1", Etat:"A", isActive:true,isDeleted:true,canModify:false},
        {id:4, code:"Rem-20250925105900", Description:"Remise de m'bon", TypeRemise:"Euh...", ValeurRemise:"15%", DateDebut:"2025-01-01 10:00:00" ,DateFin:"2025-01-01 10:00:00", observation:"A jour", ConditionsApplication:"Condition 1", Etat:"A", isActive:true,isDeleted:true,canModify:false},
     ];


  return (
    
    <Index acteur={"promotion"} title={"Promotion"} row={row} header={header} etats={etats} />

  );
}