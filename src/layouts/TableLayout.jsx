import { Outlet } from "react-router-dom";
import TableHeader from "../components/TableHeader";
import TableRows from "../components/TableRows";
import TableRowsClient from "../components/TableRowsClient";
import TableRowsAppart from "../components/TableRowsAppart";
import TableRowsReserv from "../components/TableRowsReserv";
import TableRowsFacture from "../components/TableRowsfacture";
import TableRowsInventaire from "../components/TableRowsInventaire";
import TableRowsPromo from "../components/TableRowsPromo";



export default function TableLayout(props) {
    
    function RowsActeur(props){

        if(props.acteur == "client"){
            return <TableRowsClient data={props.row} />
        }

        if(props.acteur == "user"){
            return <TableRows data={props.row} />;
        }

        if(props.acteur == "appartement"){
            return <TableRowsAppart data={props.row} />;
        }

        if(props.acteur == "reservation"){
            return <TableRowsReserv data={props.row} />;
        }

        if(props.acteur == "facture"){
            return <TableRowsFacture data={props.row} />;
        }

        if(props.acteur == "inventaire"){
            return <TableRowsInventaire data={props.row} />;
        }

        if(props.acteur == "promotion"){
            return <TableRowsPromo data={props.row} />;
        }

        return <TableRows data={props.row} />;
    }

  return (
    <table className="table table-striped">
        <thead>
            <tr>
            <TableHeader headerList={props.header} />
            </tr>
        </thead>
        <tbody>
            <RowsActeur acteur={props.acteur}  row={props.row}/>
        </tbody>
    </table>
  );
}