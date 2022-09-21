import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id:1,
        name:"Mario",
        constellation:"Libra",
    },
    {
        id:2,
        name:"Alex",
        constellation:"Leo",
    },
    {
        id:3,
        name:"M.Ángeles",
        constellation:"Tauro",
    },
    {
        id:4,
        name:"Juanan",
        constellation:"Géminis",
    },
    {
        id:5,
        name:"Marta",
        constellation:"Cáncer",
    },
];

const CrudApp = () => {
    const [db, setDb] = useState(initialDb)
    return (
        <div>
            <h2>CRUD APP</h2>
            <CrudForm></CrudForm>
            <CrudTable data={db}></CrudTable>
        </div>
    );
};

export default CrudApp
