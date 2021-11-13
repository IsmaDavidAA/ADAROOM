import React from "react";
import {
    Contenedor, Texto, Texto2, Texto3
  } from "./MisCursos.styles";
import { apiSettings } from "../../services/services";
  
  
  
  var tieneCursos = true;
  if (1===1) {  //si su arreglo esta vacio 
      tieneCursos = false;
  }
  
  function MisCursos()  {
    apiSettings.getInscripciones("nQeD6bkxychmhBUPAlP2sgJwVPM2");
    return (
      <Contenedor>
          <Texto> Todos mis cursos </Texto>
            <div>
                {tieneCursos? <Texto3>Estudiante con 1 o mas cursos: Aqui se muestran
                                      reutilizar componente Listas
                              </Texto3>
                            :
                              <Texto2>No tiene cursos registrados</Texto2>
                }
            </div>
        
      </Contenedor>
    );
  }
  
  export default MisCursos;
  