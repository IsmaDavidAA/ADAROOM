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
<DerechosA>©Adaroom. Todos los derechos reservados.</DerechosA>
</WrapperA>
<WrapperB>
<Cont>
<Email>E-mail:</Email>
<DirEmail>adaroom8@gmail.com</DirEmail>
</Cont>
<ImagenFacebook href="[google.com](https://www.google.com)" src={facebook} />
</WrapperB>
</PiePagEstilo>
);
}
export default PiePagina