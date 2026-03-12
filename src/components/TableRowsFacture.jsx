import CtrlBtn from "./IndexCtrlBtn";

export default function TableRowsFacture({data}){

    const list = data.map((row)=> 

        <tr key = {row.id}>
           <td>
                {row.id}
            </td>
            <td>
                {row.NumeroFacture}
            </td>
            <td>
                {row.DateFacture}
            </td>
            <td>
                {row.MontantHT}
            </td>
            <td>
                {row.MontantTVA}
            </td>
            <td>
                {row.MontantTTC}
            </td>
            <td>
                {row.StatutPaiement}
            </td>
            <td>
                {row.DatePaiement}
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