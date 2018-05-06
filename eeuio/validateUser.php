<?php
include 'dbconnection.php';
include 'redirect.php';
$flag=false;
if($_POST){
  $password=$_POST["password"];
  $emailaddress=$_POST["emailaddress"];
  $sql = 'SELECT USU_ROL, USU_NOMBRES, USU_APELLIDOS, USU_CODIGO FROM USUARIO WHERE USU_EMAIL LIKE "'.$emailaddress.'" AND USU_PASSWORD like "'.md5($password).'"';
  $res = $mysqli->query($sql);
  while ($row = $res->fetch_object()) {
     $flag = true;
     $_SESSION["code"] = $row->USU_CODIGO;
     if($row->USU_ROL === "Estudiante"){
       session_start();
       $_SESSION["username"] = $row->USU_NOMBRES." ".$row->USU_APELLIDOS;
       $_SESSION["profile"] = $row->USU_ROL;
       
       redirect("toolsMenu.php");
     }else if ($row->USU_ROL === "Administrador") {
       session_start();
       $_SESSION["username"] = $row->USU_NOMBRES." ".$row->USU_APELLIDOS;
       $_SESSION["profile"] = $row->USU_ROL;
       
       redirect("users.php");
     }
}
  if ($flag == false) {
    session_start();
    $_SESSION["errorsession"] = "errorsession";
    redirect("login.php");
  }

  $mysqli->close();

}else{
  echo "no se ingreso";
}
?>
