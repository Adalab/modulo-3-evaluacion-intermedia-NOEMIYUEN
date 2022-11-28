import { useState, useEffect } from 'react';
import fetchAdalaber from '../services/api';
import ls from '../services/localstorage';

import '../styles/App.scss';

function App() {
  // VARIABLES ESTADO
  const [adalabers, setAdalabers] = useState([]);
  const [search, setSearch] = useState({
    name: '',
    counselor: '',
  });
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
  };

  const handleAdd = (event) => {
    event.preventDefault();
    adalabers.push(addAdalaber);
    setAdalabers([...adalabers]);
    setaddAdalaber({
      name: '',
      counselor: '',
      speciality: '',
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch({ ...search, [event.target.name]: event.target.value });
    console.log(search);
  };
  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  const renderAdalabers = adalabers
    .filter((element) =>
      element.name.toLowerCase().includes(search.name.toLocaleLowerCase())
    )
    .filter((element2) =>
      element2.console
        .toLowerCase()
        .includes(search.counselor.toLocaleLowerCase())
    )
    .map((adalaber) => {
      return (
        <tr key={adalaber.id}>
          <td>{adalaber.name}</td>
          <td>{adalaber.counselor}</td>
          <td>{adalaber.speciality}</td>
        </tr>
      );
    });

  // HTML EN EL RETURN

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Adalabers</h1>
        <form action="" className="searchForm">
          <div className="labelInput">
            <label htmlFor="counselorAdd"> Nombre: </label>
            <input
              type="search"
              className="searchForm__element"
              name="name"
              id="counselorAdd"
              onChange={handleSearch}
              value={search.name}
            />
          </div>
          <div className="labelInput">
            <label htmlFor="counselor"> Escoge una tutora: </label>
            <select
              className="searchForm__element"
              type="select"
              name="counselor"
              /* onChange={handleCollect}
              value={search.counselor} */
            >
              <option value="all">Cualquiera</option>
              <option value="Yanelis">Yanelis</option>
              <option value="Dayana">Dayana</option>
              <option value="Joey">Joey</option>
              <option value="Iván">Iván</option>
            </select>
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
            <tbody className="table__body">{renderAdalabers}</tbody>
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
