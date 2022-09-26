import React from 'react';
import CrudApp from "./components/CrudApp"
import CrudApi from './components/CrudApi';
import SongSearch from './components/SongSearch';

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr></hr>
      <SongSearch></SongSearch>
      <hr></hr>
      <CrudApi></CrudApi>
      <hr></hr>
      <CrudApp></CrudApp>

    </>
  );
}

export default App;