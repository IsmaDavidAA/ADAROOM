import React, { useEffect, useState, useContext } from "react";
import Menu from "../../components/Menu";
import { apiSettings } from "../../services/services";
import Contenidos from "../../components/Contenido";
import CardCourse from "../../components/CardCourse/CardCourse";
import Descripcion from "../../components/Descripcion";
import { Contenedor } from "../../components/Descripcion/Descripcion.styles";
import { useParams } from "react-router-dom";
import InscritoLink from "../../componentsFactory/suscriberLink";
import { AuthContext } from "../../Context";
import { useModal } from "../../hooks/useModal";
import Modal from "../../components/Modal";
const VistaCurso = () => {
  const { cursoId } = useParams();
  const { currentUser } = useContext(AuthContext);
  const [isOpenModal, openModal, closeModal] = useModal();
  const [curso, setCurso] = useState([]);
  const [temario, setTemario] = useState([]);
  const [statex, setStatex] = useState(false);
  const [state, setState] = useState(false);
  const [inscrito, setInscrito] = useState(false);
  const [uid, setUid] = useState("");

  const fetchInscrito = async () => {
    console.log(currentUser);
    if (currentUser) {
      const estaInscrito = await apiSettings.getInscrito(
        cursoId,
        currentUser.uid
      );
      setInscrito(estaInscrito);
      setUid(currentUser.uid);
    }
  };

  useEffect(() => {
    fetchInscrito();
  }, []);

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
        <CardCourse
          codigo={curso[1].codigo}
          nombreCurso={curso[1].nombreCurso}
          institucion={curso[1].institucion}
          imagen={curso[1].imagen}
          cantInscritos={curso[1].cantInscritos}
          children={
            <InscritoLink
              inscrito={inscrito}
              idCurso={curso[0]}
              idEst={uid}
              modAction={openModal}
            ></InscritoLink>
          }
        />
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <h3>Modal 1</h3>
          <p>Hola ese es el contenido de mi modal 1</p>
          <p>Hola ese es el contenido de mi modal 1</p>
          <p>Hola ese es el contenido de mi modal 1</p>
        </Modal>
        <Descripcion descripcion={curso[1].descripcion} />
        <Contenidos datos={temario} />
      </Contenedor>
    );
  } else {
    return <></>;
  }
};
export default VistaCurso;
