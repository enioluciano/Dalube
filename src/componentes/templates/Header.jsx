import React from "react";
import "../css/Header.css";
import dalube from "../img/dalube.png";

export default function Header() {
  return (
    <div className="container">
     
        <div className="menu-flex">
          <div className="menu-logo">
              {/* <img src={logo} alt="logo" /> */}
            <a href={"/#"}> <img src={dalube} alt="logo" className="logo"/> </a>
          </div>
          <nav className="menu-nav">
            <ul>
              <li className="nav-link">
                <a href={"/#"}>A Empresa</a>
              </li>
              <li className="nav-link ">
                <a href="/#">Serviços</a>
              </li>
              <li className=" nav-link">
                <a href="/#">Financiamento</a>
              </li>
              <li className="nav-link">
                <a href="/#">Localização</a>
              </li>
              <li className="nav-link">
                <a href="/#">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      
    </div>
  );
}
