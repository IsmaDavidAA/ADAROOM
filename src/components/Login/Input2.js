import React from "react";
import { GrupoInput, LeyendaError, InputContraseñaR } from "./Login.styles";

const ComponenteInput2 = ({
  estado,
  cambiarEstado,
  tipo,
  placeholder,
  name,
  expresionRegular,
  funcion,
}) => {
  const onChange = (e) => {
    cambiarEstado({ ...estado, campo: e.target.value });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }

    if (funcion) {
      funcion();
    }
  };

  return (
    <div>
      <GrupoInput>
        <InputContraseñaR
          type={tipo}
          placeholder={placeholder}
          id={name}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />
        <div
          icon={estado.valido === "true" ? null : null}
          valido={estado.valido}
        />
      </GrupoInput>
      <LeyendaError valido={estado.valido}></LeyendaError>
    </div>
  );
};

export default ComponenteInput2;