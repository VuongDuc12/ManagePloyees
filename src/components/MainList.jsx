import {React , useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import ListItem from './ListItem';


const MainList = (props) => {
  const [name , setName] = useState("");
  function handleonAdd() {
    // if(name === "" || name.length >20){
    //   alert("Please enter a name");

    // }
    // else{
    //   props.addTask(name);
    //   setName("");
    // }

    props.addTask();
  }

  return (
            
            <div>
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="add item ..."
                    value={name}
                   
                    onChange={(e)=>setName(e.target.value)}
                  />
                  <a
                    name=""
                    id=""
                    className="btn btn-primary my-2"
                    href="#"
                    role="button"
                    onClick={handleonAdd}
                    >Add</a
                  >
                  <ListItem listtask = {props.listtask} onDelete={props.onDelete} onEdit={props.onEdit}/>
                  
                 
           
                
            </div>
           
  );
}

export default MainList;