
const nomeProdutoE = document.getElementById('nomeP').innerHTML;


document.getElementById('orcamentoProduto').innerHTML = `<div class="bloc full-width-bloc bgc-harvest-gold d-bloc " id="bloc-5">
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
							<form id="form_33649" data-form-type="blocs-form" novalidate data-success-msg="Your message has been sent." data-fail-msg="Sorry it seems that our mail server is not responding, Sorry for the inconvenience!">
								<div class="form-group mb-3">
									<input id="nome_completo" class="form-control field-style" required placeholder="NOME COMPLETO" />
								</div>
								<div class="form-group mb-3">
									<input id="telefone" class="form-control field-style" type="number" required placeholder="TEL: COD + NUMERO" />
								</div>
								<div class="form-group mb-3">
									<input id="email" class="form-control field-style" type="email" required placeholder="E-MAIL" data-error-validation-msg="Not a valid email address" />
								</div>
								<div class="form-group mb-3">
									<textarea id="mensagem" class="form-control field-style" rows="4" cols="50" required placeholder="DEIXE SUA MENSAGEM"></textarea>
								</div>
								<div class="form-group mb-3">
									<input id="nome-do-produto" placeholder="${nomeProdutoE}" class="form-control field-style" />
								</div> 
								<button class="bloc-button btn btn-d btn-lg w-100 btn-glossy btn-style-enviar-form" type="submit">
									ENVIAR
								</button>
							</form>
						</div>
					</div>
					<div class="text-lg-center align-self-center col-lg-3">
					</div>
				</div>
			</div>
		</div>
	</div>
</div>`;