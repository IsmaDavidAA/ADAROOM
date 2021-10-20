import React , { useEffect, useState } from 'react'
import { apiSettings } from "../services/services";
const cursosIni = [];
export const useCursosFetch = () => {
  const [cursos, setCursos] = useState(cursosIni);

  const fetchCursos = async () => {
    const temp = await apiSettings.getCusos();
    console.log(temp);
    console.log(await apiSettings.getCusos());
    setCursos(temp);
  };

  useEffect(() => {
    fetchCursos();
  }, [cursos]);

  return { cursos };
};
