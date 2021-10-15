import React from "react";
import { Recuadro, ImagenL, AutorL, CantInsL, NombreIL } from "./Lista.styles";
const Lista = (props) => {
  return (
    <Recuadro>
      <ImagenL src={props.curso[1].imagen} />

      <div>
        <NombreIL>{props.curso[1].nombreCurso}</NombreIL>
        <AutorL>{props.curso[1].institucion}</AutorL>
        <CantInsL>{props.curso[1].cantInscritos} ya Inscritos </CantInsL>
      </div>
    </Recuadro>
  );
};

export default Lista;
