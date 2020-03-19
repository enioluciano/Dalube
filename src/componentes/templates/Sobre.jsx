import React from "react";
import "../css/Sobre.css";
import principal2 from "../img/botafogo.jpg";

export default function Sobre() {
  return (
    <div className="container-sobre">
      <h2> A Empresa </h2>

      <div className="sobre-flex">
        <div className="sobre-img">
        <img src={principal2} alt="logo" className = "imagem-logo"/>
        
        
        </div>
        <div className="sobre-text">
          <p>
            A VIII Escola Regional de Computação Ceará, Maranhão, Piauí
            (ERCEMAPI 2020) tem como objetivo disseminar o conhecimento técnico
            e científico sobre temas e assuntos de vanguarda na área de
            Computação. As Escolas Regionais são eventos promovidos pela
            Sociedade Brasileira de Computação (SBC). A ERCEMAPI visa se
            consolidar como um evento de referência nos Estados do Maranhão,
            Ceará e Piauí e região. Além disso, o evento colabora e contribui
            com a consolidação dos Programas de Pós-Graduação da região. A
            ERCEMAPI 2020, acontece de 10 a 12 de setembro, na cidade de
            Parnaíba-PI, porta de entrada turística para a Rota das Emoções
            (Lençóis Maranhenses - Delta do Rio Parnaíba - Jericoacoara).
            Contará com a realização em paralelo do evento satélite Encontro
            Unificado de Computação do Piauí (ENUCOMPI 2020). Em sua 13ª edição,
            o ENUCOMPI se consolida como um dos mais importantes eventos de
            Computação da região nordeste, especialmente no eixo Maranhão, Piauí
            e Ceará, visando contribuir para o enriquecimento da ciência
            regional, por meio do incentivo a pesquisa, a inovação e ao
            empreendedorismo.
          </p>
        </div>
      </div>
    </div>
  );
}
