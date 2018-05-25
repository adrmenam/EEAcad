<?php
  session_start();
  include 'dbconnection.php';
  $Usuario=$_SESSION["user_code"];
?>
<!DOCTYPE html>
<!-- write your code here -->
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Mouldifi - A fully responsive, HTML5 based admin theme">
<meta name="keywords" content="Responsive, HTML5, admin theme, business, professional, Mouldifi, web design, CSS3">
<title>EEAcad | Examen</title>
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
<body onload="init();" style="margin:0px;">
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
       
          echo "<li><a href='users.php'><i class='icon-users'></i><span class='title'>Usuarios</span></a>";
          echo '<li><a href="toolsMenu.php"><i class="icon-tools"></i><span class="title">Evaluación</span></a> ';
          echo '<li class="has-sub"><a href="panels.html"><i class="icon-newspaper"></i><span class="title">Evaluaciones</span></a>';
    			echo   '<ul class="nav collapse">';
    			echo     '<li><a href="evaluation.php"><span class="title">Resultados de Evaluaciones</span></a></li>';
    			echo	 '</ul>';
    			echo '</li>';
        }
      ?>
			<li><a href="toolsMenu.php"><i class="icon-tools"></i><span class="title">Menú de Herramientas</span></a>
			<li ><a href="video.php"><i class="icon-video"></i><span class="title">Videos</span></a>
      
      <?php
        if($_SESSION["profile"] === "Estudiante"){
          echo '<li class="active"><a href="test.php"><i class="icon-pencil"></i><span class="title">Evaluación</span></a>';
          echo '<li ><a href="practice.php"><i class=" icon-graduation-cap"></i><span class="title">Práctica</span></a>';
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

	<center>
    <div id="startDiv" style="padding-top:150px;">
	<form action="startTest.php" method="post">
	 	<h2>Presiona INICIAR para comenzar con el examen del Proceso 1. En este caso al primer error repruebas automáticamente el examen</h2>
		
		<input class="btn btn-success btn-lg" type="submit" value="INICIAR">
    </form>
    </div>
  </center>
	

</body>

</html>