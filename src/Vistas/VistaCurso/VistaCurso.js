import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import { apiSettings } from "../../services/services";
import Contenidos from "../../components/Contenido";
import CardCourse from "../../components/CardCourse/CardCourse";
import Descripcion from "../../components/Descripcion";
import { Contenedor } from "../../components/Descripcion/Descripcion.styles";
import { useParams } from "react-router-dom";
import InscritoLink from "../../components/InscritoLink";

const VistaCurso = () => {
  const { cursoId } = useParams();
  const [curso, setCurso] = useState([]);
  const [temario, setTemario] = useState([]);
  const [statex, setStatex] = useState(false);
  const [state, setState] = useState(false);
  const [inscrito, setInscrito] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  /*
  const fetchLoggedIn = async ()=>{
    const temp = await apiSettings.getLoggedIn();
    if(temp){
      const estaInscrito = await apiSettings.getInscrito(cursoId, userId);
      setInscrito(estaInscrito);
    }
  }  
  
  useEffect(() => {
    fetchLoggedIn();
  }, [loggedIn]);
  */
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
      if (!inscrito) {
        const temp = await apiSettings.getTemario(cursoId);
        setStatex(true);
        setTemario(temp);
      } else {
        const temp = await apiSettings.getTemario(cursoId); //getTemarioComplejo
        setStatex(true);
        setTemario(temp);
      }
    }
  };

  useEffect(() => {
    fetchTemario();
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
          children={
            <InscritoLink
              loggedIn={loggedIn}
              inscrito={inscrito}
            ></InscritoLink>
          }
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
