//Esta sección está construida con un "Fragmento" <>, que se importó de una libreria react. Me permite incluir más de una etiqueta HTML.

//Lo puedo usar asi: <> </>
//O lo puedo usar asi: <Frament></Frament>

//Hojas de estilos
import './info.css';
import logo from './recursos/logo.png';
import { Fragment } from "react";


export function SeccionInfo(){
    return(
    <>  
    <div id="seccioninfo">
        <h3>Información de la tienda</h3>    
        <p>Lorem ipsum dolor sit amet, consectetur adipis, Lorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipis
        </p>

        <img src={logo} alt="logo"></img>

        <h4>Redes Sociales</h4>
        <h5>Instagram</h5>
        <h5>Facebook</h5>
        <h5>Twitter</h5>
        </div>
    </>

    );
}