import Login from "./assets/componentes/Login";
import Home from "./assets/componentes/Home";
import Produtos from "./assets/componentes/Produtos";
import Meucarrinho from "./assets/componentes/Meucarrinho";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
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
            <Route exact path="/produtos/1" element={<Meucarrinho />} />
            <Route exact path="/produtos" element={<Produtos />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default Rotas;
