import "../../styles.css";
import "./Login.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link
} from "react-router-dom";
import logo from "../imagens/logo_dnc.svg";

function Login() {
  return (
    <>
      <header>
        <div>
          <img src={logo} alt="Logo DNC"></img>
        </div>
      </header>
      <main>
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <h2>Você pode entrar com o seu CPF</h2>
        <form>
          <label>Digite seu CPF:</label>
          <input
            className="border10"
            placeholder="Nome completo"
            type="number"
          ></input>
          <label>Digite sua senha:</label>
          <input
            className="border10"
            placeholder="*******"
            type="password"
          ></input>
          <button className="border10">
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              Entrar
            </Link>
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;
