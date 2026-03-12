import CtrlBtn from "./IndexCtrlBtn";

export default function TableRowsInventaire({data}){

    const list = data.map((row)=> 

        <tr key = {row.id}>
           <td>
                {row.id}
            </td>
            <td>
                {row.Reference}
            </td>
            <td>
                {row.Libelle}
            </td>
            <td>
                {row.Categorie}
            </td>
            <td>
                {row.QuantiteStock}
            </td>
            <td>
                {row.SeuilMin}
            </td>
            <td>
                {row.Localisation}
            </td>
            {/* <td>
                {row.Etat}
            </td> */}
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