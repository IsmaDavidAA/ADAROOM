import React from "react";
import Accordion from "../SeccionS";
const SeccionesS = (props) => {
  return (
    <>
      {props.datos.map((seccionAux) => {
        return (
          <Accordion
            key={seccionAux[0]}
            title={seccionAux[1].seccion}
            idContenido={seccionAux[0]}
            elementos={seccionAux[2]}
            user={props.user}
          ></Accordion>
        );
      })}
    </>
  );
};
export default SeccionesS;
