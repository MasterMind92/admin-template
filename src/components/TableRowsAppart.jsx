import CtrlBtn from "./IndexCtrlBtn";

export default function TableRowsAppart({data}){

    const list = data.map((row)=> 

        <tr key = {row.id}>
           <td>
                {row.id}
            </td>
            <td>
                {row.code}
            </td>
            <td>
                {row.type}
            </td>
            <td>
                {row.surface}
            </td>
            <td>
                {row.etage ? row.etage : 0}
            </td>
            <td>
                {(row.capaciteMax>1) ?  row.capaciteMax+ " personnes" : row.capaciteMax+ " personne"}
            </td>
            <td>
                {row.dernierNettoyage}
            </td>
            <td>
                {row.observation}
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