import { TableItem } from "./item";
export const Table = ({ list }) => {
    return (
        <div>
            <table>
                <tr>
                    <th><span style={{ marginLeft: "10px" }}>Name</span></th>
                    <th><span style={{ marginLeft: "20px" }}>Title</span> </th>
                    <th><span style={{ marginLeft: "20px" }}>Salary</span> </th>
                    <th><span style={{ marginLeft: "20px" }}>job des.</span> </th>
                    <th><span style={{ marginLeft: "20px" }}>location</span> </th>
                    <th><span style={{ marginLeft: "20px" }}>type</span> </th>
                </tr>
                {list.map((e, i) => (
                    <TableItem {...e} key={i} />
                ))}
            </table>

        </div>
    );
};