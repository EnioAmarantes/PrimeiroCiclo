var React = require('react');

function Resumo() {
    return (
        <div class="shadow row my-5 p-2">
            <div className="col-3">
                <img class="rounded float-left" src="./images/fisioNetLogo.png" alt="Card image cap" />
            </div>
            <div class="col-8">
                <h5 class="card-title">FisioNet</h5>
                <p class="card-text my-3 ">
                    FisioNet é um projeto de um sistema para controle de clínicas fisioterapeuticas com enfoque no tratamento individualizado paciente além de organizar a agenda com as datas de retorno do paciente, o sistema trás funções para acompanhar também o diagnóstico e os exames para uma melhor visualização do histórico e evolução de cada paciente.
                </p>
            </div>
        </div>
    )
}

module.exports = Resumo;