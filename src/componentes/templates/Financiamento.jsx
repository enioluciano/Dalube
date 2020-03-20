import React from "react";
import "../css/Financiamento.css";
import bb from "../img/bb.png"
import itau from "../img/itau.png";
import bradesco from "../img/bradesco.png";

export default function Financiamento() {
  return (
    <div className="container-financiamento">
      <div className="title">
        <h2>Financiamentos</h2>
      </div>
      <div className="financiamento-flex">
        <div className="caixa">
          <img
            src="https://assets.blu365.com.br/uploads/sites/4/2019/06/curiosidades-sobre-a-caixa-economica-federal-98-696x475.jpg"
            alt=""
            className="img-caixa"
          />
        </div>
        <div className="bb">
            <img src={bb} alt=""/>
        </div>

        <div className="itau">
        <img src={itau} alt="logo Itaú" aria-hidden="true" class="d-none d-lg-block"/>
        </div>

        <div className="bradesco">
            <img src={bradesco} alt=""/>
        </div>
      </div>
    </div>
  );
}
