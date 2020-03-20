import React from 'react';
import "../css/Servicos.css";
import servicos from "../img/botafogo.jpg";

export default function Servicos() {
    return (
        <div className="container-sobre">
            <h2>Serviços</h2>
            <div className="container-flex">
                <div className="img-servicos">
                    <img src={servicos} alt=""/>
                </div>
                <div className="text-servicos">
                    <h3>Contruções e Projetos</h3>
                    <p> O serviços são apresentados de formas que o cliente nao tem para onde ir. Essa
                        informacao e de suma importancia para efeito de teste porque e assim que a gente
                        tem que trabalhar para ter algo para comer e beber.
                    </p>
                </div>
            </div>

            <div className="container-flex">
                <div className="img-servicos">
                    <img src={servicos} alt=""/>
                </div>
                <div className="text-servicos">
                    <h3>Reformas</h3>
                    <p> O serviços são apresentados de formas que o cliente nao tem para onde ir. Essa
                        informacao e de suma importancia para efeito de teste porque e assim que a gente
                        tem que trabalhar para ter algo para comer e beber.
                    </p>
                </div>
            </div>

            <div className="container-flex">
                <div className="img-servicos">
                    <img src={servicos} alt=""/>
                </div>
                <div className="text-servicos">
                    <h3>Desmembramento de lotes</h3>
                    <p> O serviços são apresentados de formas que o cliente nao tem para onde ir. Essa
                        informacao e de suma importancia para efeito de teste porque e assim que a gente
                        tem que trabalhar para ter algo para comer e beber.
                    </p>
                </div>
            </div>

            <div className="container-flex">
                <div className="img-servicos">
                    <img src={servicos} alt=""/>
                </div>
                <div className="text-servicos">
                    <h3>Regularização de Imóveis</h3>
                    <p> O serviços são apresentados de formas que o cliente nao tem para onde ir. Essa
                        informacao e de suma importancia para efeito de teste porque e assim que a gente
                        tem que trabalhar para ter algo para comer e beber.
                    </p>
                </div>
            </div>

            <div className="container-flex">
                <div className="img-servicos">
                    <img src={servicos} alt=""/>
                </div>
                <div className="text-servicos">
                    <h3>Serviços de Engenharia em Geral</h3>
                    <p> O serviços são apresentados de formas que o cliente nao tem para onde ir. Essa
                        informacao e de suma importancia para efeito de teste porque e assim que a gente
                        tem que trabalhar para ter algo para comer e beber.
                    </p>
                </div>
            </div>
        </div>
    );
}