var React = require('react');
var Menu = require('./menu');

function Header(props) {
    return (
        <>
            <header class="d-flex justify-content-center py-3 border-bottom">
                <Menu
                    userName={props.userName}
                    userLoged={props.userLoged}
                    homeName={props.homeName}
                    descriptionName={props.descriptionName}
                    peopleName={props.peopleName}
                    contactName={props.contactName}
                    technologiesName={props.technologiesName} />

                <div class="col-md-3 text-end">
                    {
                        props.userLoged
                            ?
                            <div>
                                <span className="m-4"><strong>Usuário Logado:</strong> {props.userName}</span>
                                <a href="/logout" class="btn btn-outline-primary me-2">LogOut</a>
                            </div>
                            :
                            <></>
                    }
                </div>
            </header>
        </>
    )
}

module.exports = Header;