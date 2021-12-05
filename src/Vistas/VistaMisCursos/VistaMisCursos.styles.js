import styled from "styled-components";
export const Contenedor = styled.div`
  min-height: 80vh;
  padding: 88px 10px 14px 10px;
  margin-left: 40px;
  @media only screen and (max-width: 750px) {
    padding: 88px 0px 14px 0px;
    flex-direction: column;
    justify-content: center;
    border: none;
    text-align: center;
    margin-left: 0px;
  }
`;
export const Texto = styled.p`
  font-size: var(--LetraMediana);
  font-size: 20px;
  color: var(--blue);
  color: #1e3163;
  margin-left: 100px;
  font-weight: bold;
`;

export const Texto2 = styled.p`
  font-size: 20px;
  color: #999999;
  margin-left: 100px;
  margin-top: 40px;
`;
export const SubTitulo = styled.h1`
  padding: 4rem 0rem 0rem 1rem;
  color: #1e3163;
  font-size: 24px;
  font-family: "Segoe UI";
  @media only screen and (max-width: 750px) {
    padding: 4rem 0rem 0rem 0rem;
  }
`;
