function Actions({ onEdit, onDelete }) {
    return (
        <div className="actions flex">
            <button className="bg-blue-500 p-2 m-1 " onClick={onEdit}>Edit</button>
            <button className="bg-red-500 p-2 m-1" onClick={onDelete}>Delete</button>
        </div>
    )
}
export default Actions