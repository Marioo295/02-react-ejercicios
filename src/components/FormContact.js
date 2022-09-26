import React from 'react'
import { useForm } from '../hooks/useForm';

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
};

const validationsForm = (form) => {
    let errors = {};

    if (!form.name.trim()) {
        errors.name = "El campo 'Nombre' es requerido";
    }

    return errors;
};

let styles = {
    fontWeight: "bold",
    color: "#dc3534",
}

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
                {errors.name && <p style={styles}>{errors.name}</p>}
                <input 
                    type="email"
                    name="email" 
                    placeholder="Escribe tu email" 
                    onBlur={handleBlur} 
                    onChange={handleChange} 
                    value={form.email} 
                    required>
                </input>
                {errors.email && <p style={styles}>{errors.email}</p>}
                <input 
                    type="text"
                    name="subject" 
                    placeholder="Asunto a tratar" 
                    onBlur={handleBlur} 
                    onChange={handleChange} 
                    value={form.subject} 
                    required>
                </input>
                {errors.subject && <p style={styles}>{errors.subject}</p>}
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
                {errors.comments && <p style={styles}>{errors.comments}</p>}
                <input
                    type="submit"
                    value="Enviar">
                </input>
            </form>
        </div>
    );
};

export default FormContact