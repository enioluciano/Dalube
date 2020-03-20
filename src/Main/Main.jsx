import React from 'react';
import Header from '../componentes/templates/Header';
import Principal from '../componentes/templates/Principal';
import Sobre from '../componentes/templates/Sobre';
import Financiamento from '../componentes/templates/Financiamento';
import Mapa from '../componentes/templates/Mapa';
import Servicos from '../componentes/templates/Servicos';
import Footer from '../componentes/templates/Footer';


function Main() {
  return (
    <div>
      <Header />
      <Principal />
      <Sobre />
      <Financiamento />
      <Mapa />
      <Servicos />
      <Footer />
    </div>
  );
}

export default Main;