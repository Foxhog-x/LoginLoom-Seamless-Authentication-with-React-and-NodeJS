import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./loginpage.css";
export const Loginpage = () => {
  const [show, setShow] = useState(true);
  const toggleShowA = () => {
    setShow(false);
  };
  return (
    <>
      <div className="form_grid">
        <Form>
          <div className="login_heading">
            <h1>Login</h1>
          </div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="px-2 py-2"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="px-2 py-2"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" className="mt-3" type="submit">
            Submit
          </Button>
        </Form>

        <ToastContainer
          className="p-3"
          position={"top-end"}
          style={{ zIndex: 1 }}
        >
          <Toast show={show} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>login has been submitted</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
};
