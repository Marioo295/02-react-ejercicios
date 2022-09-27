import React from 'react'
import { useModal } from '../hooks/useModal';
import Modal from './Modal'

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);

    return (
        <div>
            <h2>MODALES</h2>
            <button>Primer modal</button>
            <Modal>
                <h3>Modal 1</h3>
                <p>Podemos ver animales muy bonitos</p>
                <img src="https://placeimg.com/400/400/animals" alt="Animals"></img>
            </Modal>
            <button>Segundo modal</button>
            {/* <Modal>
                <h3>Otro modal</h3>
                <p>Lorem ipsum</p>
                <img src="https://placeimg.com/400/400/nature" alt="Nature"></img>
            </Modal> */}
        </div>
    );
};

export default Modals;