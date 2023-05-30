<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'phpmailer/phpmailer/src/PHPMailer.php';
require 'phpmailer/phpmailer/src/SMTP.php';
require 'phpmailer/phpmailer/src/Exception.php';


header('Content-Type: application/json');
// header('Accept: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Authorization , Access-Control-Allow-Headers , Access-Control-Allow-Methods , Content-Type,Access-Control-Allow-Origin,Origin, X-Requested-With');

$data = json_decode(file_get_contents('php://input'),true);
$companyName = $data["companyName"];
$details = $data["details"];
$name = $data["name"];


$mail = new PHPMailer(true);

if (!preg_match("/^([A-Za-z]){3,15}/", $name)) {
    echo json_encode(['status'=>404,"err"=>"<li class='errorforname'>Name Must Be Between 3 to 15 character long.</li><li class='errorforname'>Name must not start with numbers.</li>"]);
    exit;
}

if (!preg_match("/^([A-Z0-9a-z]){3,15}/", $companyName)) {
    echo json_encode(['status'=>404,"err"=>"<li class='errorforname'>Comapny Name Must Be Between 3 to 15 character long.</li>"]);
    exit;
}

if ($details === "") {
    echo json_encode(['status'=>404,"err"=>"<li class='errorforname'>Details can not be empty.</li>"]);
    exit;
}

try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'lalitsharma2877677@gmail.com';                     //SMTP username
    $mail->Password   = 'qkbxqggkgsumlaxp';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('lalitsharma2877677@gmail.com', $name);
    $mail->addAddress('lalits2828@gmail.com'); 

    $mail->Subject = 'Job Offer From Recruiter '.$companyName .'From Portfolio';
    $mail->Body    = $details;

    $mail->send();
    echo json_encode(['status'=>200,"msg"=>" <div class='alert alert-warning alert-dismissible fade show' role='alert'><strong>Congratulations !! Form Submitted Successfully -</strong> I will contact you soon.
    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
  </div>"]);
  
    exit;
} catch (Exception $e) {
   echo json_encode(['status'=>200,"msg"=>"mail not sent"]);
   exit;
//   echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";

}


 

?>