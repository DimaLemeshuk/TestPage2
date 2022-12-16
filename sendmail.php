<?php
    /*use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    //use PHPMailer\src\Exception.php

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage ('ru', 'phpmailer/language/') ;
    $mail->IsHTML(true);

    $mail->setFrom( 'dmutrolemeshuk@gmail.com', 'Від кого');

    $mail->addAddress( 'lemesukdima8@gmail.com' );

    $mail->Subject = 'Яка тема';

    $body = '<h1> Якийсь заголовок </h1>';
    $body.= '<p> Тут дані' .$_POST['name'].'</p>';

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = 'Error2';
    }else {
        $message = 'Дані відправлено';
    }

    $response = ['message' => $message ];
    header ('Content-type: application/json');
    echo json_encode($response);*/

    $name = $_POST['name'];
    $email = $_POST['e_mail'];

    $to = "lemesukdima8@gmail.com";
    $date = date ("d.m.Y");
    $from = $email;
    $subject = "ntrcn"
    $from = "dmutrolemeshuk@gmail.com"

    $msg="
    name: $name /n
    email: $email /n";
    mail($to, $subjec, $msg, "From: $from");
?>