import Form from "react-bootstrap/Form";
import "./formpage.css";
import Button from "react-bootstrap/Button";
import { Country, State, City } from "country-state-city";
import { useRef, useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
export const Formpage = () => {
  const formRef = useRef();
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState("nothing is happend");
  const [toastColor, setToastColor] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const toggleShowA = () => {
    setShowToast(false);
  };

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const countryList = Country.getAllCountries();
  const countryCode = country.isoCode;
  const stateCode = state.isoCode;
  const stateList = State.getStatesOfCountry(countryCode);
  const cityList = City.getCitiesOfState(countryCode, stateCode);

  const handleSelectCountry = (e) => {
    setCountry(countryList[e.target.value]);
  };
  const handleState = (e) => {
    setState(stateList[e.target.value]);
  };

  const handleCity = (e) => {
    setCity(cityList[e.target.value].name);
  };

  const onSubmit = (data) => {
    sendData();
    console.log(data, "sdfsf");
    document.getElementById("formref").reset();
  };

  const sendData = async () => {
    await fetch("http://localhost:8000/adduser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        country: country.name,
        state: state.name,
        city: city,
        address: address,
      }),
    }).then((res) => {
      try {
        if (res.status === 201) {
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 2500);

          setToastData("Account Created Successfully");
          setToastColor("text-success");
        } else if (res.status === 409) {
          setShowToast(true);
          setToastColor("text-danger");
          setToastData("email address already existed");
          setTimeout(() => {
            setShowToast(false);
          }, 4500);
        } else {
          setShowToast(true);
          setToastColor("text-danger");
          setToastData("something is wrong with the backend");
          setTimeout(() => {
            setShowToast(false);
          }, 1000);
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <>
      <div className="main_container">
        <div className="info_text">
          <h5 className="add_details_name">Add details </h5>
          <form
            id="formref"
            form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form.Group>
              <div className="form_1">
                <div className="form_row">
                  <div>
                    <Form.Label htmlFor="inputFirstName3">
                      First Name
                    </Form.Label>
                    <Form.Control
                      {...register("inputFirstName", {
                        required: "This is required",
                        minLength: {
                          value: 2,
                          message: "This input not minLength.",
                        },
                        maxLength: {
                          value: 30,
                          message: "at most 30 word ",
                        },
                      })}
                      id="inputFirstName3"
                      type="text"
                      placeholder="First Name"
                      onChange={(e) =>
                        setFirstName(e.target.value.trim().toLowerCase())
                      }
                    />
                    <ErrorMessage errors={errors} name="inputFirstName" />
                  </div>
                  <div>
                    <Form.Label htmlFor="inputLastName3">Last Name</Form.Label>
                    <Form.Control
                      {...register("inputLastName", {
                        required: "This is required",
                        minLength: {
                          value: 2,
                          message: "This input not minLength.",
                        },
                        maxLength: {
                          value: 30,
                          message: "at most 30 word ",
                        },
                      })}
                      id="inputLastName3"
                      type="text"
                      placeholder="Last Name"
                      onChange={(e) =>
                        setLastName(e.target.value.toLowerCase())
                      }
                    />
                    <ErrorMessage errors={errors} name="inputLastName" />
                  </div>
                </div>
                <Form.Label className="mt-3" htmlFor="emailaddress">
                  Email
                </Form.Label>
                <Form.Control
                  {...register("inputEmail", {
                    required: "email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "this is wrong email",
                    },
                  })}
                  id="emailaddress"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value.toLowerCase());
                  }}
                />
                <ErrorMessage errors={errors} name="inputEmail" />
                <Form.Label className="mt-3" htmlFor="inputPassword5">
                  Password
                </Form.Label>
                <Form.Control
                  {...register("inputpassword", {
                    required: "Password is required",
                    minLength: {
                      value: 3,
                      message: "at least three chr allowed",
                    },
                    maxLength: {
                      value: 20,
                      message: "at most 16 chr allowed ",
                    },
                  })}
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <ErrorMessage errors={errors} name="inputpassword" />
                <Form.Text id="passwordHelpBlock" muted>
                  Your password must be 8-20 characters long, contain letters
                  and numbers
                </Form.Text>
                <div className="select_option_row">
                  <div>
                    <Form.Select
                      {...register("inputSelect", {
                        required: "This is required",
                      })}
                      size="sm"
                      className="mt-3 select_country"
                      aria-label="Default select example"
                      onChange={handleSelectCountry}
                    >
                      <option value={100}>--Country-- </option>
                      {countryList.map((value, index) => (
                        <option value={index} key={index}>
                          {value.name}
                        </option>
                      ))}
                    </Form.Select>
                    <ErrorMessage errors={errors} name="inputSelect" />
                  </div>
                  <div>
                    <Form.Select
                      size="sm"
                      className="mt-3 select_state"
                      aria-label="Default select example"
                      onChange={handleState}
                    >
                      <option value={0}>States</option>
                      {stateList.map((value, index) => (
                        <option value={index} key={index}>
                          {value.name}
                        </option>
                      ))}
                    </Form.Select>
                  </div>

                  <div>
                    <Form.Select
                      size="sm"
                      className="mt-3 select_city"
                      aria-label="Default select example"
                      onChange={handleCity}
                    >
                      {cityList.map((value, index) => (
                        <option value={index} key={index}>
                          {value.name}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="mt-3">Address</Form.Label>
                  <Form.Control
                    {...register("inputAddress", {
                      required: "This is required",
                    })}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    as="textarea"
                    rows={3}
                  />
                  <ErrorMessage errors={errors} name="inputAddress" />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </div>
            </Form.Group>
          </form>
        </div>
      </div>
      <ToastContainer
        className="p-3"
        position={"top-end"}
        style={{ zIndex: 1 }}
      >
        <Toast show={showToast} onClose={() => toggleShowA}>
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
    </>
  );
};
