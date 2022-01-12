import React from "react";
import logo from '../../presets/logo.jpg';
import { Link } from 'react-router-dom';


function WithTokenNavbar() {

    return (
        <nav className="navbar navbar-dark bg-dark pb-1">
            <div className="container row-fluid spacing" >

                <nav className="nav nav-tabs mb-0 col-sm-8" id='main-bar'>
                    <a className="navbar-brand ms-2 pt-4 pb-0 App-logo" href="/#">
                        <img src={logo} alt="logo" width="72" height="69" id='logo' />
                    </a>
                    <a className="nav-link menu-tittle text-center active" aria-current="page" href="/#">Inicio</a>
                    <a className="nav-link menu-tittle text-center" href="/#">¿Quiénes somos?</a>
                    <a className="nav-link menu-tittle text-center" >Administrador<br></br>de<br></br>usuarios</a>
                    <a className="nav-link text-center menu-tittle" href="/#">Contacto</a>
                </nav>
            </div>
        </nav>
    )
};
export default WithTokenNavbar;