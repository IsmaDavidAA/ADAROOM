import styled from "styled-components";
export const CuerpoEstilo = styled.div`
  background-color: white;
  padding: 7rem 0rem 5rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 960px) {
    padding: 2rem 0rem 5rem 0rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const TituloEstilo = styled.p`
  color: #0061a8;
  padding: 0rem 0rem 0rem 1.5rem;
  font-size: 70px;
  margin-left: 28px;
  @media only screen and (max-width: 750px) {
    font-size: 50px;
    padding: 0rem 0rem 0rem 1.5rem;
  }
`;

export const TextoEstilo = styled.p`
  font-size: var(--letraEstandar);
  color: black;
  padding: 0rem 3rem 0rem 1.5rem;
  margin-left: 30px;
`;

export const ImagenEstilo = styled.img`
  max-width: 100%;
  min-width: 534px;
  min-height: 511px;
  max-height: 100%;
  border-radius: 50%;
  margin-top: 0px;
  @media only screen and (max-width: 1000px) {
    min-width: 100px;
  }
  @media only screen and (max-width: 800px) {
    min-width: 0px;
    min-height: 150px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  padding: 0rem 1.5rem 0rem 0rem;
  @media only screen and (max-width: 750px) {
    padding: 0rem 1.5rem 0rem 1.5rem;
  }
`;
