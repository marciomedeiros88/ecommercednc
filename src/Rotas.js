import Login from "./assets/componentes/Login";
import Home from "./assets/componentes/Home";
import Produtos from "./assets/componentes/Produtos";
import Meucarrinho from "./assets/componentes/Meucarrinho";
import Checkout from "./assets/componentes/Checkout";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import React from "react";
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
            <Route exact path="/produtos/1" element={<Meucarrinho title="Microsoft Xbox Series X | Preto"/>} />
            <Route exact path="/produtos/2" element={<Meucarrinho title="Microsoft Xbox Series S | Branco"/>} />
            <Route exact path="/produtos/3" element={<Meucarrinho title="Nintendo Switch com Jogo"/>} />
            <Route exact path="/produtos/4" element={<Meucarrinho title="Jogo God of War Playstation"/>} />
            <Route exact path="/produtos/5" element={<Meucarrinho title="Jogo Uncharted: The Nathan Drake Collection"/>} />
            <Route exact path="/produtos/6" element={<Meucarrinho title="Jogo Gran Turismo"/>} />
            <Route exact path="/produtos" element={<Produtos />} />
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default Rotas;
