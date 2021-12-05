import React, { useEffect, useState } from "react";
import { EstiloCaja, Pdf, Video, Check, Titulo } from "./Cajas.styled";
import pdf from "../../images/pdf.png";
import video from "../../images/video.png";
import { apiSettings } from "../../services/services";

const Cajas = (props) => {
  const [checkList, setCheckList] = useState(new Map());

  const getChecks = async () => {
    const response = await apiSettings.getChecks(
      props.user.uid,
      props.elements[0].codCurso,
      props.elements[0].codSeccion
    );
    [...response].map((element) => {
      setCheckList(checkList.set(element[0], true));
    });
    return response;
  };
  useEffect(() => {
    getChecks();
  }, []);

  useEffect(() => {
    console.log(checkList);
  }, [checkList]);

  const handleCheck = (codSeccion, event) => {
    if (event.target.checked) {
      checkList.set(event.target.parentNode.id, true);
      apiSettings.posCheck(
        props.elements[0].codCurso,
        codSeccion,
        props.user.uid,
        event.target.parentNode.id
      );
    } else {
      checkList.set(event.target.parentNode.id, false);
      apiSettings.deleteCheck(event.target.parentNode.id);
    }
    setCheckList(new Map(checkList));
  };
  return (
    <>
      {[...props.elements].map((element) => {
        return (
          <EstiloCaja
            key={
              props.user.uid +
              element.codCurso +
              element.codSeccion +
              [...props.elements].indexOf(element)
            }
            id={
              props.user.uid +
              element.codCurso +
              element.codSeccion +
              [...props.elements].indexOf(element)
            }
            seccion={element.codSeccion}
          >
            {element.tipoInf === "pdf" ? (
              <Pdf src={pdf} />
            ) : (
              <Video src={video} />
            )}
            <Check
              type="checkbox"
              onChange={(e) => {
                handleCheck(element.codSeccion, e);
              }}
              checked={checkList.get(
                props.user.uid +
                  element.codCurso +
                  element.codSeccion +
                  [...props.elements].indexOf(element)
              )}
            />

            <Titulo href={element.link}>{element.titulo}</Titulo>
          </EstiloCaja>
        );
      })}
    </>
  );
};
export default Cajas;
