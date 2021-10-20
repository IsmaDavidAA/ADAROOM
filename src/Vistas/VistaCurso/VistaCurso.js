import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import { apiSettings } from "../../services/services";
import Contenidos from "../../components/Contenido";
import CardCourse from "../../components/CardCourse/CardCourse";
import Descripcion from "../../components/Descripcion";
import { Contenedor } from "../../components/Descripcion/Descripcion.styles";
import { useParams } from "react-router-dom";
const VistaCurso = () => {
  const { cursoId } = useParams();
  const [curso, setCurso] = useState([]);
  const [temario, setTemario] = useState([]);
  const [statex, setStatex] = useState(false);
  const [state, setState] = useState(false);

  const fetchCurso = async () => {
    if (!state) {
      const temp = await apiSettings.getCurso(cursoId);
      setCurso(temp);
      setState(true);
    }
  };
  useEffect(() => {
    fetchCurso();
    console.log(curso);
  }, [curso]);

  const fetchTemario = async () => {
    if (!statex) {
      const temp = await apiSettings.getTemario(cursoId);
      setStatex(true);
      setTemario(temp);
    }
  };
  useEffect(() => {
    fetchTemario();
    console.log(temario);
  }, [temario]);

  if (state && statex) {
    return (
      <Contenedor>
        <Menu />
        <CardCourse
          codigo={curso[1].codigo}
          nombreCurso={curso[1].nombreCurso}
          institucion={curso[1].institucion}
          imagen={curso[1].imagen}
          cantInscritos={curso[1].cantInscritos}
        />

        <Descripcion descripcion={curso[1].descripcion} />
        <Contenidos datos={temario} />
      </Contenedor>
    );
  } else {
    return <></>;
  }
};
export default VistaCurso;
