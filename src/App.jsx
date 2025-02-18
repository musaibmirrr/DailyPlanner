

import NavbarComponent from "./components/Navbar";
import ToDoList from "./components/ToDoList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import { Button } from "react-bootstrap";
import LocationButton from "./components/LocationButton";

function App() {
  return (
    <>
      <div
        className="fluid-container"
        style={{ backgroundColor: "#F2F4F3", height: "100%" }}
      >
        <Router>
          <NavbarComponent />

          <Routes>
            <Route path="/" element={<ToDoList />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

          <LocationButton/>
        </Router>
      </div>
    </>
  );
}

export default App;
