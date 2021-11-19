var React = require('react');
var Header = require('../shared/header');
var Footer = require('../shared/footer');

function Descricao() {
    return (
        <>
            <html>
                <head>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                </head>
                <body>
                    <div className="container">
                    <Header></Header>
                    <div>Tela de Descrição</div>
                    <Footer></Footer>
                    </div>
                </body>
            </html>
        </>
    )
}

module.exports = Descricao;