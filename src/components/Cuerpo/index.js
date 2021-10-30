import React from "react";
//import './Cuerpo.css';
import imagenPrincipal from "../../images/imagenPrincipal.jpg";
import {
  CuerpoEstilo,
  TituloEstilo,
  TextoEstilo,
  ImagenEstilo,
} from "./Cuerpo.styles";
function Cuerpo() {
  return (
    <CuerpoEstilo>
      <div>
        <TituloEstilo> APRENDIZAJE SIN LIMITES</TituloEstilo>
        <TextoEstilo>
          {" "}
          Adquiere habilidades con los cursos en linea que ofrecen las
          universidades y las empresas más importantes del mundo en el área de
          programación y creación de páginas web.
        </TextoEstilo>
      </div>
      <ImagenEstilo src={imagenPrincipal} />
    </CuerpoEstilo>
  );
}

export default Cuerpo;
