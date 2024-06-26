
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalEditTask(props) {
  
    const [name, setName] =useState(props.employeesLate.name);
    const [email, setEmail] =useState(props.employeesLate.email);
    const [address, setAddress] =useState(props.employeesLate.address);
    const [phone, setPhone] =useState(props.employeesLate.phone);
   

  const handleClose = () => {
    props.onCloseEdit();
  };
 
  const handleSave = () => {
    const newEmployes = {name: name , email: email , address:address , phone: phone}

    

    props.onSaveEdit(newEmployes);
    setName("");
    handleClose();
  };

  return (
    <>
    

      <Modal show={props.showEdit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
          <div class="modal-body">
              <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">Họ và tên:</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nguyen Van A" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div class="mb-3">
                  <label for="formGroupExampleInput2" class="form-label">Email:</label>
                  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="nguyenvana@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="mb-3">
                  <label for="formGroupExampleInput2" class="form-label">Address</label>
                  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="HaNoi" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div class="mb-3">
                  <label for="formGroupExampleInput2" class="form-label">Phone:</label>
                  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="0384756172" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
          </div>
       
            
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditTask;