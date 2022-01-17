export const TableItem = ({ name, title, salary, job, loc, type }) => {
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{title}</td>
                <td>{salary}</td>
                <td>{job}</td>
                <td>{loc}</td>
                <td>{type}</td>
            </tr>
        </>
    );
}