import { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";

const Dropdown = ({ gender }) => {
    const {handleGenderChange} = useContext(EmployeeContext)
    const genderOptions = [
        { value: '', label: 'Seleccione una opción' },
        { value: 'masculino', label: 'masculino' },
        { value: 'femenino', label: 'femenino' },
      ];
      
  return (
    <select className="bg-main-gray" value={gender}  onChange={handleGenderChange}>
      {genderOptions.map((option, idx)=>(
        <option key={idx} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Dropdown;