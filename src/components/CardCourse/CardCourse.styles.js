import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  margin: 11rem 0rem 2rem 6rem;
  padding: 0rem 2rem 0rem 0rem;
  font-size: var(--letraEstandar);

  @media only screen and (max-width: 700px) and (min-width: 550px) {
    margin: 8rem 4rem 2rem 4rem;
    padding: 0rem 0rem 0rem 0rem;
    flex-direction: column;
  }
  @media only screen and (max-width: 550px) {
    margin: 8rem 0rem 2rem 0rem;
    padding: 0rem 0rem 0rem 0rem;
    flex-direction: column;
  }
`;
export const CardContainer = styled.div`
  padding: 0px 15px 0px 15px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 700px) {
    padding: 15px 15px 0px 15px;
  }
`;
export const ImageC = styled.img`
  max-width: 300px;
  min-width: 300px;
  min-height: 260px;
  max-height: 260px;

  @media only screen and (max-width: 700px) and (min-width: 550px) {
    width: 100%;
    max-width: 450px;
    min-width: 450px;
    min-height: 280px;
    max-height: 280px;
    align-self: center;
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
    padding: 0rem 0rem 0rem 0rem;
    max-width: 100%;
    min-width: 100%;
    min-height: 280px;
    max-height: 280px;
  }
`;
export const Course = styled.div`
  font-weight: bold;
  padding-bottom: 18px;
`;
export const Institution = styled.div`
  color: var(--plomo);
  padding-bottom: 18px;
`;
export const Inscribed = styled.div`
  color: var(--black);
  font-weight: bold;
  padding-bottom: 18px;
`;
export const InscribedState = styled.div`
  color: var(--blueAgua);
  font-size: var(--letraMediana);
  align-self: flex-end;
`;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapperState = styled.div`
  display: flex;
  flex-direction: inline;
  height: 50%;
`;
