import React, { useEffect, useState, useContext } from "react";
import { apiSettings } from "../../services/services";
import CardCourse from "../../components/CardCourse/index";
import Descripcion from "../../components/Descripcion";
import { Contenedor } from "../../components/Descripcion/Descripcion.styles";
import { useParams } from "react-router-dom";
import InscritoLink from "../../components/componentsFactory/suscriberLink";
import { AuthContext } from "../../Context";
import { useModal } from "../../hooks/useModal";
import Modal from "../../components/Modal";
import {
  ButtonSuccess,
  CongratulationsText,
  CongratulationsTitle,
  ProcesingText,
} from "./VistaCurso.styles";
import ContentFactory from "../../componentsFactory/componentFactory";

const VistaCurso = () => {
  const { cursoId } = useParams();
  const { currentUser } = useContext(AuthContext);
  const [isOpenModal, openModal, closeModal] = useModal();
  const [isOpenModalNext, openModalNext, closeModalNext] = useModal();
  const [curso, setCurso] = useState([]);
  const [temario, setTemario] = useState([]);
  const [statex, setStatex] = useState(false);
  const [state, setState] = useState(false);
  const [inscrito, setInscrito] = useState(false);
  const [inscritoID, setInscritoID] = useState(null);
  const [uid, setUid] = useState("");

  const fetchInscrito = async () => {
    console.log(currentUser);

    if (currentUser) {
      const estaInscrito = await apiSettings.getInscrito(
        cursoId,
        currentUser.uid
      );
      setInscrito(estaInscrito[0]);
      setInscritoID(estaInscrito[1]);
      setUid(currentUser.uid);
    }
  };

  useEffect(() => {
    fetchInscrito();
  }, [currentUser]);

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

        const prueba = await apiSettings.getCantMaterial(cursoId);
        var cantidad = (prueba[1].cantMaterial);
        console.log(cantidad);

      } else {
        const temp = await apiSettings.getTemario(cursoId); //getTemarioComplejo
        setStatex(true);
        setTemario(temp);

        /*const prueba = await apiSettings.getCantMaterial(cursoId);
        var cantidad = (prueba[1].cantMaterial);
        console.log("ggggggggggggggggggggggggggggggggggggg");*/

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
              idIns={inscritoID}
              modActionFirst={openModal}
              modACtionNext={closeModal}
              modACtionFirstSuccess={openModalNext}
            ></InscritoLink>
          }
        />
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <ProcesingText>Estamos procesando su solicitud.</ProcesingText>
        </Modal>
        <Modal isOpen={isOpenModalNext} closeModal={closeModalNext}>
          <CongratulationsTitle>¡FELICIDADES!</CongratulationsTitle>
          <CongratulationsText>
            Usted acaba de inscribirse al curso{" "}
            <strong>{curso[1].nombreCurso}</strong> exitosamente.
          </CongratulationsText>
          <ButtonSuccess
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Continuar
          </ButtonSuccess>
        </Modal>
        <Descripcion descripcion={curso[1].descripcion} />

        <ContentFactory
          inscrito={inscrito}
          idCurso={curso[0]}
          temas={temario}
        />
      </Contenedor>
    );
  } else {
    return <></>;
  }
};
export default VistaCurso;
