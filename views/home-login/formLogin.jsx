var React = require('react');

function FormLogin() {
    return (
        <div className="align-items-center justify-content-center d-flex my-5">
            <form action="/login" method="POST" className="text-center">
                <img src="./images/adLogo.png" className="mb-3"/>

                <input name="user" className="form-control my-2" type="text" placeholder="Usuário" />
                <div>
                    <input name="password" className="form-control my-2" type="password" placeholder="Senha" />
                    <span className="lnr lnr-eye"></span>
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Logar</button>
            </form>
        </div>
    )
}

module.exports = FormLogin;