import React from 'react'
import { useForm } from '../hooks/useForm';

const initialForm = {};
const validationsForm = (form) => {};

const FormContact = () => {
    const{form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm);
    return (
        <div>
            <h2>FORMULARIO DE CONTACTO</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name" 
                    placeholder="Escribe tu nombre" 
                    onBlur={handleBlur} 
                    onChange={handleChange} 
                    value={form.name} 
                    required>
                </input>
                <input 
                    type="email"
                    name="email" 
                    placeholder="Escribe tu email" 
                    onBlur={handleBlur} 
                    onChange={handleChange} 
                    value={form.email} 
                    required>
                </input>
                <input 
                    type="text"
                    name="subject" 
                    placeholder="Asunto a tratar" 
                    onBlur={handleBlur} 
                    onChange={handleChange} 
                    value={form.subject} 
                    required>
                </input>
                <textarea 
                    name="comments" 
                    cols="50" 
                    rows="5" 
                    placeholder="Escribe tus comentarios"
                    onBlur={handleBlur} 
                    onChange={handleChange} 
                    value={form.comments} 
                    required>
                </textarea>
                <input
                    type="submit"
                    value="Enviar">
                </input>
            </form>
        </div>
    );
};

export default FormContact