var React = require('react');

function Tecnologies() {
    return (
        <div className="container">
            <h1 className="text-center">Tecnologias utilizadas neste software</h1>

            <div className="row">

                <div className="card col-5 my-1 m-3" >
                    <div className="card-body">
                        <h2><img src="https://img.icons8.com/office/40/000000/react.png"/> React</h2>
                        <div className="card-subtitle mb-2 text-muted">Versão 17.0.2</div>
                        <p className="card-text">
                            React é uma biblioteca JavaScript front-end gratuita e de código aberto para a construção de interfaces de usuário com base em componentes de IU. É mantido pela Meta e uma comunidade de desenvolvedores individuais e empresas. O React pode ser usado como base no desenvolvimento de aplicativos de página única ou móveis.
                        </p>
                    </div>
                </div>

                <div className="card col-5 my-1 m-3" >
                    <div className="card-body">
                        <h2><img src="https://img.icons8.com/color/48/000000/google-firebase-console.png"/> Firebase</h2>
                        <div className="card-subtitle mb-2 text-muted">Versão 8.9.0</div>
                        <p className="card-text">
                            Firebase é uma plataforma desenvolvida pelo Google para a criação de aplicativos móveis e da web. Era originalmente uma empresa independente fundada em 2011. Em 2014, o Google adquiriu a plataforma e agora é sua oferta principal para o desenvolvimento de aplicativos.
                        </p>
                    </div>
                </div>

                <div className="card col-5 my-1 m-3" >
                    <div className="card-body">
                        <h2><img src="https://img.icons8.com/color/48/000000/redux.png"/> Redux</h2>
                        <div className="card-subtitle mb-2 text-muted">Versão 4.1.1</div>
                        <p className="card-text">
                            Redux é uma biblioteca JavaScript de código aberto para gerenciar e centralizar o estado do aplicativo. É mais comumente usado com bibliotecas como React ou Angular para construir interfaces de usuário. Semelhante à arquitetura Flux do Facebook, foi criado por Dan Abramov e Andrew Clark.
                        </p>
                    </div>
                </div>

                <div className="card col-5 my-1 m-3" >
                    <div className="card-body">
                        <h2><img src="https://img.icons8.com/color/48/000000/bootstrap.png"/> Bootstrap</h2>
                        <div className="card-subtitle mb-2 text-muted">Versão 5.0.2</div>
                        <p className="card-text">
                            Bootstrap é uma estrutura CSS gratuita e de código aberto voltada para o desenvolvimento web front-end responsivo e móvel. Ele contém modelos de design baseados em CSS e JavaScript para tipografia, formulários, botões, navegação e outros componentes de interface.
                        </p>
                    </div>
                </div>

                <div className="card col-5 my-1 m-3" >
                    <div className="card-body">
                        <h2><img src="https://img.icons8.com/color/48/000000/source-code.png"/> Ajax</h2>
                        <div className="card-subtitle mb-2 text-muted">Versão 3.5.1</div>
                        <p className="card-text">
                            Ajax é um conjunto de técnicas de desenvolvimento da web que usa várias tecnologias da web no lado do cliente para criar aplicativos da web assíncronos. Com o Ajax, os aplicativos da web podem enviar e recuperar dados de um servidor de forma assíncrona, sem interferir na exibição e no comportamento da página existente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

module.exports = Tecnologies;