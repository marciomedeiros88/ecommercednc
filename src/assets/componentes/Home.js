import "./Home.css";
import Topo from "./Topo";
import Rodape from "./Rodape";
import Menu from "./Menu";
import { useNavigate, Link } from "react-router-dom";
import banner_horizon from "../imagens/banner_horizon.png";
import produtoxbox from "../imagens/xbox.png";
import produtoxboxX from "../imagens/xboxX.png";
import produtonintendoswitch from "../imagens/nintendoswitch.png";
import produtogranturismo from "../imagens/granturismo.png";
import produtouncharted from "../imagens/uncharted.png";
import produtogodofwar from "../imagens/godofwar.png";

function Home() {
  return (
    <>
      <Topo />
      <Menu />
      <section className="banner_principal">
        <img src={banner_horizon} alt="Banner Horizon"></img>
      </section>
      <section className="lista_produtos">
        <div className="card_produto border10">
          <div className="box_produto">
            <img src={produtoxbox} alt="Produto"></img>
          </div>
          <div className="descricao_produto">
            <p>Microsoft Xbox Series X | Preto</p>
            <Link
              to="/produtos/1"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="border10 botao_azul">Ver mais</button>
            </Link>
          </div>
        </div>
        <div className="card_produto border10">
          <div className="box_produto">
            <img src={produtoxboxX} alt="Produto"></img>
          </div>
          <div className="descricao_produto">
            <p>Microsoft Xbox Series S | Branco</p>
            <Link
              to="/produtos/2"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="border10 botao_azul">Ver mais</button>
            </Link>
          </div>
        </div>
        <div className="card_produto border10">
          <div className="box_produto">
            <img src={produtonintendoswitch} alt="Produto"></img>
          </div>
          <div className="descricao_produto">
            <p>Nintendo Switch com Jogo</p>
            <Link
              to="/produtos/3"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="border10 botao_azul">Ver mais</button>
            </Link>
          </div>
        </div>
      </section>
      <section className="lista_produtos">
        <div className="card_produto border10">
          <div className="box_produto">
            <img src={produtogodofwar} alt="Produto"></img>
          </div>
          <div className="descricao_produto">
            <p>Jogo God of War Playstation</p>
            <Link
              to="/produtos/4"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="border10 botao_azul">Ver mais</button>
            </Link>
          </div>
        </div>
        <div className="card_produto border10">
          <div className="box_produto">
            <img src={produtouncharted} alt="Produto"></img>
          </div>
          <div className="descricao_produto">
            <p>Jogo Uncharted: The Nathan Drake Collection</p>
            <Link
              to="/produtos/5"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="border10 botao_azul">Ver mais</button>
            </Link>
          </div>
        </div>
        <div className="card_produto border10">
          <div className="box_produto">
            <img src={produtogranturismo} alt="Produto"></img>
          </div>
          <div className="descricao_produto">
            <p>Jogo Gran Turismo</p>
            <Link
              to="/produtos/6"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="border10 botao_azul">Ver mais</button>
            </Link>
          </div>
        </div>
      </section>
      <Rodape />
    </>
  );
}

export default Home;
