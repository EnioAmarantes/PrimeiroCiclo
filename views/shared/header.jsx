var React = require('react');

function Header() {
    return (
        <>
            <header class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li class="nav-item"><a href="/" class="nav-link" aria-current="page">Home</a></li>
                    <li class="nav-item"><a href="/description" class="nav-link">Descrição</a></li>
                    <li class="nav-item"><a href="/peoples" class="nav-link">Pessoas</a></li>
                    <li class="nav-item"><a href="/contacts" class="nav-link">Contatos</a></li>
                    <li class="nav-item"><a href="/technologies" class="nav-link">Tecnologias</a></li>
                    <li class="nav-item"><a href="/configurations" class="nav-link">Configurações</a></li>
                </ul>

                <div class="col-md-3 text-end">
                    <button type="button" class="btn btn-outline-primary me-2">Login</button>
                </div>
            </header>
        </>
    )
}

module.exports = Header;