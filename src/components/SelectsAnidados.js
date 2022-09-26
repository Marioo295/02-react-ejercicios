import React, { useState } from 'react';
import SelectList from './SelectList';

const SelectsAnidados = () => {
    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");

    const TOKEN = "4b401b9f-0e0d-4a7b-a054-5b657addba8e";

    return (
        <div>
            <h2>SELECTS ANIDADOS</h2>
            <h3>México</h3>
            <SelectList title="estado" url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`} handleChange={(e) => {setState(e.target.value)}}></SelectList>
            {state && (<SelectList title="municipios" url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} handleChange={(e) => {setTown(e.target.value)}}></SelectList>)}
            {town && (<SelectList title="colonia" url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`} handleChange={(e) => {setSuburb(e.target.value)}}></SelectList>)}
            <pre>
                <code>
                    {state} - {town} - {suburb}
                </code>
            </pre>
        </div>
    );
};

export default SelectsAnidados