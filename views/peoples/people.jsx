var React = require('react');

function People() {
    return (
        <div className="container">
            <h1 className="text-center my-3">Pessoas envolvidas nesse projeto</h1>
            <div className="row my-5 justify-content-center">
                <div class="card col-3 my-1 m-3 p-2">
                    <img class="card-img-top" src="./images/enioProfile.jpg" alt="Card image cap" />
                    <div class ="card-body">
                    <h5 class ="card-title">Enio Amarantes</h5>
                    <h6 className="card-subtitle text-muted">Engenheiro de Software</h6>
                    <p class ="card-text my-3">Responsável pela análise e desenvolvimento do projeto e seus artefatos e código.</p>
                    </div>
                </div>

                <div class="card col-3 my-1 m-3 p-2">
                    <img class="card-img-top" src="./images/mirellaProfile.jpg" alt="Card image cap" />
                    <div class ="card-body">
                    <h5 class ="card-title">Mirella Amarantes</h5>
                    <h6 className="card-subtitle text-muted">Designer Gráfica</h6>
                    <p class ="card-text my-3 ">Responsável pela identidade visual do projeto bem como edição e criação de recursos visuais.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

module.exports = People;