import { useState, useEffect } from 'react';
import fetchWord from '../services/api';
import ls from '../services/localstorage';

import '../styles/App.scss';

function App() {
  // VARIABLES ESTADO

  // USEEFFECT

  /*   useEffect(() => {

    fetchWord().then((data) => {
      const word = data.word;
      setWord(word);
    });
  }, []);
*/
  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Adalabers</h1>
      </header>
      <main className="main">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tutora</th>
              <th>Especialidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MariCarmen</td>
              <td>Yanelis</td>
              <td>Python</td>
            </tr>
            <tr>
              <td>Amparo</td>
              <td>Dayana</td>
              <td>IA</td>
            </tr>
            <tr>
              <td>Escandia</td>
              <td>Iván</td>
              <td>3D graphics</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
