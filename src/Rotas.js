import Login from "./assets/componentes/Login";
import Home from "./assets/componentes/Home";
import Produto from "./assets/componentes/Produto";
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
import { product_mock } from "./assets/mockup/mock"

function Rotas() {
  const location = useLocation();
  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="transition" timeout={750}>
          <Routes location={location}>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home data={product_mock}/>} />
            <Route exact path="/produtos/:productId" element={<Produto data={product_mock}/>} />
            <Route exact path="/checkout/:checkoutId" element={<Checkout data={product_mock}/>} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default Rotas;
