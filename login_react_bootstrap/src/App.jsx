import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Loginpage } from "./pages/Loginpage";
import { Header } from "./components/Header";
import { Formpage } from "./pages/Formpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Dashboard } from "./pages/Dashboard";
import { Notloginpage } from "./pages/Notloginpage";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login" element={<Loginpage />} />
            <Route exact path="/signup" element={<Formpage />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/pagenot" element={<Notloginpage />} />
          </Routes>
        </div>
      </Router>

      <div></div>
    </>
  );
}

export default App;
