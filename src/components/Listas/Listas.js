import React, { useState } from "react";
import Lista from "./Lista/Lista";
//import Imagen1 from './imagen1.png';

const Listas = () => {
  const [listas, setListas] = useState([
    {
      id: 1,
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/adaroom-3619c.appspot.com/o/DW.png?alt=media&token=662d3ca2-94fa-4a3d-a0a4-806a7229a117",
      nombre: "HERRAMIENTAS DE BIG DATA",
      autor: "Universidad Mayor De San Simon",
      cantIns: "10 Inscritos",
    },
    {
      id: 2,
      imagen: [require("./imagen2.png").default],
      nombre: "INGLES BASICO",
      autor: "Universidad Mayor De Sa Andres",
      cantIns: "0 Inscritos",
    },
    {
      id: 3,
      imagen: "imagen3",
      nombre: "PROGRAMCACION PARA PRINCIPIANTES",
      autor: "Universidad Mayor De Sa Andres",
      cantIns: "7 Inscritos",
    },
    {
      id: 4,
      imagen: "imagen4",
      nombre: "MATEMÁTICA BÁSICA",
      autor: "Universidad Mayor De Sa Francisco Xavier",
      cantIns: "3 Inscritos",
    },
  ]);

  return (
    <div className="row">
      {listas.map((lista) => {
        return (
          <Lista
            nombre={lista.nombre}
            imagen={lista.imagen}
            autor={lista.autor}
            cantIns={lista.cantIns}
          />
        );
      })}
    </div>
  );
};

export default Listas;
