var React = require('react');

function Menu(props) {
    return (
        <>
        <img src="./images/adLogoMini.png" />
            <ul class="nav nav-pills">
                <li class="nav-item"><a href="/" class="nav-link" aria-current="page">{props.homeName}</a></li>
                <li class="nav-item"><a href="/description" class="nav-link">{props.descriptionName}</a></li>
                <li class="nav-item"><a href="/peoples" class="nav-link">{props.peopleName}</a></li>
                <li class="nav-item"><a href="/contacts" class="nav-link">{props.contactName}</a></li>
                <li class="nav-item"><a href="/technologies" class="nav-link">{props.technologiesName}</a></li>
                <li class="nav-item"><a href="/configurations" class="nav-link">Configurações</a></li>
            </ul>
        </>
    )
}

module.exports = Menu;