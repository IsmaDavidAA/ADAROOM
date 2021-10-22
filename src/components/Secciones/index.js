import React from "react";
import { Seccions, Seccion } from "./Seccions.styles";
// import Seccion from "../Seccion";

const Secciones = (props) => {
  return (
    <div classname="row">
      {props.datos.map((seccionAux) => {
        return (
          <Seccions>
            <li>
              <Seccion>{seccionAux[1].seccion}</Seccion>
            </li>
          </Seccions>
        );
      })}
    </div>
  );
};
export default Secciones;
