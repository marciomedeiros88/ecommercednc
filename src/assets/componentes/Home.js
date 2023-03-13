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
import Produtocard from "./Produtocard";

function Home({ data }) {
  console.log(data);
  return (
    <>
      <Topo />
      <Menu />
      <section className="banner_principal">
        <img src={banner_horizon} alt="Banner Horizon"></img>
      </section>
      <section className="lista_produtos">
        {data.map((product) => (
          <Produtocard key={product.id} data={product}/>
        ))}
      </section>
      
      <Rodape />
    </>
  );
}

export default Home;
