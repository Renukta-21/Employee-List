import { useState } from "react"


function App() {
  const employeeMockup = {
    id: null,
    fullName: null,
    gender: null,
    email: null,
    phoneNumber: null,
    position: null,
    salary: null,
    actions: null
  }

  const [newEmployee, setNewEmployee] = useState(employeeMockup)
  const [employeeList, setEmployeeList] = useState([
    {id: 21,
      fullName: 'eduardo daniel',
      gender: 'man',
      email: 'edu211004@gmail.com',
      phoneNumber: 5630548813,
      position: 'Manager',
      salary: '120k',
      actions: 'none',
      newField:null}
  ])
  const handleNewEmployee = () => {
    setEmployeeList(prevList=>{
      return [...prevList, newEmployee]
    })
    setNewEmployee(employeeMockup)
  }
  const handleChange =(e)=>{
    const fieldToSet = e.target.id.split('-')[1]
    setNewEmployee(prevData=>{
      console.log(prevData)
      return({
        ...prevData,
        [fieldToSet ]: e.target.value
      })
    })
    
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
    newField: "New Field"
  };

  return (
    <div className='bg-gray-700 min-h-screen text-white flex items-center flex-col'>
      <h1 className='text-3xl font-bold'>CRUD Employee List</h1>
      <p>Simple CRUD MongoBG application</p>
      <Table entries={entries} readableFieldNames={readableFieldNames}>
        {employeeList.map(employee=>{
          return(
            <tr key={employee.id}>
              {entries.map((entry, idx)=>(
                <td key={idx}>{employee[entry]}</td>
              ))}
            </tr>
          )
        })}
        <tr>
          {entries.map((field, idx) => (
            <td key={idx}><input type="text" id={`input-${field}`} onChange={handleChange}/></td>
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

function Table({ children, entries, readableFieldNames }) {
  return (
    <div>
      <table className="employeeTable">
        <thead>
          <tr>
            {entries.map((field,idx) => (
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