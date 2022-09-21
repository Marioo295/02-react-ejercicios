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
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id=Date.now();
        setDb([...db, data]);
    };

    const updateData = (data) => {
        let newData = db.map((el) => el.id === data.id ? data : el);
        setDb(newData);
    };

    const deleteData = (id) => {};

    return (
        <div>
            <h2>CRUD APP</h2>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}></CrudForm>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}></CrudTable>
        </div>
    );
};

export default CrudApp
