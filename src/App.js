
import './App.css';
import  Listar  from "./components/Listar";
import  Cajeros  from "./components/Cajeros";

import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          <Link className="nav-item nav-link active" to={"/"}>TURNOS</Link>
          <Link className="nav-item nav-link" to={"/cajeros"}>CAJEROS</Link>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route exact path={"/"} element={<Listar></Listar>}></Route>
          <Route path={"/cajeros"} element={<Cajeros></Cajeros>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
