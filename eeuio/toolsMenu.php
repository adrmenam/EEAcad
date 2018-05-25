<?php
  session_start();
  include 'dbconnection.php';
?>
﻿<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Mouldifi - A fully responsive, HTML5 based admin theme">
<meta name="keywords" content="Responsive, HTML5, admin theme, business, professional, Mouldifi, web design, CSS3">
<title>EEAcad | Menu Herramientas</title>
<!-- Site favicon -->
<link rel='shortcut icon' type='image/x-icon' href='images/favicon.ico' />
<!-- /site favicon -->

<!-- Entypo font stylesheet -->
<link href="css/entypo.css" rel="stylesheet">
<!-- /entypo font stylesheet -->

<!-- Font awesome stylesheet -->
<link href="css/font-awesome.min.css" rel="stylesheet">
<!-- /font awesome stylesheet -->

<!-- CSS3 Animate It Plugin Stylesheet -->
<link href="css/plugins/css3-animate-it-plugin/animations.css" rel="stylesheet">
<!-- /css3 animate it plugin stylesheet -->

<!-- Bootstrap stylesheet min version -->
<link href="css/bootstrap.min.css" rel="stylesheet">
<!-- /bootstrap stylesheet min version -->

<!-- Mouldifi core stylesheet -->
<link href="css/mouldifi-core.css" rel="stylesheet">
<!-- /mouldifi core stylesheet -->

<link href="css/plugins/select2/select2.css" rel="stylesheet">
<link href="css/mouldifi-forms.css" rel="stylesheet">


<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="js/html5shiv.min.js"></script>
      <script src="js/respond.min.js"></script>
<![endif]-->

</head>
<body>

<!-- Page container -->
<div class="page-container">

  <!-- Page sidebar -->
  <div class="page-sidebar">

  		<!-- Site header  -->
		<header class="site-header">
		  <div class="site-logo"><a href="toolsMenu.php"><img src="images/logo.jpg" alt="Mouldifi" title="Mouldifi"></a></div>
		  <div class="sidebar-collapse hidden-xs"><a class="sidebar-collapse-icon" href="#"><i class="icon-menu"></i></a></div>
		  <div class="sidebar-mobile-menu visible-xs"><a data-target="#side-nav" data-toggle="collapse" class="mobile-menu-icon" href="#"><i class="icon-menu"></i></a></div>
		</header>
		<!-- /site header -->

		<!-- Main navigation -->
		<ul id="side-nav" class="main-menu navbar-collapse collapse">

      <!-- <li class="has-sub"><a href="index.html"><i class="icon-gauge"></i><span class="title">Dashboard</span></a>
				<ul class="nav collapse">
					<li><a href="index.html"><span class="title">Misc.</span></a></li>
				</ul>
			</li> -->
      <?php
        if ($_SESSION["profile"]==="Administrador"){
          /*echo '<li class="has-sub"><a href="index.html"><i class="icon-gauge"></i><span class="title">Dashboard</span></a>';
    			echo 	   '<ul class="nav collapse">';
    			echo         '<li><a href="index.html"><span class="title">Misc.</span></a></li>';
    			echo	    '</ul>';
    			echo  '</li>';*/
          echo "<li ><a href='users.php'><i class='icon-users'></i><span class='title'>Usuarios</span></a>";
          //echo '<li class="active"><a href="toolsMenu.php"><i class="icon-tools"></i><span class="title">Evaluación</span></a> ';
          
    			echo     '<li><a href="evaluation.php"><i class="icon-newspaper"></i><span class="title">Resultados de Evaluaciones</span></a></li>';
    			echo '</li>';
        }
      ?>
			<li class="active"><a href="toolsMenu.php"><i class="icon-tools"></i><span class="title">Menú de Herramientas</span></a>
			<li ><a href="video.php"><i class="icon-video"></i><span class="title">Videos</span></a>
      <?php
        if($_SESSION["profile"] === "Estudiante"){
          echo '<li><a href="test.php"><i class="icon-pencil"></i><span class="title">Evaluación</span></a>';
          echo '<li><a href="practice.php"><i class=" icon-graduation-cap"></i><span class="title">Práctica</span></a>';
        }
      ?>
		</ul>
		<!-- /main navigation -->
  </div>
  <!-- /page sidebar -->

  <!-- Main container -->
  <div class="main-container">

	<!-- Main header -->
	<div class="main-header row gray-bg">
      <div class="col-sm-6 col-xs-7">

		<!-- User info -->
        <ul class="user-info pull-left">
          <li class="profile-info dropdown"><a data-toggle="dropdown" class="dropdown-toggle" href="#" aria-expanded="false"> <img width="44" class="img-circle avatar" alt="" src="images/man-3.jpg"><?php echo  $_SESSION["username"] ?> <span class="caret"></span></a>

			<!-- User action menu -->
            <ul class="dropdown-menu">

              <!-- <li><a href="#/"><i class="icon-user"></i>My profile</a></li>
              <li><a href="#/"><i class="icon-mail"></i>Messages</a></li>
              <li><a href="#"><i class="icon-clipboard"></i>Tasks</a></li>
			  <li class="divider"></li>
			  <li><a href="#"><i class="icon-cog"></i>Account settings</a></li> -->
			       <li><a href="logout.php" ><i class="icon-logout"></i>Logout</a></li>
            </ul>
			<!-- /user action menu -->

          </li>
        </ul>
		<!-- /user info -->

      </div>

      
    </div>
	<!-- /main header -->

	<!-- Secondary header -->
	<div class="header-secondary row gray-bg">
		<div class="col-lg-12">
			<div class="page-heading clearfix">
				<h1 class="page-title pull-left">Menú de Herramientas</h1>
			</div>
			<!-- Breadcrumb -->
			<ol class="breadcrumb breadcrumb-2">
				<!-- <li><a href="index.html"><i class="fa fa-home"></i>Home</a></li> -->
				<!-- <li><a href="short-view.html">Grid Views</a></li> -->
				<li class="active"><strong>Herramientas</strong></li>
			</ol>
		</div>
	</div>
	<!-- /secondary header -->

	<!-- Main content -->
	<div class="main-content">
		<!-- Card grid view -->
		<div class="cards-container grid-view">
      <?php
        //include 'dbconnection.php';
        $res = $mysqli->query($select_tools);
        $cont = 0; //Se suma 1 para controlar las filas, cada 4 un salto de linea y reseteo
        $index_value = 50; //Se resta de 1 en 1
        $modal = 1; //Se suma 1
        while($row = $res->fetch_object()){

          if($cont == 0){
            echo '<div class="row">';
          }
          echo '<div class="col-lg-3 col-sm-6 animatedParent animateOnce z-index-'.$index_value.'">';
            echo '<!-- Card -->';
            echo '<div class="card primary-view animated fadeInUp" data-toggle="modal" data-target="#modal-'.$modal.'">';
              echo '<!-- Card header -->';
              echo '<div class="card-header" style="height:170px">';
                echo '<!-- Card photo -->';
                echo '<div class="card-photo">';
                  echo '<img title="'.$row->HER_NOMBRE.'" alt="'.$row->HER_NOMBRE.'" src="'.$row->HER_IMAGEN.'" class="img-circle avatar">';
                echo '</div>';
                echo '<!-- /card photo -->';
                echo '<!-- Card short description -->';
                echo '<div class="card-short-description">';
                  echo '<h2><span class="user-name"><a href="#/">'.$row->HER_NOMBRE.'</a></span></h2>';
                  //echo '<p class="uppercase">'.$row->HER_DEFINICION.'</p>';
                echo '</div>';
                echo '<!-- /card short description -->';
                echo '<!-- Card action dropdown -->';
                echo '<div class="action-dropdown dropdown">';
                  echo '<a data-toggle="dropdown" href="#/" aria-expanded="true"><i class="icon-dot-3 icon-more"></i></a>';
                  echo '<ul class="dropdown-menu dropdown-menu-right">';
                    echo '<li><a href="">Change Setting</a></li>';
                    echo '<li><a href="">View Profile</a></li>';
                    echo '<li><a href="">Send Message</a></li>';
                  echo '</ul>';
                echo '</div>';
                echo '<!-- /card action dropdown -->';
              echo '</div>';
              echo '<!-- /card header -->';
              echo '<!-- Card content -->';
              //echo '<div class="card-content">';
              //  echo '<p>'.$row->HER_CARACTERISTICAS.'</p>';
              //echo '</div>';
              echo '<!-- /card content -->';
            echo '</div>';
            echo '<!-- /card -->';
          echo '</div>';
          $cont++; //Actualizacion del contador
          $index_value--;
          $modal++;
          if($cont == 4){
            echo '</div>';
            $cont = 0;
          }
        }
        if($cont != 4){
          echo '</div>';
        }
      ?>
		</div>

		<!-- Footer -->
		<footer class="animatedParent animateOnce z-index-10">
			<div class="footer-main animated fadeInUp slow">&copy; 2018 <strong>EEUIO</strong> by <a target="_blank" href="#/">KAY Innovation</a> </div>

		</footer>
		<!-- /footer -->

	  </div>
	  <!-- /main content -->

  </div>
  <!-- /main container -->

</div>
<!-- /page container -->

<?php
//include 'dbconnection.php';
$res = $mysqli->query($select_tools);
$modalDetail = 1; //Se suma 1 para controlar las filas, cada 4 un salto de linea y reseteo

while($row = $res->fetch_object()){
	$caracteristicas=explode("¬",$row->HER_CARACTERISTICAS);
	echo '<!--Tools Detail-->';
	echo '<div id="modal-'.$modalDetail.'" class="modal fade" tabindex="-1" role="dialog">';
	echo '<div class="modal-dialog">';
		echo '<div class="modal-content">';
		echo '<div class="modal-header">';
			echo '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
			echo '<h2 class="modal-title">'.$row->HER_NOMBRE.'</h2>';
		echo '</div>';
		echo '<div class="modal-body">';
			echo '<img title="'.$row->HER_NOMBRE.'" alt="'.$row->HER_NOMBRE.'" src="'.$row->HER_IMAGEN.'">';
			echo '<br><br><br><p><b><h4>Definición:</h4></b>'.$row->HER_DEFINICION.'</p>';
		  echo '<p><b><h4>Material del que está compuesto:</h4></b>'.$caracteristicas[0].'</p>';
		  echo '<p><b><h4>Voltajes:</h4></b>'.$caracteristicas[1].'</p>';
		  echo '<p><b><h4>Función:</h4></b>'.$caracteristicas[2].'</p>';
		echo '</div>';
		echo '</div><!-- /.modal-content -->';
	echo '</div><!-- /.modal-dialog -->';
	echo '</div><!-- /.modal -->';
	echo '<!--End Tools Detail-->';
	$modalDetail++;
}
?>

<!--Load JQuery-->
<script src="js/jquery.min.js"></script>
<!-- Load CSS3 Animate It Plugin JS -->
<script src="js/plugins/css3-animate-it-plugin/css3-animate-it.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/generalScript.js"></script>
<script src="js/plugins/metismenu/jquery.metisMenu.js"></script>
<!-- Select2-->
<script src="js/plugins/select2/select2.full.min.js"></script>
<script src="js/functions.js"></script>
<script>
	$(document).ready(function () {
		$(".select2").select2();
	});
</script>
</body>
</html>
