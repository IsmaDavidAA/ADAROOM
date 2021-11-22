import styled from "styled-components";
export const Contenido = styled.div`
  background: #ffffff;
  margin: 0rem 0rem 0rem 6rem;
  display: flex;
  @media only screen and (max-width: 700px) {
    padding: 0px 0px 0px 10px;
    margin: 0px 0px 0px 0px;
    flex-direction: column;
  }
`;

export const Title = styled.h3`
  font-size: var(--letraEstandar);
`;
