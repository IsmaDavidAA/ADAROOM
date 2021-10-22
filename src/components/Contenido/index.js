import React from "react";
import { Contenido, Title } from "./Contenidos.styles";
import Secciones from "../Secciones";
import { Caja } from "../Secciones/Seccions.styles";

const Contenidos = (props) => {
  return (
    <div>
      <>
        <Contenido>
          <Title>Contenido del curso</Title>
        </Contenido>
        <Caja>
          <Secciones datos={props.datos} />
        </Caja>
      </>
    </div>
  );
};
export default Contenidos;
