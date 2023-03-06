    import "./Meucarrinho.css";
    import Menu from "./Menu";
    import Topo from "./Topo";
    import Rodape from "./Rodape";
    import iconCarrinho from "../imagens/carrinho.svg";
    import imagemCard from "../imagens/xbox.png";
    const MeuCarrinho = () => {
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

            <button className="add_cart border10 botao_azul">
                <img src={iconCarrinho} alt="" />
                Adicionar ao carrinho
            </button>
            </div>
        </div>
        <Rodape />
        </>
    );
    };

    export default MeuCarrinho;
