import CtrlBtn from "./IndexCtrlBtn";

export default function TableRowsClient({data}){

    const list = data.map((row)=> 

        <tr key = {row.id}>
           <td>
                {row.id}
            </td>
            <td>
                {row.nom}
            </td>
            <td>
                {row.prenoms}
            </td>
            <td>
                {row.email}
            </td>
            <td>
                {row.telephone}
            </td>
            <td>
                {row.adresse}
            </td>
            <td>
                {row.typeClient}
            </td>
            <td>
                {row.statut}
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