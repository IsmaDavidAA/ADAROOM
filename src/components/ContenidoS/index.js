import React from "react";
import { Contenido, Mensaje, Title, Recomendacion } from "./ContenidosS.styles";
import SeccionesS from "../SeccionesS";
import { Caja } from "../Secciones/Seccions.styles";

const ContenidosS = (props) => {
  return (
    <div>
      <>
        <Contenido>
          <Title>Contenido del curso</Title>
          <Recomendacion>Recomendación, una ves que termine una subsección (video o pdf) por favor marque el la casilla, para mostrar su avance del curso en la barra de <br/>estado.</Recomendacion>
        </Contenido>
        <Caja>
          <SeccionesS datos={props.datos} />
        </Caja>
      </>
    </div>
  );
};
export default ContenidosS;