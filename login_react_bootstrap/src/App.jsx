import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Loginpage } from "./pages/Loginpage";
import { Header } from "./components/Header";
import { Formpage } from "./pages/Formpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Dashboard } from "./pages/Dashboard";
import { Notloginpage } from "./pages/Notloginpage";
import { Imdbpage } from "./pages/Imdbpage";
import { Chatpage } from "./pages/Chatpage";
import { Fileupload } from "./pages/Fileupload";
import { useState } from "react";

function App() {
  const [showToast, setShowToast] = useState(false);

  const [toastData, setToastData] = useState("nothing is happend");
  const [toastColor, setToastColor] = useState("");

  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route
              exact
              path="/login"
              element={
                <Loginpage
                  showToast={showToast}
                  toastData={toastData}
                  toastColor={toastColor}
                  setShowToast={setShowToast}
                  setToastData={setToastData}
                  setToastColor={setToastColor}
                />
              }
            />
            <Route exact path="/signup" element={<Formpage />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/pagenot" element={<Notloginpage />} />
            <Route exact path="/imdb" element={<Imdbpage />} />

            <Route exact path="/message" element={<Chatpage />} />
            <Route
              exact
              path="/upload"
              element={
                <Fileupload
                  showToast={showToast}
                  toastData={toastData}
                  toastColor={toastColor}
                  setShowToast={setShowToast}
                  setToastData={setToastData}
                  setToastColor={setToastColor}
                />
              }
            />
          </Routes>
        </div>
      </Router>

      <div></div>
    </>
  );
}

export default App;
