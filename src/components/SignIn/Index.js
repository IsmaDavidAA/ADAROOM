import React from 'react'
import { ContFormulario, Boton, CuadroLogin, Formulario, InputContraseña, InputCorreo, Titulo, Titulo2, } from './SignIn.Styled'
import { Link } from 'react-router-dom'
import { Email } from '../PiePagina/PiePagina.styles'

const Index = (props) => {
    return (
        <CuadroLogin>
         <Titulo>¡ Inicia sesión con tu cuenta de AdaRoom!</Titulo>
         <Titulo2>
             Por favor llene el siguiente formulario para <br/>
             Validar su ingreso
         </Titulo2>
         <ContFormulario>
        <Formulario onSubmit={props.handleLogin}>
          
            <InputCorreo name="email" type="email" placeholder="Email" />
          
            <InputContraseña name="password"  type="password" placeholder="Contraseña" />
        

          <Boton type="submit"> Iniciar Sesión </Boton>

         
        </Formulario>
        </ContFormulario>
        
        </CuadroLogin>
    )
}

export default Index
