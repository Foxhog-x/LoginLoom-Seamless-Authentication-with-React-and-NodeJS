import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
// import { Loginpage } from "./pages/Loginpage";
import { Header } from "./components/Header";
import { Formpage } from "./pages/Formpage";
function App() {
  return (
    <>
      <Header />
      {/* <Loginpage /> */}
      <Formpage />
    </>
  );
}

export default App;
