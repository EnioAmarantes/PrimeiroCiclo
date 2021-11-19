var React = require('react');

function Menu() {
    return (
        <>
            <ul class="nav nav-pills">
                <li class="nav-item"><a href="/" class="nav-link" aria-current="page">Home</a></li>
                <li class="nav-item"><a href="/description" class="nav-link">Descrição</a></li>
                <li class="nav-item"><a href="/peoples" class="nav-link">Pessoas</a></li>
                <li class="nav-item"><a href="/contacts" class="nav-link">Contatos</a></li>
                <li class="nav-item"><a href="/technologies" class="nav-link">Tecnologias</a></li>
                <li class="nav-item"><a href="/configurations" class="nav-link">Configurações</a></li>
            </ul>
        </>
    )
}

module.exports = Menu;