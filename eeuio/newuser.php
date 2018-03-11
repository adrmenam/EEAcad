<?php
include 'dbconnection.php';
include 'redirect.php';

if($_POST){
  $password=$_POST["password"];
  $emailaddress=$_POST["emailaddress"];
  $ci=$_POST["ci"];
  $firstname=$_POST["firstname"];
  $lastname=$_POST["lastname"];

  $sql = "INSERT INTO USUARIO (USU_PASSWORD, USU_EMAIL, USU_CEDULA, USU_ROL, USU_NOMBRES, USU_APELLIDOS)
  VALUES ('".$password."', '".$emailaddress."', '".$ci."', 'Estudiante', '".$firstname."', '".$lastname."' )";

  if ($mysqli->query($sql) === TRUE) {
      redirect('users.php');
  } else {
      echo "Error: " . $sql . "<br>" . $mysqli->error;
  }

  $mysqli->close();

}

?>
