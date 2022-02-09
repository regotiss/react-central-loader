import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import About from "./About";
import NetworkHandler from "./api/NetworkHandler";
import NetworkProvider from "./api/NetworkProvider";

const NavRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

const NavBar = () => {
    return (
        <ul className="Nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    )
}

function App() {
  return (
      <NetworkProvider>
          <NetworkHandler />
          <NavBar />
          <NavRoutes />
      </NetworkProvider>
  )
}

export default App;
