import { Link } from "react-router-dom";

export const Notloginpage = () => {
  return (
    <div style={{ display: "grid", placeContent: "center", height: "100vh" }}>
      Your Not login Please login first <Link to={"/login"}>here</Link>
    </div>
  );
};
