var React = require('react');
var Footer = require('./footer');

function ErrorExpected(props) {
    return (
        <>
            <html>
                <head>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                </head>
                <body>
                    <div className="container-fluid text-center justify-content-center">
                        <img src="./images/atentionIcon.png" />
                        <h1 className="m-3">Eita, Algo não funcionou como esperado</h1>
                        <h2 className="my-5">{props.errorMessage}</h2>
                        <a href="/">Voltar para a página inicial</a>
                    </div>
                    <Footer></Footer>
                </body>
            </html>
        </>

    )
}

module.exports = ErrorExpected;