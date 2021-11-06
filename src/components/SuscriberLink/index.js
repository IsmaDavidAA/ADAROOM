import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const GeneralLink = ({ link, action, content, paramsLink }) => {
  return (
    <Link to={link} params={paramsLink} onClick={action}>
      <p>{content}</p>
    </Link>
  );
};
export default GeneralLink;
