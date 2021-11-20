var React = require('react');

function Contacts(props) {

    function alertaEmail(){
        console.log(props);
    }

    return (
        <>
        {
         alertaEmail()  
        }
            <div className="container">
                <h1 className="text-center">Entre em contato com a nossa equipe</h1>
                <h5 className="my-3 text-muted">Sua opinião é muito importante, gostaríamos de saber suas dúvidas, sugestões ou elogios. Assim que possível um de nossos colaboradores entrará em contato com você.</h5>

                <form action="/sendmail" method="POST" className="my-5">
                    <div className="form-group">
                        <label for="nome">Nome</label>
                        <input type="text" className="form-control" id="nome" name="nome" placeHolder="Informe seu Nome" />

                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Informe seu Email" />

                        <label for="assunto">Assunto</label>
                        <input type="text" className="form-control" id="assunto" name="assunto" placeholder="Informe o assunto do contato" />

                        <label for="conteudo">Dúvida, sugestão ou elogio</label>
                        <textarea class="form-control" id="conteudo" name="conteudo" rows="8"></textarea>

                    </div>

                    <button type="submit" className="btn btn-primary my-3">Enviar e-mail</button>
                </form>

            </div>
        </>
    )
}

module.exports = Contacts;