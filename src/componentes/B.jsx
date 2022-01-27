import React from 'react';
import PropTypes from 'prop-types';


const B = (props) => {
    console.log(props.conectado);
    let textoEnLinea = '';
    if(props.conectado){
        textoEnLinea = 'Contacto en linea';
    }
    else {
        textoEnLinea = 'Contacto no disponible';
    }
    return (
        <div>
            <p>{textoEnLinea}</p>
        </div>
    );
};


B.propTypes = {
    conectado: PropTypes.bool,
};


export default B;
