<?php	
	if (empty($_POST['nome_completo_33649']) && strlen($_POST['nome_completo_33649']) == 0 || empty($_POST['telefone_33649']) && strlen($_POST['telefone_33649']) == 0 || empty($_POST['email_33649']) && strlen($_POST['email_33649']) == 0 || empty($_POST['mensagem_33649']) && strlen($_POST['mensagem_33649']) == 0)
	{
		return false;
	}
	
	$nome_completo_33649 = $_POST['nome_completo_33649'];
	$telefone_33649 = $_POST['telefone_33649'];
	$email_33649 = $_POST['email_33649'];
	$mensagem_33649 = $_POST['mensagem_33649'];
	$email_33649 = $_POST['email_33649'];
	
	$to = 'receiver@yoursite.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from a Blocs website.";
	$email_body = "You have received a new message. \n\n".
				  "Nome_Completo_33649: $nome_completo_33649 \nTelefone_33649: $telefone_33649 \nEmail_33649: $email_33649 \nMensagem_33649: $mensagem_33649 \nEmail_33649: $email_33649 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: contact@yoursite.com\r\n";
	$headers .= "Reply-To: $email_33649";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>