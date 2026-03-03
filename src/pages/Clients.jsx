import { Link } from "react-router-dom";

import Index from "../components/Index";


export default function Clients(props) {
    
    const etats = [
        {id:1,libelle:"Actif",value:"A"},
        {id:2,libelle:"Inactif",value:"I"},
        {id:3,libelle:"Bloqué",value:"B"},
    ];

    const header = [
        {id:1,titre:"#"},
        {id:2,titre:"Name"},
        {id:3,titre:"Prenoms"},
        {id:4,titre:"Email"},
        {id:5,titre:"Telephone"},
        {id:6,titre:"Adresse"},
        {id:7,titre:"Type Client"},
        {id:8,titre:"Statut"},
        {id:10,titre:"Etat"},
        {id:11,titre:"Action"}
    ];


    const row = [
        {id:1, nom:"Dalo", prenoms:"Marc-Andre", email:"marc.dalo@sycapay.com",telephone:"0747427163",adresse:"Ohlalala",typeClient:"Regulier", statut: "A jour",isActive:false,isDeleted:true,canModify:false},
        {id:2, nom:"Gojou", prenoms:"Satoru", email:"goujou.satoru@jjk.jpn",telephone:"0215487965",adresse:"Gojou Clan", typeClient:"Regulier", statut: "A jour",isActive:false,isDeleted:true,canModify:true},
        {id:3, nom:"Fushiguro", prenoms:"Toji", email:"toji.fushiguro@jjk.jpn",telephone:"0316254865",adresse:"Zenin Clan",typeClient:"Plus que regulier", statut: "A jour",isActive:true,isDeleted:true,canModify:true},
        {id:4, nom:"Ryomen", prenoms:"Sukuna", email:"ryomen.sukuna@jjk.jpn",telephone:"0253165967",adresse:"Itadori Yuji",typeClient:"Ponctuel", statut: "A jour",isActive:false,isDeleted:false,canModify:true},
    ];


  return (
    
    <Index acteur={"client"} title={"Clients"} row={row} header={header} etats={etats} />

  );
}