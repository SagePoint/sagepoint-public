<?php
require '../vendor/phpmailer/phpmailer/class.phpmailer.php';

$data = json_decode(file_get_contents('php://input'));
$subject = 'SagePoint: Request Survey (' . $data->email . ')';

$message = '';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr><td><strong>Name:</strong> </td><td>" . strip_tags($data->name) . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($data->email) . "</td></tr>";
$message .= "<tr><td><strong>Company Size:</strong> </td><td>" . strip_tags($data->companySize) . "</td></tr>";
$message .= "<tr><td><strong>Industry:</strong> </td><td>" . strip_tags($data->industry) . "</td></tr>";
$message .= "</table>";

error_log("SagePoint: Sending survey");

$mail = new PHPMailer;

$mail->IsSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.authsmtp.com';			  		  // Specify main and backup server
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ac39582';                          // SMTP username
$mail->Password = 'nuxk9wndw';                   // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

$mail->From = 'site@sagepointsoftware.com';
$mail->FromName = 'Sagepoint Public Site Info Request Survey';
$mail->AddAddress('jdelorenzo@sagepointsoftware.com', 'Jarad DeLorenzo');  // Add a recipient
$mail->AddAddress('rwilner@sagepointsoftware.com', 'Richard Wilner');  // Add a recipient
$mail->AddAddress('nzitsman@sagepointsoftware.com', 'Noah Zitsman');  // Add a recipient

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
$mail->IsHTML(true);                                  // Set email format to HTML

$mail->Subject = $subject;
$mail->Body    = $message;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients. Get an hmtl client.';

if(!$mail->Send()) {
   echo "503";
   error_log('Mailer Error: ' . $mail->ErrorInfo);
   exit;
} else {
	echo "200";
}

?>