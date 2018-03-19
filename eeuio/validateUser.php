<?php
include 'dbconnection.php';
include 'redirect.php';

if($_POST){
  $password=$_POST["password"];
  $emailaddress=$_POST["emailaddress"];
  $sql = 'SELECT USU_ROL, USU_NOMBRES, USU_APELLIDOS FROM USUARIO WHERE USU_EMAIL LIKE "'.$emailaddress.'" AND USU_PASSWORD like "'.md5($password).'"';
  $res = $mysqli->query($sql);
  while ($row = $res->fetch_object()) {
     if($row->USU_ROL === "Estudiante"){
       session_start();
       $_SESSION["nameuser"] = $row->USU_NOMBRES." ".$row->USU_APELLIDOS;
       $_SESSION["profile"] = $row->USU_ROL;
       redirect("toolsMenu.php");
     }else{
       echo "Error";
     }
}

  $mysqli->close();

}else{
  echo "no se ingreso";
}
?>
