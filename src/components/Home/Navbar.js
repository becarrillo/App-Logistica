import React from "react";
import Register from '../Register.js/Register';
import { Link } from 'react-router-dom';
import logo from '../../presets/logo.jpg';


function Navbar() {

    return (
        <nav className="navbar navbar-dark bg-dark pb-1">
            <div className="container row-fluid mt-2 spacing" >
                <nav className="nav nav-tabs mb-0 col-sm-8" id='main-bar'>
                    <a className="navbar-brand ms-2 pt-4 pb-0 App-logo" href="/#">
                        <img src={logo} alt="logo" width="72" height="69" id='logo' />
                    </a>
                    <a className="nav-link menu-tittle text-center active" aria-current="page" href="/#">Inicio</a>
                    <a className="nav-link menu-tittle text-center" href="/#">¿Quiénes somos?</a>
                    <a className="nav-link menu-tittle text-center disabled" >Administrador<br></br>de<br></br>usuarios</a>
                    <a className="nav-link text-center menu-tittle" href="/#">Contacto</a>
                </nav>
                <div className='col-sm-4' id='logup-signin'>
                    <div className='entrance-btns'>
                        <button type="button" className='btn btn-sm btn-warning'>
                            <Link to='/logup' className="text-danger text-decoration-none p-2 p1 mt-0">Regístrate</Link>
                        </button>
                        <small className='ms-4 text-light'>Para poder ingresar tus datos y acceder</small>
                    </div>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;