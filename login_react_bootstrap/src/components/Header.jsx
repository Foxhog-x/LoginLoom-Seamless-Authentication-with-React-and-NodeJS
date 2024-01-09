import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <>
      <Navbar className="navbar bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Login Form
          </Navbar.Brand>
          <Button
            variant="danger"
            type="submit"
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </Button>
        </Container>
      </Navbar>
    </>
  );
};
