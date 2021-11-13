import React from "react";
import { Contenido, Title } from "./ContenidosS.styles";
import SeccionesS from "../SeccionesS";
import { Caja } from "../Secciones/Seccions.styles";

const ContenidosS = (props) => {
  return (
    <div>
      <>
        <Contenido>
          <Title>Contenido del curso</Title>
        </Contenido>
        <Caja>
          <SeccionesS datos={props.datos} />
        </Caja>
      </>
    </div>
  );
};
export default ContenidosS;