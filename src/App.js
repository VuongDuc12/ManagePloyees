import React, { useState , useEffect } from 'react';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainList from './components/MainList';
import ModalAddNew from './components/ModelAddNew';
import ModalEditTask from './components/ModelEditTask';
import ListItem from './components/ListItem';
function App() {
   
  const [listEmployees, setListEmployees] = useState([
    { name: 'Vương Văn Đức', email: 'vuongduc226@gmail.com', address: 'Hà Nội', phone: '034817264' },
    { name: 'Nguyễn Đức Mạnh', email: 'manhn505@gmail.com', address: 'Hà Nội', phone: '031234123' },
    { name: 'Bùi Mạnh Thông', email: 'thongkkasd@gmail.com', address: 'Thạch Thất', phone: '030719283' },
    { name: 'Nguyễn Thành Công', email: 'conguasdf@gmail.com', address: 'Hà Nội', phone: '034817264' }
]);

const [show, setShow] = useState(false);
const [showEdit, setShowEdit] = useState(false);
const [employeesLate, setEmployeeLate] = useState({});

const onSetEmployeeLate = (employeesLate) => {
  setEmployeeLate(employeesLate);
}
const onShow = () => {
    setShow(true);
};
const onClose = () => {
    setShow(false);
};
const onSave = (employee) => {
    const newList = [...listEmployees, employee];
    setListEmployees(newList);
    console.log("Danh sách sau khi lưu: ", newList);
};
const onShowEdit = () => {
  setShowEdit(true);
};
const onCloseEdit = () => {
  setShowEdit(false);
};
const onSaveEdit = (newEmployee) => {
  console.log("đang edit");
  const newList = listEmployees.map((employee) => {
    console.log("tên mảng: ", employee.name , "ten cu: " , employeesLate)
    if (employee.name === employeesLate.name){
      return newEmployee;
    }
    return employee;
  });
  console.log(newList);
  setListEmployees(newList); 
  // const newList =newList[...listEmployees, employee];
  // setListEmployees(newList);
  // console.log("Danh sách sau khi lưu: ", newList);
};
const onDelete = (employessDelete) => {
  const newList = listEmployees.filter((employee) =>{
    return employee.name !== employessDelete.name
  });
  setListEmployees(newList);
};

const handeDelele = () => {
  
}
  return (
    <div className=''>
    <header class=" bg-primary text-light " style={{height: "4rem"}}>
   
    <div class="container d-flex justify-content-between align-items-center " style={{height: "4rem"}}>
        <h1 class="">Manage <b>Employees</b></h1>
        <div class="d-flex" >
            <button onClick={handeDelele} class="d-flex mx-3 align-items-center bg-danger py-2 px-3 border-0 text-light">
                <i class="fa-solid fa-minus mx-2 bg-light text-danger p-1 rounded-circle"></i>
                Delete
            </button>

            <button onClick={onShow} class="d-flex mx-3 align-items-center bg-success py-2 px-3 border-0 text-light " data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-plus mx-2 bg-light text-success p-1 rounded-circle"></i>
                Add New Employee
            </button>
           
        </div>

    </div>
    
</header>


<ListItem listEmployees={listEmployees} onShowEdit = {onShowEdit} onSetEmployeeLate={onSetEmployeeLate} onDelete = {onDelete}/>

  <footer class=" container d-flex d-flex justify-content-between align-items-center">

    <p>Showing <b>5</b> out of <b>100</b> emtries</p>    
    <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>   

  </footer>
  {show && <ModalAddNew show = {show} onClose = {onClose} onSave={onSave}/>}
  {showEdit && <ModalEditTask showEdit = {showEdit} onCloseEdit = {onCloseEdit} onSaveEdit={onSaveEdit} employeesLate = {employeesLate}/>}
    </div>
  );
}

export default App;
