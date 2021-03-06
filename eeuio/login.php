<?php
  session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Mouldifi - A fully responsive, HTML5 based admin theme">
<meta name="keywords" content="Responsive, HTML5, admin theme, business, professional, Mouldifi, web design, CSS3">
<title>EEQAcad | Login</title>
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

<link href="css/mouldifi-forms.css" rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="js/html5shiv.min.js"></script>
      <script src="js/respond.min.js"></script>
<![endif]-->


</head>
<body class="login-page">
	<div class="login-pag-inner" style="background-image: url('resources/fondo.jpg'); no-repeat fixed center;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;height: 100%;width: 100% ; text-align: center;">
		<div class="animatedParent animateOnce z-index-50">
			<div class="login-container animated growIn slower">
				<div class="login-content">
          <div class="login-branding">
  					<a href="index.html"><img src="resources/logo.png" alt="Mouldifi" title="Mouldifi"></a>
  				</div>
					<h2><strong>Bienvenido</strong>, Por favor inicie sesión</h2>
					<form id="validateUser" method="post" action="validateUser.php">
						<div class="form-group">
							<input type="text" placeholder="email" class="form-control" name="emailaddress">
						</div>
						<div class="form-group">
							<input type="password" placeholder="Password" class="form-control" name="password">
							<?php
                if(isset($_SESSION["username"])){
                        if(isset($_SESSION["errorsession"])){
  								        if ($_SESSION["errorsession"]=="errorsession") {
  									         echo '<span class="badge badge-danger">Error al iniciar sesión. Usuario o contraseña incorrectos.</span>';
  								        }
                        }
                }else{
                  echo "";
                }
							 ?>
						</div>
						<div class="form-group">
							 <div class="checkbox checkbox-replace">
								<input type="checkbox" id="remeber">
								<!-- <label for="remeber">Remeber me</label> -->
							  </div>
						 </div>
						<div class="form-group">
							<button class="btn btn-primary btn-block">Login</button>
						</div>
						<!-- <p class="text-center"><a href="forgot-password.html">Forgot your password?</a></p> -->
					</form>
				</div>
			</div>
		</div>
	</div>
<!--Load JQuery-->
<script src="js/jquery.min.js"></script>
<!-- Load CSS3 Animate It Plugin JS -->
<script src="js/plugins/css3-animate-it-plugin/css3-animate-it.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>
</html>
