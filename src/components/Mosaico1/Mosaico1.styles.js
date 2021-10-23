import styled from "styled-components";

export const Recuadro = styled.div`
  color: #000000;
  background: #fdfefe;
  border-bottom: #ccd1d1 2px solid;
  border-left: #ccd1d1 2px solid;
  border-right: #ccd1d1 2px solid;
  width: 25%;
  height: 550px;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 1rem 4rem;
  position: relative;
`;

export const Texto = styled.div`
  height: 260px;
`;

export const ImagenL = styled.img`
  width: 100%;
  height: 500px;
  display: block;
  margin: 0rem 0rem 0rem 0rem;
  float: left;
  border-bottom: #ccd1d1 2px solid;
`;

export const NombreIL = styled.h3`
  text-align: left;
  font-weight: bold;
  color: #000000;
  font-family: "Segoe UI";
  margin: 1rem 2rem 0rem 2rem;
`;
export const AutorL = styled.p`
  text-align: left;
  color: gray;
  font-family: "Segoe UI";
  margin: 1rem 2rem 0rem 2rem;
`;
export const CantInsL = styled.h3`
  text-align: left;
  font-weight: bold;
  font-family: "Segoe UI";
  margin: 1rem 2rem 0rem 2rem;
`;
