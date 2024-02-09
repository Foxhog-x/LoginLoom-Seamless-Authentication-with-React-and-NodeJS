/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./loginpage.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link, useNavigate } from "react-router-dom";
import { ToastNotification } from "../components/ToastNotification";
export const Loginpage = ({
  showToast,
  toastData,
  toastColor,
  setShowToast,
  setToastData,
  setToastColor,
}) => {
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
            localStorage.setItem("authToken", result.authToken);
          });
          setTimeout(() => {
            setShowToast(false);
            navigate("/");
          }, 1000);
          setToastData("Validated Successfully");
          setToastColor("text-success");
        } else {
          setShowToast(true);
          setToastColor("text-danger");
          setToastData("Incorrect Credentials");
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
        <div className="internal_form_div">
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
                className=" input_login px-2 py-2"
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
                {...register("password_", {
                  required: "This Field is required",
                })}
                className="input_login px-2 py-2"
                type="password"
                placeholder="Password"
                name="password_"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <ErrorMessage errors={errors} name="password" />
              <span className="createuser">
                <Button variant="light" type="onsubmit">
                  Submit
                </Button>
                <Link className="link_createuser" to={"/signup"}>
                  Create New User
                </Link>
              </span>
            </Form.Group>
          </Form>
        </div>

        <ToastNotification
          showToast={showToast}
          toastData={toastData}
          toastColor={toastColor}
          toggleShowA={toggleShowA}
        />
      </div>
    </>
  );
};
