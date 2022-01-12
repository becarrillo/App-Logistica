import React from "react";
import './Login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <form className="mt-3">
                <div className="input-group mb-2 row" id="inputGroup1">
                    <label className="form-label main-login-label mb-1 col-sm-3" htmlFor="userInput">Usuario</label>
                    <input type="text" className="form-control col-sm-9" id="userInput" placeholder="username registrado" />
                </div>

                <div className="input-group mb-2 row" id="inputGroup2">
                    <label className="form-label main-login-label col-sm-3" htmlFor="passwordInput">Contraseña</label>
                    <input type="password" className="form-control col-sm-5 mb-2" id="passwordInput" placeholder="*****************" />
                    <div class="form-check col-sm-4 ms-2 mb-3" id="formCheck">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Mostrar contraseña
                        </label>
                    </div>
                </div>

                <span className="ms-2 mt-2"><a href="/#">¿Olvidaste tu contraseña?</a></span>

                <div className="container-fluid ms-1 row-fluid" id="submitContainer">
                    <input type="submit" className="btn btn-success btn-sm col-sm-12 ps-3 pe-5 me-2" value="Acceder" id="submitInput" />
                </div>
                
            </form>
        );
    };
};
export default Login;