import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Task from './Employees';
import Employees from './Employees';


const ListItem = (props) => {
    const [isChecked, setIsChecked] = useState(false);
  console.log(props.listEmployees);
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  }
  return (
      <div>

      <main class="container my-3" >
           <div
            class="table-responsive"
           >
            <table
                class="table table-primary fs-4"
            >
                <thead>
                    <tr>
                        <th scope="col">
                            <input class="form-check-input" type="checkbox" value="" id="" checked={isChecked} onChange={handleCheckBox}/>
                            
                        
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                  props.listEmployees.map((emp)=><Employees emp={emp} onShowEdit = {props.onShowEdit} onSetEmployeeLate={props.onSetEmployeeLate} onDelete = {props.onDelete} isChecked={isChecked}/>)
                }
                    
                    
                   
                </tbody>
            </table>
           </div>
           
            
        </main>
       
        
      </div>
            // {
            //     tasklist.map((task) =>(
            //         <Task task = {task}/>
            //     )               
            //   )}
           
      
    
  );
}

export default ListItem;