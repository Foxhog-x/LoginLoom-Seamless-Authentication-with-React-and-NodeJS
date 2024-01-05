import Form from "react-bootstrap/Form";
import "./formpage.css";
import Button from "react-bootstrap/Button";
import { Country, State, City } from "country-state-city";
import { useRef, useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export const Formpage = () => {
  const formRef = useRef();
  const [show, setShow] = useState(false);

  const toggleShowA = () => {
    setShow(false);
  };

  // const [userForm, setuserForm] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   country: "",
  //   state: "",
  //   city: "",
  //   address: "",
  // });
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

  console.log(state);
  const handleSelectCountry = (e) => {
    setCountry(countryList[e.target.value]);
  };
  const handleState = (e) => {
    setState(stateList[e.target.value]);
  };

  const handleCity = (e) => {
    setCity(cityList[e.target.value].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(true);
    setTimeout(async () => {
      setShow(false);
      sendData();
    }, 3000);
  };

  const sendData = async () => {
    fetch("http://localhost:8000/user", {
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
    });
  };

  return (
    <>
      <div className="main_container">
        <div className="info_text">
          <h5 className="add_details_name">Add details </h5>
          <Form form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group>
              <div className="form_1">
                <div className="form_row">
                  <div>
                    <Form.Label htmlFor="inputFirstName3">
                      First Name
                    </Form.Label>
                    <Form.Control
                      id="inputFirstName3"
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>{" "}
                  <div>
                    <Form.Label htmlFor="inputLastName3">Last Name</Form.Label>
                    <Form.Control
                      id="inputLastName3"
                      type="text"
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <Form.Label className="mt-3" htmlFor="emailaddress">
                  Email
                </Form.Label>
                <Form.Control
                  id="emailaddress"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Form.Label className="mt-3" htmlFor="inputPassword5">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Form.Text id="passwordHelpBlock" muted>
                  Your password must be 8-20 characters long, contain letters
                  and numbers
                </Form.Text>
                <div className="select_option_row">
                  <div>
                    <Form.Select
                      size="sm"
                      className="mt-3 select_country"
                      aria-label="Default select example"
                      onChange={handleSelectCountry}
                    >
                      <option>Country</option>
                      {countryList.map((value, index) => (
                        <option value={index} key={index}>
                          {value.name}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                  <div>
                    <Form.Select
                      size="sm"
                      className="mt-3 select_state"
                      aria-label="Default select example"
                      onChange={handleState}
                    >
                      <option>State</option>
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
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
      <ToastContainer
        className="p-3"
        position={"top-end"}
        style={{ zIndex: 1 }}
      >
        <Toast show={show} onClose={toggleShowA} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>... min ago</small>
          </Toast.Header>
          <Toast.Body>Form Has been Submitted</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};
