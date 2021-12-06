import React from "react";
import {
  StyledCard,
  CardContainer,
  ImageC,
  Course,
  Institution,
  Inscribed,
  InscribedState,
  WrapperStateInscripcion,
  WrapperTitle,
  WrapperState,
} from "./CardCourse.styles";

const CardCourse = ({
  codigo,
  nombreCurso,
  institucion,
  imagen,
  cantInscritos,
  children,
}) => {
  return (
    <StyledCard>
      <ImageC src={imagen} alt="" srcset="" />
      <CardContainer>
        <WrapperTitle>
          <Course>{nombreCurso}</Course>
          <Institution>{institucion}</Institution>
          <Inscribed>{cantInscritos} ya inscritos</Inscribed>
        </WrapperTitle>
        <WrapperState>
          <InscribedState>{children}</InscribedState>
        </WrapperState>
      </CardContainer>
    </StyledCard>
  );
};
export default CardCourse;
