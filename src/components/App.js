import { useState, useEffect } from 'react';
import fetchAdalaber from '../services/api';
import ls from '../services/localstorage';

import '../styles/App.scss';

function App() {
  // VARIABLES ESTADO
  const [adalabers, setAdalabers] = useState([]);
  const [addAdalaber, setaddAdalaber] = useState({
    name: '',
    counselor: '',
    speciality: '',
  });

  // USEEFFECT

  useEffect(() => {
    fetchAdalaber().then((data) => {
      setAdalabers(data.results);
    });
  }, []);

  // FUNCIONES HANDLER

  const handleCollect = (event) => {
    event.preventDefault();
    setaddAdalaber({ ...addAdalaber, [event.target.name]: event.target.value });
    console.log(addAdalaber);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    adalabers.push(addAdalaber);
    setAdalabers([...adalabers]);
    console.log(adalabers);
    setaddAdalaber({
      name: '',
      counselor: '',
      speciality: '',
    });
  };
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
        <form action="" className="header__form">
          <div className="labelInput">
            <label htmlFor="counselor"> Nombre: </label>
            <input
              type="text"
              className="add__form--input"
              name="counselor"
              id="counselor"
              onChange={handleCollect}
              value={addAdalaber.counselor}
            />
          </div>
          <div className="labelInput">
            <label htmlFor="counselor"> Escoge una tutora: </label>
            <input
              type="text"
              className="add__form--input"
              name="counselor"
              id="counselor"
              onChange={handleCollect}
              value={addAdalaber.counselor}
            />
          </div>
        </form>
      </header>
      <main className="main">
        <section className="table">
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
        </section>
        <section className="add">
          <h2 className="add__title">Añadir una Adalaber</h2>
          <form className="form" action="">
            <div className="labelInput">
              <label htmlFor="name"> Nombre: </label>
              <input
                type="text"
                className="add__form--input"
                name="name"
                id="name"
                onChange={handleCollect}
                value={addAdalaber.name}
              />
            </div>
            <div className="labelInput">
              <label htmlFor="counselor"> Tutora: </label>
              <input
                type="text"
                className="add__form--input"
                name="counselor"
                id="counselor"
                onChange={handleCollect}
                value={addAdalaber.counselor}
              />
            </div>
            <div className="labelInput">
              <label htmlFor="speciality"> Especialidad: </label>
              <input
                type="text"
                className="add__form--input"
                name="speciality"
                id="speciality"
                onChange={handleCollect}
                value={addAdalaber.speciality}
              />
            </div>
            <input
              type="submit"
              className="add__form--input"
              value="Añadir una nueva Adalaber"
              onClick={handleAdd}
            />
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
