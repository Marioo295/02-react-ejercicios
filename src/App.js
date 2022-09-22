import React from 'react';
import CrudApp from "./components/CrudApp"
import CrudApi from './components/CrudApi';

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr></hr>
      <CrudApi></CrudApi>
      <hr></hr>
      <CrudApp></CrudApp>

    </>
  );
}

export default App;