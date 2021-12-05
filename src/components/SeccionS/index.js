import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./Accordion.css";
import Cajas from "../Cajas";
import { AccordionSeccionS } from "./SeccionS.styles";
const Accordion = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [activated, setActivated] = useState(false);

  const content = useRef(null);

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
    <AccordionSeccionS>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
        <p className="accordion__title"> {props.title}</p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="accordion__text">
          {<Cajas elements={props.elementos} user={props.user} />}
        </div>
      </div>
    </AccordionSeccionS>
  );
};

export default Accordion;
