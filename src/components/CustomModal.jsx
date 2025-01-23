import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";

function CustomModal({
  show,
  setShow,
  formData,
  setFormData,
  getUser
}) {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  // });

  const handleClose = () => {
    setShow(false);
    setFormData({});
  };
  const handleShow = () => setShow(true);

  console.log("formData", formData);

  const handleSubmit = () => {
    console.log("formData", formData);

    axios({
      // Endpoint to send files
      url: "http://localhost:5000/user",
      method: "POST",
      data: formData,
    })
    .then((res) => {
      console.log("res", res);
      if(res.status === 200) {
        alert("Data save successfully");
        setShow(false);
        setFormData({});
        getUser();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const handleUpdate = async() => {
    let url = `http://localhost:5000/user/${formData?._id}`;

    axios({
      // Endpoint to send files
      url: url,
      method: "POST",
      data: formData,
    })
    .then((res) => {
      console.log("update response", res);
      if(res.status === 200) {
        alert("Update successfully");
        setShow(false);
        setFormData({});
        getUser();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {
            formData?._id ? 
            <Modal.Title>Update User</Modal.Title>
            : <Modal.Title>Add User</Modal.Title>
          }
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control tepe="text" value={formData?.name} onChange={(e) => setFormData({
                  ...formData,
                  name: e.target.value
                })} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control tepe="email" value={formData?.email} onChange={(e) => setFormData({
                  ...formData,
                  email: e.target.value
                })} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Phone
              </Form.Label>
              <Col sm="10">
                <Form.Control tepe="text" value={formData?.phone} onChange={(e) => setFormData({
                  ...formData,
                  phone: e.target.value
                })} />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {
            formData?._id ?  
              <Button variant="primary" onClick={handleUpdate}>
                Update
              </Button> 
            : 
            <Button variant="primary" onClick={handleSubmit}>
              Save
            </Button>
          }
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomModal;