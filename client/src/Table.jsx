import { useContext, useEffect, useRef } from "react"
import Actions from "./Actions"
import NewEmployeeForm from "./NewEmployeeForm"
import { EmployeeContext } from "./EmployeeContext"
import Dropdown from "./Dropdown"

function Table({ readableFieldNames }) {
    const autoFocus = useRef(null)
    const {
        employeeList,
        handleChange,
        entries,
        handleDelete,
        handleEdit,
        editingID,
        editingEmployee,
        handleEditChange,
        handleNewEmployee,
        newEmployee,
    } = useContext(EmployeeContext)

    useEffect(() => {
        if (autoFocus.current) {
            autoFocus.current.focus()
        }
    }, [editingID]);

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
                                                idx={employee.id}
                                                onEdit={() => handleEdit(employee.id)}
                                                onDelete={() => handleDelete(employee.id)} />
                                        ) : editingID === employee.id && entry!=='id'?
                                            entry==='gender'?
                                            (<Dropdown gender={editingEmployee.gender}/>)
                                            :<input
                                                id={`editField-${entry}`}
                                                type="text"
                                                className="bg-main-gray text-white border-0"
                                                value={editingEmployee[entry]}
                                                onChange={handleEditChange}
                                                ref={idx === 1 ? autoFocus : null}
                                            /> :
                                            employee[entry]}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                    <NewEmployeeForm newEmployee={newEmployee} entries={entries} handleChange={handleChange} handleNewEmployee={handleNewEmployee} />
                </tbody>
            </table>
        </div>)
}
export default Table