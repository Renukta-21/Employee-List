function NewEmployeeForm({ entries, handleChange, handleNewEmployee }) {
    return (
        <tr>
            {entries.map((field, idx) => (
                <td key={idx}>
                    {field === 'actions' ? (
                        <p>No actions yet</p>
                    ) : <input type="text" id={`input-${field}`} onChange={handleChange} />}
                </td>
            ))}
            <td className="whitespace-nowrap flex justify-center px-20">
                <button className="bg-green-600 p-2"
                    onClick={handleNewEmployee}>Add new employee</button>
            </td>
        </tr>

    )
}

export default NewEmployeeForm