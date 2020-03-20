import React from "react";
import "../css/Sobre.css";
import principal2 from "../img/botafogo.jpg";

export default function Sobre() {
  return (
    <div className="container-sobre">
      <h2> A Empresa </h2>

      <div className="sobre-flex">
        <div className="sobre-img">
          <img src={principal2} alt="logo" className="imagem-logo" />
        </div>
        <div className="sobre-text">
          <p>
            Somos a empresa _______ e gostaríamos de nos apresentar para você.
            Estamos no mercado de_______ há _______ anos e nosso lema é atuar
            sempre com amor e carinho. Para isso contamos com uma equipe de 200
            profissionais dos mais qualificados. Nossos produtos são feitos
            especialmente pra quem busca conforto e segurança. Desenvolvidos
            pela mais alta tecnologia os produtos são destinados para pessoas
            como você que sempre está em busca do novo com os melhores preços. A
            prestação dos melhores serviços aos nossos clientes é o que nos
            move.
          </p>
        </div>
      </div>
    </div>
  );
}
