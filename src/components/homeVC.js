import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { apiSettings } from "../services/services";
import Contenidos from "./Contenido";
import CardCourse from "./CardCourse/CardCourse";
import Descripcion from "./Descripcion";
//import { CursoEstilo } from "./Menu/Menu.styles";

const VistaCurso = () => {
  const [curso, setCurso] = useState([]);
  const [temario, setTemario] = useState([]);
  const [statex, setStatex] = useState(false);
  const [state, setState] = useState(false);

  const fetchCurso = async () => {
    if (!state) {
      const temp = await apiSettings.getCurso("APCNB");
      setCurso(temp);
      setState(true);
    } else {
      console.log("se CARGO curso");
    }
  };
  useEffect(() => {
    fetchCurso();
    console.log(curso);
  }, [curso]);

  const fetchTemario = async () => {
    // if (state) {
    if (!statex) {
      const temp = await apiSettings.getTemario("APCNB");
      setStatex(true);
      setTemario(temp);
    }
    // } else {
    //   console.log("No hay curso aun");
    // }
  };
  useEffect(() => {
    fetchTemario();
    console.log(temario);
  }, [temario]);

  if (state && statex) {
    return (
      <> 
        <Menu/>
        <CardCourse
          codigo={curso[1].codigo}
          nombreCurso={curso[1].nombreCurso}
          institucion={curso[1].institucion}
          imagen={curso[1].imagen}
          cantInscritos={curso[1].cantInscritos}
        />
         
        <Descripcion descripcion={curso[1].descripcion} />
        <Contenidos datos={temario} />
      </>
    );
  } else {
    return <></>;
  }
};
export default VistaCurso;
