import React from 'react'
import Cajas from '../Cajas'
const Caja = (props) => {
    return (<>
    {[...props.elements].map((element) => {
     return(
         <Cajas element={props.elements}/>
        
     )
 }
)}


       </>  )
}

export default Caja
