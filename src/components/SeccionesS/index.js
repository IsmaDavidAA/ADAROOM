import React, { useState, useEffect } from "react";
import { Seccions, Seccion, Button, Arrow, ButtonS } from "./SeccionsS.styles";
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
          ></Accordion>
        );
      })}
     
    </>
  );
};
export default SeccionesS;
