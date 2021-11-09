import React, { useContext, useEffect, useState } from "react";
import Listas from "../../components/Listas";
import { AuthContext } from "../../Context";
import { apiSettings } from "../../services/services";
import { Contenedor, Texto, Texto2 } from "./VistaMisCursos.styles";


const VistaMisCursos = () => {
  
  //const {currentUser} = useContext(AuthContext);
    //if(currentUser){  //currentUser.uid
        //return 
    //}


  const [cursos, setCursos] = useState([]);
  const [state, setState] = useState(false);
    
  const fetchInscripciones = async () => {
    if (!state) {
      const temp = await apiSettings.getInscripciones();
      setState(true);
      setCursos(temp);
      console.log(cursos);
    }
  };

  useEffect(() => {
    fetchInscripciones();
  }, [cursos]);

  
  
  
  if(cursos ==! [] ){
    return (    
        <Contenedor>
        <Texto>Todos mis cursos </Texto>
        <Texto2>No tienes cursos registrados </Texto2>
        
            
        
        </Contenedor>
    
  );
  
  }else{
    return(
      <Contenedor>
        <Texto>Todos mis cursos </Texto>
        
            <Listas datos={cursos} />
        
        </Contenedor>
    );
  }
};

export default VistaMisCursos;