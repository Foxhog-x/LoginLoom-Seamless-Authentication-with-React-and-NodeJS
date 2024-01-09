import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Loginpage } from "./pages/Loginpage";
import { Header } from "./components/Header";
import { Formpage } from "./pages/Formpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/Login" element={<Loginpage />} />
            <Route exact path="/Signup" element={<Formpage />} />
          </Routes>
        </div>
      </Router>

      <div></div>
    </>
  );
}

export default App;
