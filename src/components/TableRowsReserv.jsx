import CtrlBtn from "./IndexCtrlBtn";

export default function TableRowsReserv({data}){

    const list = data.map((row)=> 

        <tr key = {row.id}>
           <td>
                {row.id}
            </td>
            <td>
                {row.Numero}
            </td>
            <td>
                {row.DateArrivee}
            </td>
            <td>
                {row.DateDepart}
            </td>
            <td>
                {row.NbAdultes}
            </td>
            <td>
                {(row.NbEnfants>1) ?  row.NbEnfants+ " personnes" : row.NbEnfants+ " personne"}
            </td>
            <td>
                {row.Source}
            </td>
            <td>
                {row.Notes}
            </td>
            <td>
                {/* <span className="text-success font-weight-bold">Activé</span> */}
                <span className={row.isActive ? 'text-success': 'text-danger'}> {row.isActive ? 'Activé': 'Désactivé'} </span> 
            </td>
            <td>
                <CtrlBtn isActive={row.isActive} isDeleted={row.isDeleted} canModify={row.canModify} />
            </td>
        </tr>

    );

    return (list);
}