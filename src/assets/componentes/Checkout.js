import "./Checkout.css";
import Menu from "./Menu";
import Topo from "./Topo";
import Rodape from "./Rodape";
import iconCarrinho from "../imagens/carrinho.svg";
import imagemCard from "../imagens/xbox.png";
import { Link } from "react-router-dom";
const Checkout = () => {

        function aparecermodal(){
        document.getElementsByClassName('add_cart')[0].addEventListener("click", function(event) {
            // highlight the mouseover target
            let but = document.getElementsByClassName('area_modal')
            but[0].style.visibility = "visible";
        });
        }
        function desaparecermodal(){
            document.getElementsByClassName('remove_cart')[0].addEventListener("click", function(event) {
                // highlight the mouseover target
                let but = document.getElementsByClassName('area_modal')
                but[0].style.visibility = "hidden";
                console.log('desaparecer')
        });
        }
return (
    <>
    <Topo />
    <Menu />
    <div style={{display:"flex", flexDirection:"column"}}>
    <div className="area-product">
        <div className="product">
        
        <div className="description">
            <p>Microsoft Xbox Series X | Preto</p>
            <h3>Descrição</h3>
            <p>Lorem ipsum dolor sit amet consectur</p>
            <div className="bar"></div>
        </div>
        </div>
        <div className="information">
        <div className="color_area">
            <h1>Microsoft Xbox Series X | Preto</h1>
            <div className="bar"></div>

            <h3 className="price">R$ 2.000,00</h3>
            <p className="color_text">Cor: Preto</p>
            <p className="area_color"></p>
        </div>

        <button className="add_cart border10 botao_azul" data-bstoggle="modal" data-bs-target="adicionar" onClick={aparecermodal}>
            <img src={iconCarrinho} alt="" />
            Adicionar ao carrinho
        </button>
        </div>
    
    </div>
    <div className="area_modal2">
    <div className="modal2 border50" id="adicionar" tabindex="-1" style={{ }} aria-hidden="true">
        
        <div className="information_modal">
                
                <h1 className="color_area">Finalizar compra</h1>
                <div className="form">
                    <form>
                        <label>Digite seu nome</label>
                        <input type="text" placeholder="Nome completo"></input>
                        <label>Digite seu CPF</label>
                        <input  type="number" placeholder="CPF completo"></input>
                        <label>Endereço</label>
                        <input type="password" placeholder="Endereço completo"></input>
                        <label>Forma de pagamento</label>
                        <select id="selecionarforma">
                            <option value="cartão de crédito">Cartão de crédito</option>
                            <option value="cartão de débito">Cartão de débito</option>
                            <option value="pix">PIX</option>
                            <option value="boleto">Boleto</option>
                        </select>
                    </form>
                </div>
                <div className="botao_confirmar">
                <Link
                to="/"
                style={{ textDecoration: "none", color: "white", width:"30em" }}>
                <button className="add_cart border10 botao_azul" >
                Confirmar pedido
                </button>
                </Link>
                </div>
            </div>
        </div>
        
        </div>
        <div style={{marginTop:"23vh", position:"relative", width:"100%"}}><Rodape /></div>
        </div>
    </>
);
};

export default Checkout;