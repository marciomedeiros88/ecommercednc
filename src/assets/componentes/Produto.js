    import "./Produto.css";
    import Menu from "./Menu";
    import Topo from "./Topo";
    import Rodape from "./Rodape";
    import iconCarrinho from "../imagens/carrinho.svg";
    import imagemCard from "../imagens/xbox.png";
    import { Link, useParams } from "react-router-dom";
    import React, { Component } from "react";

    const Produto = ({ data }) => {
                const {productId} = useParams()
                const selectedProduct = data.find((product) => product.id == productId)
                console.log(selectedProduct);

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
        <div className="area-product">
            <div className="product">
            <div className="description">
                <img src={selectedProduct.imgPath} alt="" />
                <p>{selectedProduct.title}</p>
                <h3>Descrição</h3>
                <p>Lorem ipsum dolor sit amet consectur</p>
                <div className="bar"></div>
            </div>
            </div>
            <div className="information">
            <div className="color_area">
                <h1>{selectedProduct.title}</h1>
                <div className="bar"></div>

                <h3 className="price">{selectedProduct.price}</h3>
                <p className="color_text">Cor: {selectedProduct.color}</p>
                <p className="area_color"></p>
            </div>

            <button className="add_cart border10 botao_azul" data-bstoggle="modal" data-bs-target="adicionar" onClick={aparecermodal}>
                <img src={iconCarrinho} alt="" />
                Adicionar ao carrinho
            </button>
            </div>
        
        <div className="area_modal">
        <div className="modal border100" id="adicionar" tabindex="-1" style={{ }} aria-hidden="true">
            <div className="description_modal">
            <img src={selectedProduct.imgPath} alt="" />
            </div>
            <div className="information_modal">
                    
                    <h2 className="color_area">{selectedProduct.title}</h2>
                    <div className="bar"></div>
                    <h1 className="price">{selectedProduct.price}</h1>
                    <p className="color_text">Cor: Preto</p>
                    <p className="area_color"></p>
                    
                    <button className="remove_cart border10 botao_azul" onClick={desaparecermodal}>
                    Continuar comprando
                    </button>
                    <Link
                    to={'/checkout/${data.id}'}
                    style={{ textDecoration: "none", color: "white" }}>
                    <button className="add_cart border10 botao_cinza" >
                    Finalizar compra
                    </button>
                    </Link>
                    

                </div>
            </div>
            </div>
            </div>
        <Rodape />
        </>
    );
    };

    export default Produto;