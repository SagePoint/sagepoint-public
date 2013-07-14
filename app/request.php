<?php
$data = json_decode(file_get_contents('php://input'));

$to = 'jarad.delorenzo@sagepointsoftware.com';

$subject = 'SagePoint: Request for info';

$headers = "From: " . strip_tags($data->email) . "\r\n";
$headers .= "Reply-To: ". strip_tags($data->email) . "\r\n";
$headers .= "CC: richard.wilner@sagepointsoftware.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = '<html><body>';
$message .= '<img src="http://s3.amazonaws.com/uploads.uservoice.com/logo/design_setting/88753/original/logo.png" alt="SagePoint: Request for info" />';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($data->name) . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($data->email) . "</td></tr>";
$message .= "</table>";
$message .= "</body></html>";

error_log("SagePoint: Sending mail to " . $to . " FROM: " . $data->name);

if(mail($to, $subject, $message, $headers)) {
	echo "OK";
} else {
	echo "503";
}

?>