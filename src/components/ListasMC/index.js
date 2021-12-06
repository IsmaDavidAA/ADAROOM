import React from "react";
import ListaMC from "../ListaMC";
import { Recuadro1, Space } from "./ListasMC.styles";
const ListasMC = (props) => {
  return (
    <Recuadro1>
      {props.datos.map((cursoTemp) => {
        return (
          <>
            <ListaMC curso={cursoTemp} key={cursoTemp[0]} />
            <Space />
          </>
        );
      })}
    </Recuadro1>
  );
};

export default ListasMC;
