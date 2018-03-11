<?php
// Conectando, seleccionando la base de datos
$link = mysql_connect('35.185.114.87', 'admin', 'EmpEleQuito')
    or die('No se pudo conectar: ' . mysql_error());
echo 'Conectado correctamente';
mysql_select_db('EmpresaElectrica') or die('No se pudo seleccionar la base de datos');
$evaxusu = 'SELECT * FROM EVAXUSU';
$result_evaxusu = mysql_query($evaxusu) or die('Consulta fallida: ' . mysql_error());

?>