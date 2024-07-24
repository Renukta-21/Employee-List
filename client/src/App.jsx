import { useEffect, useState } from "react"
import Table from "./Table"

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
  const handleEdit = () => {

  }
  const handleDelete = () => {

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
      <Table
        employeeList={employeeList}
        entries={entries}
        readableFieldNames={readableFieldNames}
        handleChange={handleChange}
        handleNewEmployee={handleNewEmployee}
        handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  )
}


export default App