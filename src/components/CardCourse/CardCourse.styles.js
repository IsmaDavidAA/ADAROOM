import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  margin: 9rem 0rem 2rem 4rem;
  padding: 0rem 2rem 0rem 0rem;
  font-size: var(--letraEstandar);
  

  @media only screen and (max-width: 700px) and (min-width: 550px) {
    margin: 88px 30px 14px 30px;
    padding: 0rem 0rem 0rem 0rem;
    flex-direction: column;
  }
  @media only screen and (max-width: 550px) {
    margin: 88px 0rem 14px 0rem;
    padding: 0rem 0rem 0rem 0rem;
    flex-direction: column;
  }
`;
export const CardContainer = styled.div`
  padding: 0px 15px 0px 15px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media only screen and (max-width: 700px) {
    padding: 15px 15px 0px 15px;
  }
`;
export const ImageC = styled.img`
  max-width: 300px;
  min-width: 300px;
  min-height: 260px;
  max-height: 260px;
  margin-top: 30px;

  @media only screen and (max-width: 700px) and (min-width: 550px) {
    width: 100%;
    max-width: 450px;
    min-width: 450px;
    min-height: 280px;
    max-height: 280px;
    align-self: center;
  }

  @media only screen and (max-width: 550px) {
    padding-top: 30px;
    align-self: center;
  }
`;
export const Course = styled.div`
  font-weight: bold;
  padding-bottom: 18px;
  margin-left: 10px;
`;
export const Institution = styled.div`
  color: var(--plomo);
  padding-bottom: 18px;
  margin-left: 10px;
`;
export const Inscribed = styled.div`
  color: var(--black);
  font-weight: bold;
  padding-bottom: 18px;
  margin-left: 10px;
`;
export const InscribedState = styled.div`
  color: var(--blueAgua);
  font-size: var(--letraMediana);
  align-self: flex-end;
  margin-left: 10px;
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
