
const nomeProdutoE = document.getElementById('nomep').innerHTML;

const linksite = document.location.href;



document.getElementById('orcamentoProduto').innerHTML = `<div class="bloc full-width-bloc bgc-harvest-gold d-bloc" id="bloc-5">
<div class="container bloc-no-padding-lg bloc-no-padding-md bloc-no-padding-sm bloc-no-padding">
    <div class="row">
        <div class="col text-center text-md-start">
            <div class="row align-items-center">
                <div class="text-lg-center align-self-center col-lg-3">
                </div>
                <div class="col-lg-6 text-lg-center align-self-center bgc-white info-produto-orcamento">
                    <h2 class="mg-md h2-style-faca-seu-orcamento">
                        FAÇA SEU ORÇAMENTO
                    </h2>
                    <div class="container-div-0-style text-lg-center">
                        <form id="form_33649" data-form-type="blocs-form" action="https://formsquash.io/f/JRpmQRMQIoQjqQZbN24y" method="POST">
                            <div class="form-group mb-3">
                                <input id="nome_completo" class="form-control field-style" required placeholder="NOME COMPLETO" name="nome_completo" data-validation-required-message="O nome é requerido" />
                            </div>
                            <div class="form-group mb-3">
                                <input id="telefone" class="form-control field-style" type="number" required placeholder="TEL: COD + NUMERO" name="telefone" data-validation-required-message="Telefone é requeirdo" />
                            </div>
                            <div class="form-group mb-3">
                                <input id="email" class="form-control field-style" type="email" placeholder="E-MAIL" data-error-validation-msg="continue digitando..." name="email" required data-validation-required-message="E-mail é requerido" />
                            </div>
                            <div class="form-group mb-3">
                                <textarea id="mensagem" class="form-control field-style" rows="4" cols="50" required placeholder="DEIXE SUA MENSAGEM" name="mensagem" data-validation-required-message="deixe sua mensagem"></textarea>
                            </div>
                            <div class="form-group mb-3" style="display:none;">
                                <input id="nome_produto_orcamento" class="form-control field-style " placeholder="${nomeProdutoE}" name="ORÇAMENTO PARA" value = "${nomeProdutoE}" />
                            </div> 
                            <button class="bloc-button btn btn-d btn-lg w-100 btn-glossy btn-style-enviar-form" type="submit">
                                ENVIAR
                            </button>
                        </form>
                    </div>
                    <div>
                    <a href="https://api.whatsapp.com/send?phone=555189505605&amp;text=Olá gostaria de realizar um orçamento, poderia me ajudar? Vi ${nomeProdutoE} aqui ${linksite}." target="_blank">
                    <img src="../img/orcamento-de-gondolas-pelo-whatsapp.png" data-src="../img/orcamento-de-gondolas-pelo-whatsapp.png" alt="orcamento de-gondolas-pelo-whatsapp" data-appear-anim-style="tada" class="img-fluid mx-auto d-block img-bloc-5-style mg-sm animLoopInfinite animDelay06 animSpeedSlow tada animated lazyloaded" style="visibility: visible;">
                    </a>
                    </div>
                </div>
                <div class="text-lg-center align-self-center col-lg-3">
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;





document.getElementById('botaoprecoorcamento').innerHTML = `<a href="https://api.whatsapp.com/send?phone=555189505605&amp;text=Olá gostaria de realizar um orçamento, poderia me ajudar? Vi ${nomeProdutoE} aqui ${linksite}." target="_blank" class="btn btn-d btn-lg w-100 btn-consultar-preco btn-glossy">CONSULTAR PREÇO</a>`;