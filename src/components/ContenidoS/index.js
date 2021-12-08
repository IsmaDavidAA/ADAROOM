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
          <Recomendacion>
            Recomendación, una vez que termine una subsección (video o PDF) por
            favor marque la casilla, para mostrar su avance del curso en la
            barra de estado.
          </Recomendacion>
        </Contenido>
        <Caja>
          <SeccionesS datos={props.datos} user={props.user} />
        </Caja>
      </>
    </div>
  );
};
export default ContenidosS;
