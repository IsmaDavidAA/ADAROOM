import React, { useEffect, useState } from "react";
import Listas from "./Listas";
import { apiSettings } from "../services/services";
import { SubTitulo } from "./Home.styles";

const HomeL = () => {
  // const { cursos } = useCursosFetch();
  const [cursos, setCursos] = useState([]);
  const [state,setState] = useState(false);
  
  const fetchCursos = async () => {
    if(!state) {
    const temp = await apiSettings.getCursos();
    setState(true);
    setCursos(temp);}
  };

  useEffect(() => {
    fetchCursos();
  }, [cursos]);

  return (
    <>
     <SubTitulo>Cursos gratis</SubTitulo>
      <Listas datos={cursos} />
    </>
  );
};

export default HomeL;
