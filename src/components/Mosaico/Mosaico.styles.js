import styled from "styled-components";
export const Contenedor = styled.div`
  padding: 1.5rem 1.5rem 0rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;
export const Recuadro = styled.div`
  color: #000000;
  background: #fdfefe;
  border-bottom: #ccd1d1 2px solid;
  border-left: #ccd1d1 2px solid;
  border-right: #ccd1d1 2px solid;
  width: 345px;
  height: 485px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
  @media only screen and (max-width: 1000px) {
    margin: 0px 3px 10px 3px;
  }
`;

export const Texto = styled.div`
  height: 200px;
  padding: 0px 3px 10px 3px;
  font-size: var(--letraUltraPequenia);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImagenL = styled.img`
  width: 345px;
  height: 345px;
  border-bottom: #ccd1d1 2px solid;
`;

export const NombreIL = styled.p`
  font-weight: bold;
  color: #000000;
  margin: 12px 0px 0px 0px;
`;
export const AutorL = styled.p`
  color: var(--plomo);
  margin: 5px 0px;
`;
export const CantInsL = styled.p`
  margin: 5px 0px;
  font-weight: bold;
`;
