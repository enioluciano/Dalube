import React from 'react';
import Header from '../componentes/templates/Header';
import Principal from '../componentes/templates/Principal';
import Sobre from '../componentes/templates/Sobre';
import Financiamento from '../componentes/templates/Financiamento';
import Mapa from '../componentes/templates/Mapa';


function Main() {
  return (
    <div>
      <Header />
      <Principal />
      <Sobre />
      <Financiamento />
      <Mapa />
    </div>
  );
}

export default Main;