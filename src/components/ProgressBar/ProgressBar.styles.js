import styled from "styled-components";

export const ParentDiv = styled.div`
  height: 27px;
  width: 420px;
  max-width: 100%;
  background: var(--plomoAgua);
  border-radius: 5px;
  align-self: left;
  @media only screen and (max-width: 750px) {
    width: 320px;
    align-self: center;
  }
`;
export const ChildDiv = styled.div`
  height: 27px;
  width: ${(props) => props.progress}%;
  background: #48d1cc;
  border-radius: 5px;
  text-align: right;
`;

export const ProgressText = styled.span`
  font-size: 18px;
  color: black;
  font-weight: 700;
  vertical-aling: top;
`;
