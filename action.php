<?php
    $to = 'sir.ygorkagrishin@yandex.ru'; 
    $subject = 'Почта для рассылки';
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.htmlspecialchars($_POST['name']).'</p>
                    <p>Почта: '.htmlspecialchars($_POST['email']).'</p>                        
                </body>
            </html>'; 
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    $headers .= "From: Отправитель <from@example.com>\r\n"; 
    mail($to, $subject, $message, $headers);
?>