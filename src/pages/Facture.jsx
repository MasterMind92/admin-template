import { Link } from "react-router-dom";

import Index from "../components/Index";


export default function Facture(props) {
    
    const etats = [
        {id:1,libelle:"Actif",value:"A"},
        {id:2,libelle:"Inactif",value:"I"},
        {id:3,libelle:"Bloqué",value:"B"},
    ];

    const header = [
        {id:1,titre:"#"},
        {id:2,titre:"Numero Facture"},
        {id:3,titre:"Date Facture"},
        {id:4,titre:"Montant HT"},
        {id:5,titre:"Montant TVA"},
        {id:6,titre:"Montant TTC"},
        {id:7,titre:"Statut"},
        {id:8,titre:"Date Paiement"},
        {id:11,titre:"Action"}
    ];


    const row = [
        {id:1, NumeroFacture:"FACT-20250324121000", DateFacture:"2025-03-25", MontantHT:10000,MontantTVA:180,MontantTTC:10180,StatutPaiement:"En attente", DatePaiement: "Aucune" ,isActive:true,isDeleted:true,canModify:false},
        {id:2, NumeroFacture:"FACT-20250324121000", DateFacture:"2025-03-25", MontantHT:10000,MontantTVA:180,MontantTTC:10180,StatutPaiement:"En attente", DatePaiement: "Aucune" ,isActive:false,isDeleted:true,canModify:true},
        {id:3, NumeroFacture:"FACT-20250324121000", DateFacture:"2025-03-25", MontantHT:10000,MontantTVA:180,MontantTTC:10180,StatutPaiement:"En attente", DatePaiement: "Aucune" ,isActive:true,isDeleted:false,canModify:false},
        {id:4, NumeroFacture:"FACT-20250324121000", DateFacture:"2025-03-25", MontantHT:10000,MontantTVA:180,MontantTTC:10180,StatutPaiement:"En attente", DatePaiement: "Aucune" ,isActive:false,isDeleted:true,canModify:true},
        {id:5, NumeroFacture:"FACT-20250324121000", DateFacture:"2025-03-25", MontantHT:10000,MontantTVA:180,MontantTTC:10180,StatutPaiement:"En attente", DatePaiement: "Aucune" ,isActive:true,isDeleted:false,canModify:true},
    ];


  return (
    
    <Index acteur={"facture"} title={"Factures"} row={row} header={header} etats={etats} />

  );
}