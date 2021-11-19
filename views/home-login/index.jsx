var React = require('react');
var Resumo = require('./resumo');
var FormLogin = require('./formLogin');

function HomeLogin() {
    return <>
        <div className="row">
            <div className="col-8 p-0">
                <Resumo></Resumo>
            </div>

            <div className="col-4 p-0">
                <FormLogin className="col-4"></FormLogin>
            </div>
        </div>
    </>
}

module.exports = HomeLogin;