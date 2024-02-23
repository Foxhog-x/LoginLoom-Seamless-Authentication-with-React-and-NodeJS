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
      case "accordance":
        navigate("/accordance");
        break;
      case "imdb":
        navigate("/imdb");
        break;
      case "colorchange":
        navigate("/colorchange");
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
        <h1>
          <button onClick={() => handleRoute("upload_page")}>
            Upload Page
          </button>
        </h1>
        <h1>
          <button onClick={() => handleRoute("accordance")}>Accordance</button>
        </h1>
        <h1>
          <button onClick={() => handleRoute("imdb")}>Imdb </button>
        </h1>
        <h1>
          <button onClick={() => handleRoute("colorchange")}>
            changecolor{" "}
          </button>
        </h1>
      </div>
    </>
  );
};
