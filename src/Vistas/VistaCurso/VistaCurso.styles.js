import styled from "styled-components";

export const Contenedor = styled.div`
  min-height: 80vh;
  width: 100%;
  font-size: var(--letraEstandar);
`;

export const ButtonSuccess = styled.button`
  background: var(--blueSuave);
  margin: 25px 0px 0px 0px;
  font-weight: 500;
  font-size: var(--letraEstandar);
  &:hover {
    cursor: pointer;
  }
`;

export const CongratulationsTitle = styled.h3`
  font-size: var(--TituloPrimario);
  color: var(--black);
`;

export const ProcesingText = styled.p`
  font-size: var(--letraMediana);
`;

export const CongratulationsText = styled.p`
  font-size: var(--letraEstandar);
  color: var(--black);
`;
