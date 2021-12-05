import React from "react";
//import './Cuerpo.css';
import imagenPrincipal from "../../images/imagenPrincipal.jpg";
import {
  CuerpoEstilo,
  TituloEstilo,
  TextoEstilo,
  ImagenEstilo,
  ImageContainer,
} from "./Cuerpo.styles";
function Cuerpo() {
  return (
    <CuerpoEstilo>
      <div>
        <TituloEstilo> APRENDIZAJE SIN LÍMITES</TituloEstilo>
        <TextoEstilo>
          {" "}
          Adquiere habilidades con los cursos en línea que ofrecen las
          universidades y las empresas más importantes del mundo en el área de
          programación y creación de páginas web.
        </TextoEstilo>
      </div>
      <ImageContainer>
        <ImagenEstilo src={imagenPrincipal} />
      </ImageContainer>
    </CuerpoEstilo>
  );
}

export default Cuerpo;
