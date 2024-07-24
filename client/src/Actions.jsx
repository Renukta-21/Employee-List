import { useContext } from "react"
import { EmployeeContext } from "./EmployeeContext"

function Actions({ onEdit, onDelete, idx }) {
    const {editingID} = useContext(EmployeeContext)
    console.log(idx, editingID)
    return (
        <div className="actions flex">
            <button className="bg-blue-500 p-2 m-1 " onClick={onEdit}>{idx===editingID?'Done':'Edit'}</button>
            <button className="bg-red-500 p-2 m-1" onClick={onDelete}>Delete</button>
        </div>
    )
}
export default Actions