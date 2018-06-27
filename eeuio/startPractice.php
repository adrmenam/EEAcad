<?php
include 'dbconnection.php';
include 'redirect.php';

if($_POST){
  $username=$_POST["username"];
  date_default_timezone_set('America/Guayaquil');
  $date = date('Y-m-d H:i:s', time());

  $sql = "INSERT INTO EVAXUSU (EXU_FECHA, EVA_CODIGO, USU_CODIGO,TIE_CODIGO, EXU_RESULTADO, EXU_OBSERVACION, EXU_FIN)
  VALUES ('".$date."',1,".$username.",1,0,'Reprobado',0)";

  if ($mysqli->query($sql) === TRUE) {
      redirect('practiceCanvas.php');
  } else {
      redirect('login.php');
      echo "Error: " . $sql . "<br>" . $mysqli->error;
  }

  $mysqli->close();
}else{
    redirect('login.php');
}

?>
