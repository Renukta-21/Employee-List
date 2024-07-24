import { createContext, useEffect, useState } from "react"

const EmployeeContext = createContext()
function EmployeeProvider({ children }) {
  const defaultEmployees = [
    {
      id: 1,
      fullName: 'Eduardo Martinez',
      gender: 'man',
      email: 'edu211004@gmail.com',
      phoneNumber: 5630548813,
      position: 'Manager',
      salary: '120k',
    },
    {
      id:2,
      fullName: 'Daniel Urbina',
      gender: 'man',
      email: 'edu211004@gmail.com',
      phoneNumber: 5630548813,
      position: 'Manager',
      salary: '120k',
    }
  ]
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
  const [employeeList, setEmployeeList] = useState([])
  const [newEmployee, setNewEmployee] = useState(employeeMockup)
  const [editingID, setEditingID] = useState(0)
  const [editingEmployee, setEditingEmployee] = useState(null);
  const entries = Object.keys(employeeMockup)

  useEffect(() => {
    const storedEmployees = localStorage.getItem('EmployeeList')
    if (storedEmployees) {
      setEmployeeList(JSON.parse(storedEmployees))
      console.log('Local storage loaded')
    } else {
      setEmployeeList(defaultEmployees)
      console.log('Employee list has been created')
    }
  }, [])

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

  const handleNewEmployee = () => {
    setEmployeeList(prevList => {
      const updatedList = prevList.concat(newEmployee)
      localStorage.setItem('EmployeeList', JSON.stringify(updatedList))
      return updatedList
    })
    setNewEmployee(employeeMockup)
  }
  const handleEdit = (employeeID) => {
    if(editingID===employeeID){
      setEditingID(null)
      setEditingEmployee(null)
    }else{
      setEditingID(employeeID)
      const employeeToEdit = employeeList.find(employee=> employee.id === employeeID)
      setEditingEmployee(employeeToEdit)
    }
  }
  const handleEditChange=(e)=>{
    const id = e.target.id.split('-')[1]
    setEditingEmployee(prevData=>{
      return({
        ...prevData,
        [id]:e.target.value
      })
    })
  }
  const handleDelete = (employeeID) => {
    const newList = employeeList.filter(employee=> employee.id !== employeeID)
    setEmployeeList(newList)
  }
  return (
    <EmployeeContext.Provider value={
      {
        employeeMockup,
        employeeList,
        setEmployeeList,
        handleNewEmployee,
        entries,
        handleDelete,
        handleEdit,
        handleChange,
        editingID,
        editingEmployee,
        handleEditChange
      }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export { EmployeeContext, EmployeeProvider }