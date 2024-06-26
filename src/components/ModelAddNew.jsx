
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAddNew(props) {
  
    const [name, setName] =useState("");
    const [email, setEmail] =useState("");
    const [address, setAddress] =useState("");
    const [phone, setPhone] =useState("");
    const [newEmployess , setNewEmployess] =useState({});

  const handleClose = () => {
    props.onClose();
  };
  const handleShow = () => {
    props.onShow();
  };
  const handleSave = () => {
    const newEmployes = {name: name , email: email , address:address , phone: phone}

  

    props.onSave(newEmployes);
    setName("");
    handleClose();
  };

  return (
    <>
    

      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm nhân viên</Modal.Title>
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
            Thêm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalAddNew;