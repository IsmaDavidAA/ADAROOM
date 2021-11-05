import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
const InscritoLink = ({ loggedIn, inscrito }) => {
  if (!loggedIn) {
    return (
      <Link to={`/login`}>
        <p>Inscribirme</p>
      </Link>
    );
  } else if (inscrito) {
    return (
      <Link to={`/`}>
        <p>Me doy de baja</p>
      </Link>
    );
  } else {
    return (
      <Link to={`/cursos`}>
        <p>Inscribirme</p>
      </Link>
    );
  }
};
export default InscritoLink;
