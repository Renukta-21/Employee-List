import Actions from "./Actions"
import NewEmployeeForm from "./NewEmployeeForm"

function Table({employeeList, entries, readableFieldNames,handleChange, handleNewEmployee, handleEdit, handleDelete }) {
    return (
        <div>
            <table className="employeeTable">
                <thead>
                    <tr>
                        {entries.map((field, idx) => (
                            <td key={idx}>{readableFieldNames[field]}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map(employee => {
                        return (
                            <tr key={employee.id}>
                                {entries.map((entry, idx) => (
                                    <td key={idx}>
                                        {entry === 'actions' ? (
                                            <Actions
                                                onEdit={() => handleEdit(employee.id)}
                                                onDelete={() => handleDelete(employee.id)} />
                                        ) : employee[entry]}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                    <NewEmployeeForm entries={entries} handleChange={handleChange} handleNewEmployee={handleNewEmployee} />
                </tbody>
            </table>
        </div>)
}
export default Table