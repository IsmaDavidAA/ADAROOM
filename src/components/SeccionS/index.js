
import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./Accordion.css";
import { apiSettings } from "../../services/services";
import { useEffect } from "react/cjs/react.development";
import pdf from "../../images/pdf.png";
import video from "../../images/video.png";

const Accordion = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [activated, setActivated] = useState(false);
  const [elementos, setElementos] = useState("...");
  const content = useRef(null);

  const detailContentBuilder = () => {};

  const fetchContenido = async () => {
    const data = await apiSettings.getContenido(props.idContenido);
    let e = 
    `<div style="background: none; margin:0 0 0 20px; ">`;
    data.forEach((element) => {
      console.log(element);
      e =
        e +
        `<div style= " display:flex; background: none; margin-top: 30px;  "  >` +
        `${
          element[1].tipoInf === "pdf"
            ? `<img src=${pdf} style="width:45px; heigth:45px; " />`
            : `<img src=${video} style="width:45px; heigth:45px;"/>`
        } ` +
        `<a href="${element[1].link}"style="text-decoration:none; color:black; font-size: 20px; font-weight:bold; margin-left:18px">` +
        element[1].titulo +
        "</a>" +
        "</div>";
    });
    e = e + "</div>";
    console.log(e);
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
    <div className="accordion__section background: black"  >
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