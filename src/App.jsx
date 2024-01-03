import { CiHome } from "react-icons/ci";
import "./App.scss";
import LoginModal from "./Components/LoginModal";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <LoginModal />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
