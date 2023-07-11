import "./styles.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardHome from "./DashboardHome";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<DashboardHome />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
