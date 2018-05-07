<?php
include 'dbconnection.php';

if($_POST){
  $username=$_SESSION["username"];
  print($username);
  $type=$_POST["type"];
  print($type);

}
echo("hola");

?>
