import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { useLocation, useNavigate } from "react-router";
import "../App.css";
export const Header = () => {
  const [loginbtn, setLoginbtn] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    setLoginbtn(true);
  };
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token !== null) {
      setLoginbtn(false);
    }
    if (token !== null && location.pathname === "/login") {
      navigate("/");
    }
  }, [location, navigate]);

  return (
    <>
      <Navbar className="navbar bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">OP</Navbar.Brand>
          <>
            {loginbtn ? (
              <Button
                variant="danger"
                type="submit"
                onClick={() => {
                  handleLogin();
                }}
              >
                Login
              </Button>
            ) : (
              <Button
                variant="danger"
                type="submit"
                onClick={() => {
                  handleLogout();
                }}
              >
                LogOut
              </Button>
            )}
          </>
        </Container>
      </Navbar>
    </>
  );
};
