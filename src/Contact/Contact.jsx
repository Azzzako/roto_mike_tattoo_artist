import React from "react";
import './Contact.css'

export const Contact = () => {
    return (
        <div id="contact_component" className="contact_component">
            <div className="form_container">
                <form>
                    <h1>Contacta con nosotros!</h1>

                    <div className="input_container">
                        
                        <label htmlFor="nombre">Nombre</label>
                        <input type='text' id="nombre" />

                        <label>Asunto</label>
                        <input type='text' />

                        <label>Correo electronico</label>
                        <input type='text' />


                        <label>Telefono</label>

                        <input type='text' />

                        <label>Cuentanos</label>
                        <textarea />
                        
                    </div>


                </form>
            </div>
        </div>
    )
}
