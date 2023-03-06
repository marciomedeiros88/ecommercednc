    import "./Meucarrinho.css";
    import Menu from "./Menu";
    import Topo from "./Topo";
    import Rodape from "./Rodape";
    import iconCarrinho from "../imagens/carrinho.svg";
    import imagemCard from "../imagens/xbox.png";
    const MeuCarrinho = () => {

        function aparecermodal(){
            document.getElementsByClassName('add_cart')[0].addEventListener("click", function(event) {
                // highlight the mouseover target
                let but = document.getElementsByClassName('area_modal')
                but[0].style.visibility = "visible";
                but[0].style.transition = "all 0.6s";

                
                
            });
            }
    return (
        <>
        <Topo />
        <Menu />
        <div className="area-product">
            <div className="product">
            
            <div className="description">
                <img src={imagemCard} alt="" />
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
        <div className="area_modal">
        <div className="modal border100" id="adicionar" tabindex="-1" style={{ }} aria-hidden="true">
            <div className="description">
            <img src={imagemCard} alt="" />
            </div>
            <div className="information">
                    
                    <h2 className="text-center fw-light">Quem somos nós? </h2>
                    <p className="p-3 fw-light text-center">Tudo o que fazemos procura respeitar essa conexão, desde nosso compromisso com o café de melhor qualidade do mundo até a forma como nós interagimos com nossos clientes e nossas comunidades para conduzir nosso negócio de modo responsável.
                    </p>    
                    <div>
                    <button type="button" className="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>   

                    

                </div>
            </div>
            </div>
        <Rodape />
        </>
    );
    };

    export default MeuCarrinho;
