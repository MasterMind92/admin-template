export default function TableHeader({headerList}){

    const list = headerList.map((row)=> 

        <th key = {row.id}>
            {row.titre}
        </th>

    );

    return (list);
    
}