var React = require('react');

function Description() {
    return (
        <div className="container">
            <h1 className="text-center my-3">Fisionet</h1>
            <h2 className="text-center my2">É um sistema de controle de atendimentos, voltado para fisioterapeutas com foco nos tipos de atendimentos, registros de diagnósticos e exames.</h2>
            <div className="row my-5 justify-content-center">
                <div class="card col-8 my-1 m-3 p-2">
                    <h5 className="card-title text-center">
                        Tela de Login
                    </h5>
                    <img class="card-img-top" src="./images/fisioNetLogin.png" alt="Card image cap" />
                    <div class="card-body">
                        <p class="card-text my-2">
                            Tela onde é realizado o login para o controle de usuários cadastrados no sistema, também possui disponível links com resumo de alguns artigos relacionados com a área da fisioterapia que são cadastrados pelos próprios usuários criando assim uma rede de informação para a comunidade.
                        </p>
                    </div>
                </div>

                <div class="card col-8 my-1 m-3 p-2">
                    <h5 className="card-title text-center">
                        Tela de Pacientes
                    </h5>
                    <img class="card-img-top" src="./images/fisioNetPacientes.png" alt="Card image cap" />
                    <div class="card-body">
                        <p class="card-text my-2">
                            Tela onde é feito o gerenciamento dos pacientes demonstrando os tratamentos que estão sendo realizados e a fácil visualização das próximas consultas.
                        </p>
                    </div>
                </div>

                <div class="card col-8 my-1 m-3 p-2">
                    <h5 className="card-title text-center">
                        Tela de Exames
                    </h5>
                    <img class="card-img-top" src="./images/fisioNetExames.png" alt="Card image cap" />
                    <div class="card-body">
                        <p class="card-text my-2">
                            Tela para o gerenciamento dos exames realizados pelos pacientes, como raio-x, tomografias etc... Para que possa ser possível avaliar em qualquer momento do tratamento e acompanhar o registro da evolução.
                        </p>
                    </div>
                </div>

                <div class="card col-8 my-1 m-3 p-2">
                    <h5 className="card-title text-center">
                        Tela de detalhes do Exame
                    </h5>
                    <img class="card-img-top" src="./images/fisioNetExamesDetalhe.png" alt="Card image cap" />
                    <div class="card-body">
                        <p class="card-text my-2">
                            Utilizando uma função de lupa é possível fazer uma verificação e acompanhamento mais preciso dos exames registrados de cada paciente.
                        </p>
                    </div>
                </div>

                <div class="card col-8 my-1 m-3 p-2">
                    <h5 className="card-title text-center">
                        Tela de Diagnósticos
                    </h5>
                    <img class="card-img-top" src="./images/fisioNetDiagnosticos.png" alt="Card image cap" />
                    <div class="card-body">
                        <p class="card-text my-2">
                            Tela onde é feito o gerenciamento dos diagnósticos feitos com os pacientes, descrevendo as reclamações, os testes que foram realizados com o paciente e o diagnóstico resultado dos teste.
                        </p>
                    </div>
                </div>

                <div class="card col-8 my-1 m-3 p-2">
                    <h5 className="card-title text-center">
                        Tela de Tratamentos
                    </h5>
                    <img class="card-img-top" src="./images/fisioNetTratamentos.png" alt="Card image cap" />
                    <div class="card-body">
                        <p class="card-text my-2">
                            Tela onde é possível fazer o gerenciamento dos tratamentos disponíveis na clínica bem como as suas indicações
                        </p>
                    </div>
                </div>

                <div class="card col-8 my-1 m-3 p-2">
                    <h5 className="card-title text-center">
                        Tela de Artigos
                    </h5>
                    <img class="card-img-top" src="./images/fisioNetArtigos.png" alt="Card image cap" />
                    <div class="card-body">
                        <p class="card-text my-2">
                            Tela onde é possível fazer o cadastro dos artigos que serão exibidos na página inicial ao lado do formulário de login.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

module.exports = Description;