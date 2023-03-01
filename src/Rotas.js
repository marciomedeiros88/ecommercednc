import Login from "./assets/componentes/Login";
import Home from "./assets/componentes/Home";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

function Rotas() {
  const location = useLocation();
  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="transition" timeout={750}>
          <Routes location={location}>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default Rotas;
