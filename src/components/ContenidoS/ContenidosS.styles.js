import styled from "styled-components";
export const Contenido = styled.div`
  background: #ffffff;
  padding: 0px 0px 0px 60px;
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

export const Recomendacion = styled.p`
  margin: 5rem 4rem 2rem -13rem ;
  padding: none;
  color:#2978B5;
  font-size: 18px;
`;

