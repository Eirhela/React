import React, { Component } from 'react';
import PropTypes from 'prop-types';
import B from './B';
import '../App.css';


class Contacto extends Component {
    constructor(props){
        super(props);
            this.state = {
                nombre: 'Nombre',
                apellido: 'Apellido',
                email: 'email@email.em',
                conectado: false,
            }
    }
    render() {
        return (
            <div className='Acontainer'>
                <p>Nombre: {this.state.nombre}</p>  
                <p>Apellido: {this.state.apellido}</p>
                <p>Email: {this.state.email}</p>
                <B conectado={this.state.conectado}></B>
                <button onClick={this.cambiarEstado}>Cambiar estado</button>  
            </div>
        );
    }
    cambiarEstado=() =>{
        if(this.state.conectado === false) {
            this.setState((prevState)=>(
                {
                conectado: true,
                }
            ))
        }
        else {
            this.setState((prevState)=>(
                {
                conectado: false,
                }
            ))
        }
    }
}


Contacto.propTypes = {
    conectado: PropTypes.bool,
};


export default Contacto;
