import CtrlBtn from "./IndexCtrlBtn";

export default function TableRowsPromo({data}){

    const list = data.map((row)=> 

        <tr key = {row.id}>
           <td>
                {row.id}
            </td>
            <td>
                {row.Code}
            </td>
            <td>
                {row.Description}
            </td>
            <td>
                {row.TypeRemise}
            </td>
            <td>
                {row.DateDebut}
            </td>
            <td>
                {row.DateFin}
            </td>
            <td>
                {row.ConditionsApplication}
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