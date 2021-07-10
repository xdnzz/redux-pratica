import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './style.css'

export default function Header(){
    return(
        
        <header className="container">
            <Link to="/">
            <img className="logo" src={logo} alt="logo"/>
            </Link>

            <Link className="reserva" to="/reservas">
                <div>
                    <strong>Minhas Reservas</strong>
                    <span>0 reservas</span>
                </div>
            </Link>
          
        </header>
    )
}