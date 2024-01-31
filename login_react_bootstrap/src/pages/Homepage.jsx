import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("authToken");
  useEffect(() => {
    if (token === null) {
      navigate("/pagenot");
    }
  }, [navigate]);

  const handleRoute = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>
        <button onClick={handleRoute}>Dashboard</button>
      </h1>
      <Link to={"/upload"}>Upload page</Link>
    </div>
  );
};
