import React from "react";
import '../css/Mapa.css'

export default function Mapa() {
  return (
    <div>
      <h2> Localização</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6324794749794!2d-41.72301738505043!3d-2.921579540420431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ec3ad601d7f535%3A0xd522c1b70c9d043f!2sR.%20Prodjetada%20Duzentos%20e%20Tr%C3%AAs%2C%20325-265%20-%20Piau%C3%AD%2C%20Parna%C3%ADba%20-%20PI!5e0!3m2!1spt-BR!2sbr!4v1584673356046!5m2!1spt-BR!2sbr"
        style={{width:"100%", 
            height:"450px", 
            frameborder:"0" ,
            border:"0;",
            allowfullscreen:"",
          margin: "40px 0"}}
      ></iframe>


    </div>
  );
}
