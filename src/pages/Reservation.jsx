import { Link } from "react-router-dom";

import Index from "../components/Index";


export default function Reservation(props) {
    
    const etats = [
        {id:1,libelle:"Actif",value:"A"},
        {id:2,libelle:"Inactif",value:"I"},
        {id:3,libelle:"Bloqué",value:"B"},
    ];

    const header = [
        {id:1,titre:"#"},
        {id:2,titre:"Numero"},
        {id:3,titre:"DateArrivee"},
        {id:4,titre:"DateDepart"},
        {id:5,titre:"NbAdultes"},
        {id:6,titre:"NbEnfants"},
        {id:7,titre:"Statut Client"},
        {id:10,titre:"Source"},
        {id:10,titre:"Notes"},
        {id:11,titre:"Action"}
    ];


    const row = [
        {id:1, Numero:"RSRV-20269548563", DateArrivee:"2026-01-25 20:05:00", DateDepart:"2026-01-26 20:05:00",NbAdultes:1,NbEnfants:3,Statut:"En cours", fkClient: 25 ,fkAppart: 5 ,Source: "A jour",Notes: "A jour", isActive:false,isDeleted:true,canModify:false},
        {id:2, Numero:"RSRV-20269548563", DateArrivee:"2026-01-25 20:05:00", DateDepart:"2026-01-26 20:05:00",NbAdultes:4,NbEnfants:0,Statut:"Pret", fkClient: 25 ,fkAppart: 5 ,Source: "A jour",Notes: "A jour", isActive:true,isDeleted:true,canModify:true},
        {id:3, Numero:"RSRV-20269548563", DateArrivee:"2026-01-25 20:05:00", DateDepart:"2026-01-26 20:05:00",NbAdultes:2,NbEnfants:3,Statut:"Consommée", fkClient: 25 ,fkAppart: 5 ,Source: "A jour",Notes: "A jour", isActive:false,isDeleted:false,canModify:true},
        {id:4, Numero:"RSRV-20269548563", DateArrivee:"2026-01-25 20:05:00", DateDepart:"2026-01-26 20:05:00",NbAdultes:4,NbEnfants:1,Statut:"En cours", fkClient: 25 ,fkAppart: 5 ,Source: "A jour",Notes: "A jour", isActive:true,isDeleted:false,canModify:false},
    ];


  return (
    
    <Index acteur={"reservation"} title={"Reservation"} row={row} header={header} etats={etats} />

  );
}