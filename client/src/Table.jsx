import { useContext } from "react"
import Actions from "./Actions"
import NewEmployeeForm from "./NewEmployeeForm"
import { EmployeeContext } from "./EmployeeContext"

function Table({ readableFieldNames, handleNewEmployee }) {
    const {
        employeeList,
        handleChange,
        entries,
        handleDelete,
        handleEdit 
    } = useContext(EmployeeContext)
    
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