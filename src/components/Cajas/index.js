import React, { useEffect, useState } from "react";
import { EstiloCaja, Pdf, Video, Check, Titulo } from "./Cajas.styled";
import pdf from "../../images/pdf.png";
import video from "../../images/video.png";
import { apiSettings } from "../../services/services";

const Cajas = (props) => {
  const [checkList, setCheckList] = useState(new Map());

  useEffect(() => {
    let i = 0;
    [...props.elements].map((element) => {
      setCheckList(
        checkList.set(
          props.user.uid + element.codCurso + element.codSeccion + i,
          false
        )
      );
      i++;
    });
  }, []);

  useEffect(() => {
    console.log(checkList);
  }, [checkList]);

  const handleCheck = (event) => {
    console.log(event.target.checked, event.target.parentNode.id);
    if (event.target.checked) {
      checkList.set(event.target.parentNode.id, true);
      apiSettings.posCheck(
        props.elements[0].codCurso,
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
          >
            {element.tipoInf === "pdf" ? (
              <Pdf src={pdf} />
            ) : (
              <Video src={video} />
            )}
            <Check type="checkbox" onChange={handleCheck} />
            <Titulo href={element.link}>{element.titulo}</Titulo>
          </EstiloCaja>
        );
      })}
    </>
  );
};
export default Cajas;
