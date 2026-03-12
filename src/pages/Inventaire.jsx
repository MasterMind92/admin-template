import { Link } from "react-router-dom";

import Index from "../components/Index";


export default function Inventaire(props) {
    
    const etats = [
        {id:1,libelle:"Actif",value:"A"},
        {id:2,libelle:"Inactif",value:"I"},
        {id:3,libelle:"Bloqué",value:"B"},
    ];

    const header = [
        {id:1,titre:"#"},
        {id:2,titre:"Reference"},
        {id:3,titre:"Libelle"},
        {id:4,titre:"Categorie"},
        {id:5,titre:"QuantiteStock"},
        {id:6,titre:"SeuilMin"},
        {id:7,titre:"Localisation"},
        {id:8,titre:"Etat"},
        {id:11,titre:"Action"}
    ];


    const row = [
        {id:1, Reference:"REF-20250324121000", Libelle:"2025-03-25", Categorie:"Categorie 1",QuantiteStock:100,SeuilMin:10,Localisation:"Daloa", Etat: "A jour" ,isActive:false,isDeleted:false,canModify:true},
        {id:2, Reference:"REF-20250324121000", Libelle:"2025-03-25", Categorie:"Categorie 1",QuantiteStock:100,SeuilMin:10,Localisation:"Daloa", Etat: "A jour" ,isActive:true,isDeleted:false,canModify:false},
        {id:3, Reference:"REF-20250324121000", Libelle:"2025-03-25", Categorie:"Categorie 1",QuantiteStock:100,SeuilMin:10,Localisation:"Daloa", Etat: "A jour" ,isActive:true,isDeleted:true,canModify:true},
        {id:4, Reference:"REF-20250324121000", Libelle:"2025-03-25", Categorie:"Categorie 1",QuantiteStock:100,SeuilMin:10,Localisation:"Daloa", Etat: "A jour" ,isActive:false,isDeleted:true,canModify:true},
    ];


  return (
    
    <Index acteur={"inventaire"} title={"Inventaire"} row={row} header={header} etats={etats} />

  );
}