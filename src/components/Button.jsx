import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Button = (props) => {
  
    const handleDeleteButton = () => {
        console.log(props.task.id);
        props.onDelete(props.task.id);

    }
    const handleEditButton = () => {
        
        props.onEdit(props.task.name);


    }
    
  return (
 
    
      <div className="d-flex align-items-center ">
            <button
            onClick={handleDeleteButton}
                className='px-2 py-1 text-dark mx-4 rounded-3 border-0'  style={{height:"40px"}}
            >
                Delete
            </button>
            <button
            onClick={handleEditButton}
            className='px-3 py-1 text-dark  rounded-3  border-0 me-5' style={{height:"40px"}}
            >
            Edit
        </button>
      </div>
      

  );
}

export default Button;