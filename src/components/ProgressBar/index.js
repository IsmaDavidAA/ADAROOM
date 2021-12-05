import React from "react";
import { ParentDiv, ChildDiv, ProgressText } from "./ProgressBar.styles";
const progressBar = ({ progress }) => {
  const Parentdiv = {
    height: "30px",
    width: "420px",
    maxWidth: "100%",
    backgroundColor: "var(--plomoAgua)",
    borderRadius: 5,
    alignSelf: "center",
  };

  const Childdiv = {
    height: "30px",
    width: `${progress}%`,
    backgroundColor: "#48D1CC",
    borderRadius: 5,
    textAlign: "right",
  };

  const progresstext = {
    fontSize: "18px",
    color: "black",
    fontWeight: 700,
  };

  return (
    <ParentDiv>
      <ChildDiv style={Childdiv}>
        <ProgressText style={progresstext}>{`${progress}%`}</ProgressText>
      </ChildDiv>
    </ParentDiv>
  );
};

export default progressBar;
