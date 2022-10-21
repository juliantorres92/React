//Este componente va a tener los elementos necesarios para hacer un formulario

//Aqui integro al componente los estilos css

import { Fragment } from "react";

export function SeccionFormulario(){
    return(
    <>
    
    <div id="seccionFormulario">
    <h2>Formulario</h2>
    <br></br>
    <br></br>
    <p>Nombre</p>
    <input type="text"></input>    
    <p>Apellidos</p>
    <input type="text"></input> 
    <p>Correo</p>
    <input type="text"></input> 
    <p>Telefono</p>
    <input type="text"></input> 
    <br></br>
    <br></br>

    <input type="submit"></input>



    </div>
    </>
);
}