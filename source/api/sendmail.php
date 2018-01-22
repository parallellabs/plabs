<?php
header("Access-Control-Allow-Origin: *");
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);
$mail1 = new PHPMailer(true);
try {
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    //$mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = false;                               // Enable SMTP authentication
    $mail->Username = 'info@parallellabs.io';                 // SMTP username
    $mail->Password = 'Zentigrity26';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('info@parallellabs.io');
    //Content
    $mail->isHTML(true);                                  // Set email format to HTML

    $mailEnquiry = '<h3>Project Enquiry</h3>';
    $mailEnquiry .= '<p> Name: ' . $_REQUEST['clientName'] . '</p>';
    $mailEnquiry .= '<p> Email: ' . $_REQUEST['email'] . '</p>';
    $mailEnquiry .= '<p> Mobile Number: ' . $_REQUEST['mobileNumber'] . '</p>';
    $mailEnquiry .= '<p> Company Name: ' . $_REQUEST['company'] . '</p>';
    $mailEnquiry .= '<p> Project Brief: ' . $_REQUEST['objective'] . '</p>';
    $mailEnquiry .= '<p> Attach Link: ' . $_REQUEST['attachLink'] . '</p>';
    $mailEnquiry .= '<p> Project Type: ' . $_REQUEST['optionNone'] . '</p>';

    $mail->Body = $mailEnquiry;

    $mail->addAddress('hello@parallellabs.io');
    $mail->addReplyTo($_REQUEST['email']);
    $mail->Subject = 'Project Enquiry from ' . $_REQUEST['clientName'];

    if($mail->Send()) {

      // Auto responder

      $mail->ClearAddresses();  // each AddAddress add to list
      $mail->ClearCCs();
      $mail->ClearBCCs();

      $mailEnquiryAutoReply = '<p> Hi ' . $_REQUEST['clientName'] . ',</p>';
      $mailEnquiryAutoReply .= '<p>Thanks for reaching out to Parallel Labs.</p>';
      $mailEnquiryAutoReply .= '<p>Someone from the team will get in touch with you shortly to discuss your requirements further. Meanwhile you can have a peek into whats going on at Parallel Labs.</p>';
      $mailEnquiryAutoReply .= '<p> > Latest from the Blog: <a href="https://medium.com/parallel-labs/illustrations-in-ux-design-its-more-than-what-meets-the-eye-867036df0b73#.1505571wk">Illustrations in UX Design - Its more than what meets the eye</a></p>';
      $mailEnquiryAutoReply .= "<p> > What's Cooking: <a href='https://dribbble.com/parallellabs'> Checkout our work in progress on Dribbble</a></p><br>";
      $mailEnquiryAutoReply .= '<p> - Team Parallel Labs</p>';

      $mail->Subject = 'Collaborating with Parallel Labs';
      $mail->Body = $mailEnquiryAutoReply;
      $mail->setFrom('info@parallellabs.io');
      $mail->addAddress($_REQUEST['email']);
      $mail->addReplyTo('hello@parallellabs.io');

      $mail->send();

    }
    else {
    }

} catch (Exception $e) {

}
