import styled from "styled-components";
export const Contenido = styled.div`
  background: #ffffff;
  padding: 0px 0px 0px 60px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 760px) {
    padding: 0px 10px 0px 10px;
    margin: 0px 0px 0px 0px;
  }
`;

export const Title = styled.h3`
  font-size: var(--letraEstandar);
`;

export const Recomendacion = styled.p`
  padding: 0px 0px 0px 0px;
  color: #2978b5;
  font-size: 18px;
`;
