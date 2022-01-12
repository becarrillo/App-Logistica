import React from "react";


const NotFound = () => {

    return (
            <div className="alert alert-info pb-4" role="alert">
                <h4 className="ms-3 p-4">Alerta!  El recurso al que intentas entrar no existe.</h4>
                <span className="badge bg-light text-dark ms-3">
                    <a className="p-2 fs-6 text-secondary" href="./">Ir a la página de inicio</a>
                </span>
            </div>
    );
}
export default NotFound;