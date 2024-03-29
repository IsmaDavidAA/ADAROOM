import React from "react";
import facebook from "../../images/facebook.png";
import {
  PiePagEstilo,
  NombreAdaroom,
  DerechosA,
  Email,
  DirEmail,
  ImagenFacebook,
  WrapperA,
  WrapperB,
  Cont,
} from "./PiePagina.styles";

function PiePagina() {
  return (
    <PiePagEstilo>
      <WrapperA>
        <NombreAdaroom>ADAROOM</NombreAdaroom>
        <DerechosA>© 2021 Adaroom. Todos los derechos reservados.</DerechosA>
      </WrapperA>
      <WrapperB>
        <Cont>
          <Email>E-mail:</Email>
          <DirEmail>adaroom8@gmail.com</DirEmail>
        </Cont>
        <a
          title="Facebook"
          href="https://www.facebook.com/Adaroom-101482152322940"
        >
          <ImagenFacebook src={facebook} alt="Facebook" />
        </a>
      </WrapperB>
    </PiePagEstilo>
  );
}
export default PiePagina;
