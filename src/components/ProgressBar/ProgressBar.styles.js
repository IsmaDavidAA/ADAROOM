import styled from "styled-components";

export const ParentDiv = styled.div`
  height: 30px;
  width: 420px;
  max-width: 100%;
  background: var(--plomoAgua);
  border-radius: 5;
  align-self: left;
  @media only screen and (max-width: 750px) {
    width: 320px;
    align-self: center;
  }
`;
export const ChildDiv = styled.div`
  height: 30px;
  width: ${(props) => props.progress}%;
  background: #48d1cc;
  border-radius: 5;
  text-align: right;
`;

export const ProgressText = styled.span`
  font-size: 18px;
  color: black;
  font-weight: 700;
`;
