import { Fragment} from 'react';

import {useState} from 'react';
import './formulario.css'



export function FormularioLogin() {

    const[data, setDate] = useState({
        email: "",
        cedula: 0,
        password: ""
    })

    return(
        <Fragment>
        <div id="divlogin">

            <form id="formulario">

        <label>Correo Electronico  
            <input type="email" onChange={(e) => {
                //console.log(e.target.value);
                setDate({ ...data, email:e.target.value });
            }
            }>

            </input>
        </label>

        <br></br>
        <br></br>

        <label>Cédula  
            <input type="number" onChange={ (e)=> {
                setDate({...data, cedula:e.target.value}) //seteo la data, y guardo en cedula lo que esté en el evento.value
            }
            }></input>
        </label>

        <br></br>
        <br></br>

        <label>Contraseña
            <input type="password" onChange={(e)=> { 
                setDate({...data, password: e.target.value})
            }}></input>

        </label>

        <button id="buttonok" onClick={VerInfo}>Verificar Info</button>

        <button id="buttonnot" onClick={VerContraseña}>Ver contraseña</button>
        </form>
        </div>
        </Fragment>
    );


    function VerInfo() {
        //alert("Email escrito: "+ data.email);
        var emailMongo="julian@hotmail.com";
        var ccMongo="2";

        //Comparo

        if (emailMongo===data.email && ccMongo===data.cedula) {
            alert("Email y cedula correctos");
        }
        else{
            alert("Email o cedula incorrectos")
        }

        /*
        function (data,email, data.documento){
            datos que tngo en mongo 
            if email form == email mongo->
        }
        */
    }
    
    function VerContraseña() {
        alert("La contraseña escrita es:" + data.password);
    }
}

