import React, { useState, useRef, useEffect } from "react";
import Chevron from "./Chevron";
import "./Accordion.css";
import pdf from "../../images/pdf.png";
import video from "../../images/video.png";

const Accordion = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [activated, setActivated] = useState(false);
  const [elementos, setElementos] = useState("...");
  const content = useRef(null);

  const fetchContenido = () => {
    let e = `<div style="background: none; margin:0 0 0 20px; ">`;
    props.elementos.forEach((element) => {
      e =
        e +
        `<div style= " display:flex; background: none;  cursor: context-menu; "  >` +
        `${
          element.tipoInf === "pdf"
            ? `<img src=${pdf} style="width:45px; heigth:45px; margin-top: 30px;" />`
            : `<img src=${video} style="width:45px; heigth:45px;margin-top: 30px;"/>`
        } ` +
        `<a href="${element.link}"style="text-decoration:none; color:black; font-size: 20px; font-weight:bold; margin-left:18px; margin-top: 30px;">` +
        element.titulo +
        "</a>" +
        "</div>";
    });
    e = e + "</div>";
    setElementos(e);
  };
  useEffect(() => {
    fetchContenido();
  }, []);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
    if (setActive === "active" && !activated) {
      setActivated(true);
    }
  }

  return (
    <div className="accordion__section background: black">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
        <p className="accordion__title"> {props.title}</p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: `${elementos}` }}
        />
      </div>
    </div>
  );
};

export default Accordion;
