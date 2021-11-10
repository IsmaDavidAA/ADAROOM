import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Text } from "./SuscriberLink.styles";
const GeneralLink = ({ link, action, content, paramsLink }) => {
  const made = false;
  return (
    <Text params={paramsLink} onClick={action} href="#">
      {content}
    </Text>
  );
};
export default GeneralLink;
