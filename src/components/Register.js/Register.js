import React from "react";


class Register extends React.Component {

    constructor(props) {
        super(props);
    };
    render() {
        // Modal
        return (
            <>
                <div class="input-group mb-3 p-5">
                    <legend className="mb-3 text-center">Registro</legend>
                    <span className="input-group-text" id="inputGroup-sizing-default">1er nombre</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    <span class="input-group-text" id="inputGroup-sizing-default2">2do nombre</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default2" />
                </div>
            </>
        )
    }
};

export default Register;