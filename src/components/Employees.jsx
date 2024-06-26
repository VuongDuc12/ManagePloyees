
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import  Button  from './Button';


const Employees = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  

  const handleEdit = ()=>{
    props.onShowEdit();
    props.onSetEmployeeLate(props.emp);
  }
  const handleDelete = ()=>{
    props.onDelete(props.emp);
  }
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  }
  return (
    <tr class="">
      <td >
          <input class="form-check-input" type="checkbox" value="" id="" checked = {props.isChecked ? props.isChecked:isChecked} onChange={handleCheckBox}/>
          
      
      </td>
      <td>{props.emp.name}</td>
      <td>{props.emp.email}</td>
      <td>{props.emp.address}</td>
      <td>{props.emp.phone}</td>
      <td>
          <button onClick = {handleEdit} className='border-0 '> <i  class="fa-solid fa-pen mx-2 text-warning "></i></button>
          <button onClick = {handleDelete} className='border-0 '>  <i class="fa-solid fa-trash text-danger"></i></button>
        
      </td>
    </tr>

  );
}

export default Employees;
