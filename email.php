<?php
// correo destino
$destinatario = 'luiswblancod@gmail.com';

$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['message'];

$header = "Enviado desde el formulario de mi PaginaWeb";
$mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

mail($destinatario, $header, $mensajeCompleto);
echo '<script>alert("correo enviado exitosamente")</script>';
echo '<script>setTimeout(\"location.href='index.html'\",1000)</script>';
?> 

