import styled from "styled-components";

export const Contenedor = styled.div`
  min-height: 80vh;
  width: 100%;
`;
export const Coment = styled.div`
  font-weight: bold;
  font-size: var(--letraEstandar);
  padding: 4rem 0rem 0rem 2rem;
  @media only screen and (max-width: 750px) {
    padding: 4rem 1.5rem 0rem 1.5rem;
  }
`;
export const Coment1 = styled.div`
  font-size: var(--letraEstandar);
  padding: 1rem 0rem 0rem 2rem;
  @media only screen and (max-width: 750px) {
    padding: 1rem 1.5rem 0rem 1.5rem;
  }
`;
export const MasCursos = styled.div`
  color: #0061a8;
  font-size: var(--letraUltraPequenia);
  font-weight: bold;
`;
export const Caja = styled.div`
  padding: 1.5rem 1rem 10rem 2rem;
  display: flex;
  text-align: left;
  @media only screen and (max-width: 750px) {
    padding: 1.5rem 1.5rem 2rem 1.5rem;
  }
`;
