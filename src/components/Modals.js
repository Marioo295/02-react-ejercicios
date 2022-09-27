import React from 'react'
import Modal from './Modal'

const Modals = () => {
    return (
        <div>
            <h2>MODALES</h2>
            <button>Modal 1</button>
            <Modal>
                <h3>Modal 1</h3>
                <p>Hola este es el contenido de mi modal 1</p>
                <img src="https://placeimg.com/400/400/animals" alt="Animals"></img>
            </Modal>
            <button>Modal 2</button>
            <Modal>
                <h3>Otro modal</h3>
                <p>Lorem ipsum</p>
                <img src="https://placeimg.com/400/400/nature" alt="Nature"></img>
            </Modal>
        </div>
    );
};

export default Modals;