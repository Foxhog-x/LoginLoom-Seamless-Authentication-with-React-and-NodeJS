import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./loginpage.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
export const Loginpage = () => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const toggleShowA = () => {
    setShowToast(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const [toastData, setToastData] = useState("nothing is happend");
  const [toastColor, setToastColor] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onsubmit = (data) => {
    console.log(data);
    sendData();
  };
  const sendData = async () => {
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(async (res) => {
      try {
        const jsontoken = res.json();
        if (res.status === 201) {
          setShowToast(true);

          jsontoken.then((result) => {
            console.log(result);
            localStorage.setItem("authToken", result.authToken);
          });
          setTimeout(() => {
            setShowToast(false);
            navigate("/");
          }, 1000);
          setToastData("Form has been saved successfully");
          setToastColor("text-success");
        } else {
          console.log("HELLO");
          setShowToast(true);
          setToastColor("text-danger");
          setToastData("something is wrong with the backend");
          setTimeout(() => {
            setShowToast(false);
          }, 4500);
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <>
      <div className="form_grid">
        <Form onSubmit={handleSubmit(onsubmit)}>
          <div className="login_heading">
            <h1>Login</h1>
          </div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              {...register("inputEmail", {
                required: "This is required",
              })}
              name="inputEmail"
              className="px-2 py-2"
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <ErrorMessage errors={errors} name="inputEmail" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              {...register("password", {
                required: "This Field is required",
              })}
              className="px-2 py-2"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <ErrorMessage errors={errors} name="password" />
            <span className="createuser">
              {" "}
              <Button variant="primary" type="submit">
                Submit
              </Button>
              Create New user
            </span>
          </Form.Group>
        </Form>

        <ToastContainer
          className="p-3"
          position={"top-end"}
          style={{ zIndex: 1 }}
        >
          <Toast show={showToast} onClose={toggleShowA}>
            <Toast.Header>
              <div className={toastColor}></div>
              <strong className="me-auto .bg-success">Notification</strong>
              <small>... min ago</small>
            </Toast.Header>
            <Toast.Body className={toastColor}>
              {toastData ? toastData : ""}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
};
