<?php
  $server='35.185.114.87';
  $user='admin';
  $password='EmpEleQuito';
  $db='EmpresaElectrica';

  $mysqli = new mysqli($server, $user, $password, $db);
  $mysqli->set_charset("utf8");

  

  //consultas

    //usuarios
    $select_users="SELECT * FROM USUARIO";
?>
