<?php
require 'class.phpmailer.php';

$data = json_decode(file_get_contents('php://input'));
$subject = 'SagePoint: Request for info';

$message = '';
$message .= '<img src="http://s3.amazonaws.com/uploads.uservoice.com/logo/design_setting/88753/original/logo.png" alt="SagePoint: Request for info" />';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($data->name) . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($data->email) . "</td></tr>";
$message .= "</table>";

error_log("SagePoint: Sending mail to " . $to . " FROM: " . $data->name);

$mail = new PHPMailer;

$mail->IsSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.authsmtp.com';			  		  // Specify main and backup server
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'ac39582';                          // SMTP username
$mail->Password = 'AUTHSMTP_TOKEN';                   // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted

$mail->From = strip_tags($data->email);
$mail->FromName = strip_tags($data->name);
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