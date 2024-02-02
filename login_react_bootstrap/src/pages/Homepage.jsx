import { useEffect } from "react";
import { useNavigate } from "react-router";

export const Homepage = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("authToken");
  useEffect(() => {
    if (token === null) {
      navigate("/pagenot");
    }
  }, [navigate]);

  const handleRoute = (urlCheck) => {
    console.log(urlCheck);
    switch (urlCheck) {
      case "dashboard":
        navigate("/dashboard");
        break;
      case "upload_page":
        navigate("/upload");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>
        <h1>
          <button onClick={() => handleRoute("dashboard")}>Dashboard</button>
        </h1>
      </div>
      <div>
        <h1>
          <button onClick={() => handleRoute("upload_page")}>
            Upload Page
          </button>
        </h1>
      </div>
    </>
  );
};
