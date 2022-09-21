import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id:1,
        name:"Mario",
        horoscopo:"Libra",
    },
    {
        id:2,
        name:"Alex",
        horoscopo:"Leo",
    },
    {
        id:3,
        name:"M.Ángeles",
        horoscopo:"Tauro",
    },
    {
        id:4,
        name:"Juanan",
        horoscopo:"Géminis",
    },
    {
        id:5,
        name:"Marta",
        horoscopo:"Cáncer",
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

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con id '${id}'?`);
        if (isDelete) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
        } else {
            return;
        }
    };

    return (
        <div>
            <h2>CRUD APP</h2>
            <article className="grid-1-2">
                <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}></CrudForm>
                <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}></CrudTable>
            </article>
        </div>
    );
};

export default CrudApp
