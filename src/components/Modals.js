import React from 'react'
import { useModal } from '../hooks/useModal';
import Modal from './Modal'
import FormContact from './FormContact'
import ModalPortal from './ModalPortal';

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenModalContact, openModalContact, closeModalContact] = useModal(false);
    const [isOpenModal, openModalPortal, closeModalPortal] = useModal(false);

    return (
        <div>
            <h2>MODALES</h2>
            <button onClick={openModal1}>1º modal</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Animales</h3>
                <p>Podemos ver animales muy bonitos</p>
                <img src="https://placeimg.com/400/400/animals" alt="Animals"></img>
            </Modal>
            <button onClick={openModal2}>2º modal</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Paisajes</h3>
                <p>Podemos ver paisajes muy bonitos</p>
                <img src="https://placeimg.com/400/400/nature" alt="Nature"></img>
            </Modal>
            <button onClick={openModalContact}>Modal de contacto</button>
            <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
                <FormContact></FormContact>
            </Modal>
            <button onClick={openModalPortal}>Modal en portal</button>
            <ModalPortal isOpen={isOpenModal} closeModal={closeModalPortal}>
                <h3>Modal en portal</h3>
                <p>Este es el contenido de un modal que carga en otro nodo del DOM diferente a donde carga
                    nuestra app de React, gracias a un React Portal.
                </p>
                <img src="https://placeimg.com/400/400/tech" alt="Tech"></img>
            </ModalPortal>
        </div>
    );
};

export default Modals;