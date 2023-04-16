import "./Rodape.css";
import logobranca from "../imagens/logo_dnc_branca.svg";

function Rodape() {
  return (
    <>
      <footer>
        <div className="rodape_esq">
          <img src={logobranca} alt="Logo DNC Branca"></img>
        </div>
        <div className="rodape_dir">
          <p>
            Preços e condições de pagamento exclusivos para compras via internet
            e podem variar nas lojas físicas.
            <br />
            <b>Para mais informações, entre em contato: (011) 1111-2222</b>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Rodape;
