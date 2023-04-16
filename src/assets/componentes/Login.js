import "../../styles.css";
import "./Login.css";
import Cadastro from "./Cadastro";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
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
            placeholder="000.000.000-00"
            type="number"
            id="cpf"
          ></input>
          <p id="respostacpf"></p>
          <label>Digite sua senha:</label>
          <input
            className="border10"
            placeholder="*******"
            type="password"
            id="senha"
          ></input>
          <p id="respostasenha"></p>
          <Link
            to="/home"
            style={{ textDecoration: "none", color: "white" }}
            className="border10 but_link"
          >
            <button className="border10 botao_azul">Entrar</button>
          </Link>
          <p id="respostacadastro"></p>
        </form>
      </main>
      <script src="./Cadastro.js"></script>
    </>
  );
}

export default Login;
