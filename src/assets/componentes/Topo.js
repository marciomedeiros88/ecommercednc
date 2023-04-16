import logo from "../imagens/logo_dnc.svg";
import carrinho from "../imagens/carrinho.svg";
import "./Topo.css";
import {Link} from 'react-router-dom'

function Topo() {
  return (
    <>
      <header className="header_home">
        <div className="div_home">
          <Link to="/home">
          <img src={logo} alt="Logo DNC"></img>
          </Link>
          <input
            type="text"
            placeholder="O que você está procurando?"
            className="border10 input_pesquisa"
          ></input>
          <img src={carrinho} className="carrinho" alt="Seu carrinho"></img>
        </div>
      </header>
    </>
  );
}

export default Topo;
