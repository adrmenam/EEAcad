<?php
  session_start();
  include 'dbconnection.php';
  $Usuario=$_SESSION["user_code"];
  $select_fecha="SELECT MAX(EXU_FECHA) AS FECHA_MAX FROM EVAXUSU WHERE TIE_CODIGO=1 AND USU_CODIGO=".$Usuario.";";

  if($_GET){
    $f1=$_GET["f1"];
    $f2=$_GET["f2"];
    $f3=$_GET["f3"];
    $f4=$_GET["f4"];
		$f5=$_GET["f5"];
		$f6=$_GET["f6"];
    $f7=$_GET["f7"];
    $f8=$_GET["f8"];
    $f9=$_GET["f9"];
		$f10=$_GET["f10"];
		$f11=$_GET["f1"];
    $f12=$_GET["f2"];
    $f13=$_GET["f3"];
    $f14=$_GET["f4"];
		$f15=$_GET["f5"];
		$f16=$_GET["f6"];
    $f17=$_GET["f7"];
    $f18=$_GET["f8"];
    $f19=$_GET["f9"];
    $f20=$_GET["f10"];
    $ftotal=$f1+$f2+$f3+$f4+$f5+$f6+$f7+$f8+$f9+$f10+$f11+$f12+$f13+$f14+$f15+$f16+$f17+$f18+$f19+$f20;
    $resfecha = $mysqli->query($select_fecha);
    while($row = $resfecha->fetch_object()){
        $fecha_max=$row->FECHA_MAX;
    }



    $sql = "UPDATE EVAXUSU SET EXU_FIN=1, EXU_RESULTADO=".$ftotal." WHERE TIE_CODIGO=1 AND EVA_CODIGO=1 AND
    USU_CODIGO=".$Usuario." AND EXU_FECHA='".$fecha_max."';";
    //echo $sql;
      if ($mysqli->query($sql) === TRUE) {
          //console.log("Práctica guardada exitosamente");
      } else {
          "Error: " . $sql . "<br>" . $mysqli->error;
      }



      $sql1 = "INSERT INTO PASXUSU VALUES (1,1,".$Usuario.",'".$fecha_max."',1,".$f1.",null)";

        if ($mysqli->query($sql1) === TRUE) {
            //console.log("Paso 1 guardado exitosamente");
        } else {
            echo "Error: " . $sql1 . "<br>" . $mysqli->error;
        }



        $sql2 = "INSERT INTO PASXUSU VALUES (2,1,".$Usuario.",'".$fecha_max."',1,".$f2.",null)";

          if ($mysqli->query($sql2) === TRUE) {
              //echo "Paso 2 guardado exitosamente";
          } else {
              echo "Error: " . $sql2 . "<br>" . $mysqli->error;
          }



          $sql3 = "INSERT INTO PASXUSU VALUES (3,1,".$Usuario.",'".$fecha_max."',1,".$f3.",null)";

            if ($mysqli->query($sql3) === TRUE) {
                //echo "Paso 3 guardado exitosamente";
            } else {
                echo "Error: " . $sql3 . "<br>" . $mysqli->error;
            }



            $sql4 = "INSERT INTO PASXUSU VALUES (4,1,".$Usuario.",'".$fecha_max."',1,".$f4.",null)";

              if ($mysqli->query($sql4) === TRUE) {
                  //echo "Paso 4 guardado exitosamente";
              } else {
                  echo "Error: " . $sql4 . "<br>" . $mysqli->error;
              }



              $sql5 = "INSERT INTO PASXUSU VALUES (5,1,".$Usuario.",'".$fecha_max."',1,".$f5.",null)";

                if ($mysqli->query($sql5) === TRUE) {
                    //echo "Paso 5 guardado exitosamente";
                } else {
                    echo "Error: " . $sql5 . "<br>" . $mysqli->error;
								}
								
									$sql6 = "INSERT INTO PASXUSU VALUES (6,1,".$Usuario.",'".$fecha_max."',1,".$f6.",null)";
										if ($mysqli->query($sql6) === TRUE) {
												//echo "Paso 5 guardado exitosamente";
										} else {
												echo "Error: " . $sql6 . "<br>" . $mysqli->error;
										}

										$sql7 = "INSERT INTO PASXUSU VALUES (7,1,".$Usuario.",'".$fecha_max."',1,".$f7.",null)";
											if ($mysqli->query($sql7) === TRUE) {
													//echo "Paso 5 guardado exitosamente";
											} else {
													echo "Error: " . $sql7 . "<br>" . $mysqli->error;
											}

											$sql8 = "INSERT INTO PASXUSU VALUES (8,1,".$Usuario.",'".$fecha_max."',1,".$f8.",null)";
												if ($mysqli->query($sql8) === TRUE) {
														//echo "Paso 5 guardado exitosamente";
												} else {
														echo "Error: " . $sql8 . "<br>" . $mysqli->error;
												}

												$sql9 = "INSERT INTO PASXUSU VALUES (9,1,".$Usuario.",'".$fecha_max."',1,".$f9.",null)";
												if ($mysqli->query($sql9) === TRUE) {
														//echo "Paso 5 guardado exitosamente";
												} else {
														echo "Error: " . $sql9 . "<br>" . $mysqli->error;
												}

												$sql10 = "INSERT INTO PASXUSU VALUES (10,1,".$Usuario.",'".$fecha_max."',1,".$f10.",null)";
												if ($mysqli->query($sql10) === TRUE) {
														//echo "Paso 5 guardado exitosamente";
												} else {
														echo "Error: " . $sql10 . "<br>" . $mysqli->error;
												}


												$sql11 = "INSERT INTO PASXUSU VALUES (11,1,".$Usuario.",'".$fecha_max."',1,".$f11.",null)";
												if ($mysqli->query($sql11) === TRUE) {
														//echo "Paso 5 guardado exitosamente";
												} else {
														echo "Error: " . $sql11 . "<br>" . $mysqli->error;
												}

												$sql12 = "INSERT INTO PASXUSU VALUES (12,1,".$Usuario.",'".$fecha_max."',1,".$f12.",null)";
												if ($mysqli->query($sql12) === TRUE) {
														//echo "Paso 5 guardado exitosamente";
												} else {
														echo "Error: " . $sql12 . "<br>" . $mysqli->error;
												}


												$sql13 = "INSERT INTO PASXUSU VALUES (13,1,".$Usuario.",'".$fecha_max."',1,".$f13.",null)";
												if ($mysqli->query($sql13) === TRUE) {
														//echo "Paso 5 guardado exitosamente";
												} else {
														echo "Error: " . $sql10 . "<br>" . $mysqli->error;
												}


												$sql14 = "INSERT INTO PASXUSU VALUES (14,1,".$Usuario.",'".$fecha_max."',1,".$f14.",null)";
												if ($mysqli->query($sql14) === TRUE) {
														//echo "Paso 5 guardado exitosamente";
												} else {
														echo "Error: " . $sql14 . "<br>" . $mysqli->error;
												}



												$sql15= "INSERT INTO PASXUSU VALUES (15,1,".$Usuario.",'".$fecha_max."',1,".$f15.",null)";
												if ($mysqli->query($sql15) === TRUE) {
														//echo "Paso 5 guardado exitosamente";
												} else {
														echo "Error: " . $sql15 . "<br>" . $mysqli->error;
												}



												$sql16 = "INSERT INTO PASXUSU VALUES (16,1,".$Usuario.",'".$fecha_max."',1,".$f16.",null)";
												if ($mysqli->query($sql16) === TRUE) {
														//echo "Paso 5 guardado exitosamente";
												} else {
														echo "Error: " . $sql16 . "<br>" . $mysqli->error;
												}




												$sql17 = "INSERT INTO PASXUSU VALUES (17,1,".$Usuario.",'".$fecha_max."',1,".$f17.",null)";
												if ($mysqli->query($sql17) === TRUE) {
														//echo "Paso 5 guardado exitosamente";
												} else {
														echo "Error: " . $sql17 . "<br>" . $mysqli->error;
												}




												$sql18 = "INSERT INTO PASXUSU VALUES (18,1,".$Usuario.",'".$fecha_max."',1,".$f18.",null)";
												if ($mysqli->query($sql18) === TRUE) {
														//echo "Paso 5 guardado exitosamente";
												} else {
														echo "Error: " . $sql18 . "<br>" . $mysqli->error;
												}




												$sql19 = "INSERT INTO PASXUSU VALUES (19,1,".$Usuario.",'".$fecha_max."',1,".$f19.",null)";
												if ($mysqli->query($sql19) === TRUE) {
														//echo "Paso 5 guardado exitosamente";
												} else {
														echo "Error: " . $sql19 . "<br>" . $mysqli->error;
												}



												$sql20 = "INSERT INTO PASXUSU VALUES (20,1,".$Usuario.",'".$fecha_max."',1,".$f20.",null)";
												if ($mysqli->query($sql20) === TRUE) {
														//echo "Paso 5 guardado exitosamente";
												} else {
														echo "Error: " . $sql20 . "<br>" . $mysqli->error;
												}

                $mysqli->close();
  }

?>
<!DOCTYPE html>
<meta name="authoring-tool" content="Adobe_Animate_CC">
<!-- write your code here -->
<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
<script src="VestimentaAvatar.js?1525395543432"></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
var usuario="<?php echo $Usuario?>";
function init() {
	//alert(usuario);
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("CBF65291F1453B498591E6CEEB144335");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.VestimentaAvatar();
	stage = new lib.Stage(canvas);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS=1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih=window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
			if(isResp) {
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
					sRatio = lastS;
				}
				else if(!isScale) {
					if(iw<w || ih<h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if(scaleType==2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			canvas.width = w*pRatio*sRatio;
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			canvas.style.width = '1020px';
			canvas.style.height = '600px';
			stage.scaleX = pRatio*sRatio;
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
			stage.tickOnUpdate = false;
			stage.update();
			stage.tickOnUpdate = true;
		}
	}
	makeResponsive(true,'both',false,2);
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}</script>
<!-- write your code here -->
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Mouldifi - A fully responsive, HTML5 based admin theme">
<meta name="keywords" content="Responsive, HTML5, admin theme, business, professional, Mouldifi, web design, CSS3">
<title>EEAcad | Práctica</title>
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
		  <div class="site-logo"><a href="index.html"><img src="images/logo.jpg" alt="Mouldifi" title="Mouldifi"></a></div>
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
          echo '<li class="has-sub"><a href="index.html"><i class="icon-gauge"></i><span class="title">Dashboard</span></a>';
    			echo 	   '<ul class="nav collapse">';
    			echo         '<li><a href="index.html"><span class="title">Misc.</span></a></li>';
    			echo	    '</ul>';
    			echo  '</li>';
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
      <?php
        if($_SESSION["profile"] === "Estudiante"){
          echo '<li ><a href="test.php"><i class="icon-pencil"></i><span class="title">Evaluación</span></a>';
          echo '<li class="active"><a href="practice.php"><i class=" icon-graduation-cap"></i><span class="title">Práctica</span></a>';
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
          <li class="profile-info dropdown"><a data-toggle="dropdown" class="dropdown-toggle" href="#" aria-expanded="false"> <?php echo  $_SESSION["username"] ?> <span class="caret"></span></a>

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
    </script>
	<center>
    <div id="startDiv" style="padding-top:150px;">
	 	<h2>Resumen de la práctica</h2>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>Número de Paso</th>
        <th># Errores</th>
      </tr>
      </thead>
      <tr>
        <td>1</td>
        <td><?php echo "$f1" ?></td>
      </tr>
      <tr>
        <td>2</td>
        <td><?php echo "$f2" ?></td>
      </tr>
      <tr>
        <td>3</td>
        <td><?php echo "$f3" ?></td>
      </tr>
      <tr>
        <td>4</td>
        <td><?php echo "$f4" ?></td>
      </tr>
      <tr>
        <td>5</td>
        <td><?php echo "$f5" ?></td>
			</tr>
			<tr>
        <td>6</td>
        <td><?php echo "$f6" ?></td>
      </tr>
      <tr>
        <td>7</td>
        <td><?php echo "$f7" ?></td>
      </tr>
      <tr>
        <td>8</td>
        <td><?php echo "$f8" ?></td>
      </tr>
      <tr>
        <td>9</td>
        <td><?php echo "$f9" ?></td>
      </tr>
      <tr>
        <td>10</td>
        <td><?php echo "$f10" ?></td>
			</tr>
			<tr>
        <td>11</td>
        <td><?php echo "$f11" ?></td>
      </tr>
      <tr>
        <td>12</td>
        <td><?php echo "$f12" ?></td>
      </tr>
      <tr>
        <td>13</td>
        <td><?php echo "$f13" ?></td>
      </tr>
      <tr>
        <td>14</td>
        <td><?php echo "$f14" ?></td>
      </tr>
      <tr>
        <td>15</td>
        <td><?php echo "$f15" ?></td>
			</tr>
			<tr>
        <td>16</td>
        <td><?php echo "$f16" ?></td>
      </tr>
      <tr>
        <td>17</td>
        <td><?php echo "$f17" ?></td>
      </tr>
      <tr>
        <td>18</td>
        <td><?php echo "$f18" ?></td>
      </tr>
      <tr>
        <td>19</td>
        <td><?php echo "$f19" ?></td>
      </tr>
      <tr>
        <td>20</td>
        <td><?php echo "$f20" ?></td>
      </tr>

    </table>


    </div>
  </center>
	<div id="practiceDiv" style="width:600px;weight:600px;display:none;">
		<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:1920px; height:1080px">

			<canvas id="canvas" width="1920" height="1080" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
			<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:1920px; height:1080px; position: absolute; left: 0px; top: 0px; display: block;">
			</div>
		</div>
	</div>


<script>

	function showDiv() {
		document.getElementById('practiceDiv').style.display = "block";
		document.getElementById('startDiv').style.display="none";

    }
</script>
</body>

</html>
