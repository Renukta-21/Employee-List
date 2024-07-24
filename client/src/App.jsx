import Table from "./Table"

function App() {
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
      <Table readableFieldNames={readableFieldNames}/>
    </div>
  )
}


export default App