import { useState, useEffect } from 'react';
import fetchAdalaber from '../services/api';
import ls from '../services/localstorage';

import '../styles/App.scss';

function App() {
  // VARIABLES ESTADO
  const [adalabers, setAdalabers] = useState([]);

  // USEEFFECT

  useEffect(() => {
    fetchAdalaber().then((data) => {
      setAdalabers(data.results);
    });
  }, []);

  console.log(adalabers);

  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  const renderAdalabers = () => {
    return adalabers.map((adalaber) => {
      return (
        <tr key={adalaber.id}>
          <td>{adalaber.name}</td>
          <td>{adalaber.counselor}</td>
          <td>{adalaber.speciality}</td>
        </tr>
      );
    });
  };

  // HTML EN EL RETURN

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Adalabers</h1>
      </header>
      <main className="main">
        <table className="table">
          <thead className="table__head">
            <tr>
              <th>Nombre</th>
              <th>Tutora</th>
              <th>Especialidad</th>
            </tr>
          </thead>
          <tbody className="table__body">{renderAdalabers()}</tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
