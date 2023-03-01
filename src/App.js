import "./styles.css";
import Rotas from "./Rotas";
import History from "./assets/componentes/History";
import Home from "./assets/componentes/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";

export default function App() {
  return (
    <Router History={History}>
      <Rotas />
    </Router>
  );
}
