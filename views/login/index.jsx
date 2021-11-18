var React = require('react');
var Resumo = require('./resumo');
var FormLogin = require('./formLogin');

function HomeLogin(){
    return <>
        <Resumo></Resumo>
        <FormLogin></FormLogin>
    </>
}

module.exports = HomeLogin;