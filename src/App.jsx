import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// edit

import { Main } from "./pages/main.jsx";
import { Compare } from "./pages/compare.jsx";
import { Navbar } from "./components/navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
    <div> 
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/compare" element={<Compare/>} />
          </Routes>
        </Router>
    </div>
  );

}

export default App; 
