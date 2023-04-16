import "./Home.css";
import { useNavigate, Link } from "react-router-dom";


function Produtocard({ data }) {
    console.log(data);
    return (
    <>
            
            <div className="card_produto border10">
                <div className="box_produto">
                <img src={data.imgPath} alt="Produto"></img>
                </div>
                <div className="descricao_produto">
                <p>{data.title}</p>
                <Link
                    to={`/produtos/${data.id}`}
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <button className="border10 botao_azul">Ver mais</button>
                </Link>
                </div>
            </div>
            
            
            
        </>
    );
}

export default Produtocard;
