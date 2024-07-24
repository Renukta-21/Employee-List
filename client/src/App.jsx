import { useEffect, useState } from "react"


function App() {
  const defaultEmployee = {
    id: 21,
    fullName: 'eduardo daniel',
    gender: 'man',
    email: 'edu211004@gmail.com',
    phoneNumber: 5630548813,
    position: 'Manager',
    salary: '120k',
  }
  const employeeMockup = {
    id: null,
    fullName: null,
    gender: null,
    email: null,
    phoneNumber: null,
    position: null,
    salary: null,
    actions: ['edit', 'delete'],
  }

  const [newEmployee, setNewEmployee] = useState(employeeMockup)
  const [employeeList, setEmployeeList] = useState([])
  useEffect(() => {
    const storedEmployees = localStorage.getItem('EmployeeList')
    if (storedEmployees) {
      setEmployeeList(JSON.parse(storedEmployees))
      console.log('Local storage loaded')
    } else {
      setEmployeeList([defaultEmployee])
      console.log('Employee list has been created')
    }
  }, [])


  const handleNewEmployee = () => {
    setEmployeeList(prevList => {
      const updatedList = prevList.concat(newEmployee)
      localStorage.setItem('EmployeeList', JSON.stringify(updatedList))
      return updatedList
    })
    setNewEmployee(employeeMockup)
  }
  const handleChange = (e) => {
    const fieldToSet = e.target.id.split('-')[1]
    setNewEmployee(prevData => {
      console.log(prevData)
      return ({
        ...prevData,
        [fieldToSet]: e.target.value
      })
    })

  }
  const handleEdit=()=>{

  }
  const handleDelete=()=>{

  }
  const entries = Object.keys(employeeMockup)

  const readableFieldNames = {
    id: "ID",
    fullName: "Full Name",
    gender: "Gender",
    email: "Email",
    phoneNumber: "Phone Number",
    position: "Position",
    salary: "Salary",
    actions: "Actions",
    newField: "New Field",
  };

  return (
    <div className='bg-gray-700 min-h-screen text-white flex items-center flex-col'>
      <h1 className='text-3xl font-bold'>CRUD Employee List</h1>
      <p>Simple CRUD MongoBG application</p>
      <Table entries={entries} readableFieldNames={readableFieldNames}>
        {employeeList.map(employee => {
          return (
            <tr key={employee.id}>
              {entries.map((entry, idx) => (
                <td key={idx}>
                  {entry==='actions'?(
                    <Actions
                    onEdit={()=> handleEdit(employee.id)}
                    onDelete={()=> handleDelete(employee.id)}/>
                  ):employee[entry]}
                </td>
              ))}
            </tr>
          )
        })}
        <tr>
          {entries.map((field, idx) => (
            <td key={idx}>
              {field==='actions'?(
                <p>No actions yet</p>
              ):<input type="text" id={`input-${field}`} onChange={handleChange} />}
            </td>
          ))}
          <td className="whitespace-nowrap flex justify-center px-20">
            <button className="bg-green-600 p-2"
              onClick={handleNewEmployee}>Add new employee</button>
          </td>
        </tr>
      </Table >
    </div>
  )
}
function Actions({ onEdit, onDelete }) {
  return (
    <div className="actions flex">
      <button className="bg-blue-500 p-2 m-1 " onClick={onEdit}>Edit</button>
      <button className="bg-red-500 p-2 m-1" onClick={onDelete}>Delete</button>
    </div>
  )
}

function Table({ children, entries, readableFieldNames }) {
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
          {children}
        </tbody>
      </table>
    </div>)
}

export default App