import Header2 from "./components/Header2";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="everything">
      <Header2 />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
