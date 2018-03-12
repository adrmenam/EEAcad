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
    $select_tool="SELECT *FROM HERRAMIENTA WHERE HER_CODIGO = 1";
    $select_tools="SELECT *FROM HERRAMIENTA ORDER BY HER_CODIGO";
    $select_evaxusu='SELECT U.USU_CODIGO,USU_CEDULA,USU_APELLIDOS,USU_NOMBRES,EVA_NOMBRE,EXU_RESULTADO,EXU_FECHA
    FROM EVALUACION E,EVAXUSU EU, USUARIO U
    WHERE E.EVA_CODIGO=EU.EVA_CODIGO AND U.USU_CODIGO=EU.USU_CODIGO';
    
?>
