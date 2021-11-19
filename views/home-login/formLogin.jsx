var React = require('react');

function FormLogin() {
    return (
        <div className="align-items-center justify-content-center d-flex">
            <form className="text-center">
                <img src="./images/fisioNetLogo.png" />

                <input className="form-control my-2" type="text" placeholder="Usuário" />
                <div>
                    <input className="form-control my-2" type="password" placeholder="Senha" />
                    <span className="lnr lnr-eye"></span>
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="button">Logar</button>
            </form>
        </div>
    )
}

module.exports = FormLogin;