import React, { useEffect, useState } from "react";
import Listas from "../../components/Listas";
import { apiSettings } from "../../services/services";
import { SubTitulo, Contenedor } from "./VistaListaCursos.styles";

const VistaListaCursos = () => {
  const [cursos, setCursos] = useState([]);
  const [state, setState] = useState(false);

  const fetchCursos = async () => {
    if (!state) {
      const temp = await apiSettings.getCursos();
      setState(true);
      setCursos(temp);
    }
  };

  useEffect(() => {
    fetchCursos();
  }, [cursos]);

  return (
    <Contenedor>
      <SubTitulo>Cursos gratis</SubTitulo>
      <Listas datos={cursos} />
    </Contenedor>
  );
};

export default VistaListaCursos;
