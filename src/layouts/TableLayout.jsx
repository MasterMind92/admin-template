import { Outlet } from "react-router-dom";
import TableHeader from "../components/TableHeader";
import TableRows from "../components/TableRows";
import TableRowsClient from "../components/TableRowsClient";

export default function TableLayout(props) {
    
    function RowsActeur(props){

        if(props.acteur == "client"){
            return <TableRowsClient data={props.row} />
        }

        if(props.acteur == "user"){
            return <TableRows data={props.row} />;
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