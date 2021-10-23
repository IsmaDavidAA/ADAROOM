import React from "react";
import Mosaico1 from "../Mosaico1";
import { Contenedor } from "./Mosaico.styles";
const Mosaico = (props) => {
  return (
    <Contenedor>
      {props.datos.map((cursoTemp) => {
        return <Mosaico1 curso={cursoTemp} />;
      })}
    </Contenedor>
  );
};

export default Mosaico;
