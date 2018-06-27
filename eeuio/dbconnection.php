<?php
  // $server='35.185.114.87';
  // $user='admin';
  // $password='EmpEleQuito';
  // $db='EmpresaElectrica2';
  // $server='localhost';
  // $user='root';
  // $password='Inrikingjc1107.';
  // $db='empresaelectrica2';

  $server='146.148.97.250';
  $user='admin';
  $password='eeq_kay_2018';
  $db='EmpresaElectrica2';


  $mysqli = new mysqli($server, $user, $password, $db);
  $mysqli->set_charset("utf8");
  if (!$enlace) {
    echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    echo "errno de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "error de depuración: " . mysqli_connect_error() . PHP_EOL;
    exit;
  }


  //consultas

    //usuarios
    $select_users="SELECT * FROM USUARIO";
    $select_tool="SELECT * FROM HERRAMIENTA WHERE HER_CODIGO = 1";
    $select_tools="SELECT *FROM HERRAMIENTA ORDER BY HER_NOMBRE";
    $select_tools="SELECT *FROM HERRAMIENTA ORDER BY HER_NOMBRE";
    $select_evaxusu='SELECT USU_CEDULA,USU_APELLIDOS,USU_NOMBRES,TIE_NOMBRE,EXU_RESULTADO,EXU_FECHA
    FROM EVALUACION E,EVAXUSU EU, USUARIO U, TIPO_EVALUACION T
    WHERE EU.EXU_FIN=1 AND E.EVA_CODIGO=EU.EVA_CODIGO AND U.USU_CODIGO=EU.USU_CODIGO AND T.TIE_CODIGO=EU.TIE_CODIGO';

    


?>
