import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
const GeneralLink = ({ link, action, content, paramsLink }) => {
  const made = false;
  return (
    <a params={paramsLink} onClick={action}>
      <p>{content}</p>
    </a>
  );
};
export default GeneralLink;
