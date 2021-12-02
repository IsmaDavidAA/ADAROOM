import React from "react";
import Lista from "../Lista";
import { Recuadro1, Space } from "./Listas.styles";
const Listas = (props) => {
  return (
    <Recuadro1>
      {props.datos.map((cursoTemp) => {
        return (
          <div key={cursoTemp[0]}>
            <Lista curso={cursoTemp} />
            <Space></Space>
          </div>
        );
      })}
    </Recuadro1>
  );
};

export default Listas;
