import styled from "styled-components";

export const Contenedor = styled.div``;

export const Titulo = styled.p`
  margin: 1rem 5rem 0rem 6rem;
  color: black;
  font-size: var(--letraEstandar);
  font-weight: bold;
  @media only screen and (max-width: 700px) {
    width: 100%;
    margin: 1rem 0rem 0rem 1rem;
    padding: 1rem 0rem 0rem 0rem;
    align-self: center;
  }
`;
export const Descrip = styled.div`
  margin: 0rem 5rem 0rem 6rem;
  font-size: var(--letraEstandar);
  @media only screen and (max-width: 700px) {    
    margin: 1rem 1rem 0rem 1rem;
    align-self: center;
  }
`;
