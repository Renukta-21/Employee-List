import { createContext, useEffect, useState } from "react"

const EmployeeContext = createContext()
function EmployeeProvider({ children }) {
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
  const [employeeList, setEmployeeList] = useState([])
  const [newEmployee, setNewEmployee] = useState(employeeMockup)
  const entries = Object.keys(employeeMockup)

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
  const handleEdit = () => {

  }
  const handleDelete = () => {

  }
  return (
    <EmployeeContext.Provider value={
      {
        defaultEmployee,
        employeeMockup,
        employeeList,
        setEmployeeList,
        handleNewEmployee,
        entries,
        handleDelete,
        handleEdit,
        handleChange
      }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export { EmployeeContext, EmployeeProvider }