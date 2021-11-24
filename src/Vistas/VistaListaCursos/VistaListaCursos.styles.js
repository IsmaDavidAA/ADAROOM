import styled from "styled-components";

export const Contenedor = styled.div`
  min-height: 80vh;
  padding: 88px 10px 14px 10px;
  width: 100%;
  @media only screen and (max-width: 750px) {
    padding: 88px 0px 14px 0px;
    flex-direction: column;
    justify-content: center;
    border: none;
    text-align: center;
  }
`;
export const SubTitulo = styled.h1`
  padding: 4rem 0rem 0rem 0rem;
  color: #1e3163;
  font-size: 24px;
  font-family: "Segoe UI";
`;
