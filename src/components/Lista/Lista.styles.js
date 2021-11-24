import styled from "styled-components";

export const Recuadro = styled.div`
  color: #000000;
  background: #fdfefe;
  border-bottom: #ccd1d1 2px solid;
  width: 100%;
  height: 260px;
  text-align: left;
  display: flex;
  box-shadow: 0px 2px 5px -6px rgb(95, 95, 95);
  font-size: var(--letraEstandar);

  @media only screen and (max-width: 750px) {
    padding: 0px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    border: none;
  }
`;

export const Texto = styled.div`
  height: 260px;
  text-decoration: none;
  padding: 10px 0px 0px 12px;
  @media only screen and (max-width: 750px) {
    padding: 18px 0px 0px 0px;
    flex-direction: column;
    border: none;
  }
`;

export const ImagenL = styled.img`
  width: 300px;
  height: 260px;
  display: block;
  float: left;
  @media only screen and (max-width: 750px) {
    padding: 0px;
    align-self: center;
    justify-self: center;
    flex-direction: column;
    border: none;
  }
`;

export const NombreIL = styled.div`
  text-align: left;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  @media only screen and (max-width: 750px) {
    text-align: center;
  }
`;
export const AutorL = styled.p`
  text-align: left;
  color: var(--plomoAgua);
  @media only screen and (max-width: 750px) {
    text-align: center;
  }
`;
export const CantInsL = styled.div`
  text-align: left;
  font-weight: bold;
  @media only screen and (max-width: 750px) {
    text-align: center;
  }
`;
