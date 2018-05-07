<?php
include 'dbconnection.php';
include 'redirect.php';

if($_POST){
  $username=$_POST["username"];
  //print($username);
  $type=$_POST["type"];

  $sql = "INSERT INTO USUARIO (USU_PASSWORD, USU_EMAIL, USU_CEDULA, USU_ROL, USU_NOMBRES, USU_APELLIDOS)
  VALUES (MD5('".$password."'), '".$emailaddress."', '".$ci."', 'Estudiante', '".$firstname."', '".$lastname."' )";

  if ($mysqli->query($sql) === TRUE) {
      redirect('practiceCanvas.php');
  } else {
      echo "Error: " . $sql . "<br>" . $mysqli->error;
  }

  $mysqli->close();
}

?>
