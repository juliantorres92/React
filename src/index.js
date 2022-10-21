import React from 'react';
import ReactDOM from 'react-dom/client';

//Compornentes Nuevos se integran aquí
import { SeccionHeader } from "./SeccionHeader";import { FormularioLogin } from "./SeccionLogin";
//import { SeccionInfo } from "./SeccionInfo";
//import { SeccionFormulario} from "./SeccionFormulario";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SeccionHeader />
    <FormularioLogin />
   

  </React.StrictMode>
);

