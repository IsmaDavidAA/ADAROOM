import styled from "styled-components";

export const Contenedor = styled.div``;

export const Titulo = styled.p`
  padding: 10px 50px 0px 60px;
  color: black;
  font-size: var(--letraEstandar);
  font-weight: bold;
  @media only screen and (max-width: 700px) {
    padding: 10px 0px 0px 10px;
    align-self: center;
  }
`;
export const Descrip = styled.div`
  padding: 0px 50px 0px 60px;
  font-size: var(--letraEstandar);
  @media only screen and (max-width: 700px) {
    padding: 10px 10px 0px 10px;
    align-self: center;
  }
`;
