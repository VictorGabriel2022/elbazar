import React from 'react';

import ComponenteMenu from './menu/ComponenteMenu';

import logo from './logo.svg';

import './App.css';

import ComponentePrincipal from './principal/ComponentePrincipal';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import rutas from './route-config';

function App() {

  return (

    <div className='container-fluid'>




      {/* son las rutas del menu principal */}

      <BrowserRouter>

        {/* este es el menu principal */}

        <ComponenteMenu />

        <Routes>

          {/* <Route path="/" element={<ComponentePrincipal/>} />

<Route path="/autores" element={<ComponenteListaAutor/>} />

<Route path="/libros" element={<ComponenteListaLibro />} /> */}

          {

            rutas.map(ruta =>

              <Route key={ruta.path} path={ruta.path} element={<ruta.componente />} />)

          }

        </Routes>

      </BrowserRouter>



    </div>

  );

}

export default App;
