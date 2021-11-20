var React = require('react');

function Configurations(props) {
    return (
        <div className="container">
            <h1 className="text-center">Configurações do Sistema</h1>

            <form action="/updateconfig" method="POST">
                <div className="form-group">
                    <label for="homeName">Home</label>
                    <input type="text" name="homeName" className="form-control" value={props.homeName} />

                    <label for="descriptionName">Descrição</label>
                    <input type="text" name="descriptionName" className="form-control" value={props.descriptionName} />

                    <label for="peopleName">People</label>
                    <input type="text" name="peopleName" className="form-control" value={props.peopleName} />

                    <label for="contactName">Contatos</label>
                    <input type="text" name="contactName" className="form-control" value={props.contactName} />

                    <label for="technologiesName">Tecnologias</label>
                    <input type="text" name="technologiesName" className="form-control" value={props.technologiesName} />
                </div>

                <button type="submit" className="btn btn-primary m-4">Atualizar</button>
            </form>

            <form action="/resetconfig" method="GET">
                <button type="submit" className="btn btn-secondary">Restaurar Valores</button>
            </form>
        </div>
    )
}

module.exports = Configurations;