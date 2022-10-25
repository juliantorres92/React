import React from 'react';
import ReactDOM from 'react-dom/client';

//Compornentes Nuevos se integran aquí
//import { SeccionHeader } from "./SeccionHeader";
//import { FormularioLogin } from "./SeccionLogin";
//import { SeccionInfo } from "./SeccionInfo";
//import { SeccionFormulario} from "./SeccionFormulario";

//PROYECTO
import { SeccionHeaderVA } from "./Components/Vista Administrativa/Header"
import { SeccionBodyListaProductosVA } from "./Components/Vista Administrativa/BodyListaProductos"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SeccionHeaderVA />
    <SeccionBodyListaProductosVA/>
    

  </React.StrictMode>
);

