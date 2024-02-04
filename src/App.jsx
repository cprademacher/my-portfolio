import Header3 from "./components/Header3";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="everything">
      <Header3 />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
