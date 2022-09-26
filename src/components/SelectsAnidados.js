import React, { useState } from 'react';
import SelectList from './SelectList';

const SelectsAnidados = () => {
    const [state, setState] = useState("");
    const [town, setTown] = useState("");
    const [suburb, setSuburb] = useState("");

    return (
        <div>
            <h2>SELECTS ANIDADOS</h2>
            <h3>México</h3>
            <SelectList title="estados" url="" handleChange={(e) => {setState(e.target.value)}}></SelectList>
            {state && (<SelectList title="municipios" url="" handleChange={(e) => {setTown(e.target.value)}}></SelectList>)}
            {town && (<SelectList title="colonias" url="" handleChange={(e) => {setSuburb(e.target.value)}}></SelectList>)}
            <pre>
                <code>
                    {state} - {town} - {suburb}
                </code>
            </pre>
        </div>
    );
};

export default SelectsAnidados