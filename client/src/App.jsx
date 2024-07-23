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
  const handleNewEmployee = () => {
    console.log('ajam')
  }
  const entries = Object.keys(employeeMockup)
  console.log(entries)
  return (
    <div className='bg-gray-700 min-h-screen text-white flex items-center flex-col'>
      <h1 className='text-3xl font-bold'>CRUD Employee List</h1>
      <p>Simple CRUD MongoBG application</p>
      <Table>
        <tr>
          {entries.map(field => (
            <td><input type="text" /></td>
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

function Table({ children }) {
  return (
    <div>
      <table className="employeeTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>)
}

export default App