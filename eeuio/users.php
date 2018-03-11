<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Mouldifi - A fully responsive, HTML5 based admin theme">
<meta name="keywords" content="Responsive, HTML5, admin theme, business, professional, Mouldifi, web design, CSS3">
<title>EEUIO | Usuarios</title>
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


<!--Load JQuery-->
<script src="js/jquery.min.js"></script>

<script>
$(document).ready(function(){
  $("#filterusers").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tableusers tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>

</head>
<body>

<!-- Page container -->
<div class="page-container">

  <!-- Page Sidebar -->
  <div class="page-sidebar">

  		<!-- Site header  -->
		<header class="site-header">
		  <div class="site-logo"><a href="index.html"><img src="images/logo.jpg" alt="EEUIO" title="EEUIO"></a></div>
		  <div class="sidebar-collapse hidden-xs"><a class="sidebar-collapse-icon" href="#"><i class="icon-menu"></i></a></div>
		  <div class="sidebar-mobile-menu visible-xs"><a data-target="#side-nav" data-toggle="collapse" class="mobile-menu-icon" href="#"><i class="icon-menu"></i></a></div>
		</header>
		<!-- /site header -->

		<!-- Main navigation -->
		<ul id="side-nav" class="main-menu navbar-collapse collapse">
			<li class="has-sub"><a href="index.html"><i class="icon-gauge"></i><span class="title">Dashboard</span></a>
				<ul class="nav collapse">
					<li><a href="index.html"><span class="title">Misc.</span></a></li>
					<li><a href="ecommerce-dashboard.html"><span class="title">E-Commerce</span></a></li>
					<li><a href="news-dashboard.html"><span class="title">News Portal</span></a></li>
				</ul>
			</li>
      <li class="active"><a href="users.php"><i class="icon-users"></i><span class="title">Usuarios</span></a>
			<li class="has-sub"><a href="collapsed-sidebar.html"><i class="icon-layout"></i><span class="title">Layouts</span></a>
				<ul class="nav collapse">
					<li><a href="collapsed-sidebar.html"><span class="title">Collapsed Sidebar</span></a></li>
					<li><a href="fixed-sidebar.html"><span class="title">Fixed Sidebar</span></a></li>
				</ul>
			</li>
			<li class="has-sub"><a href="panels.html"><i class="icon-newspaper"></i><span class="title">UI Elements</span></a>
				<ul class="nav collapse">
					<li><a href="panels.html"><span class="title">Panels</span></a></li>
					<li><a href="buttons.html"><span class="title">Buttons</span></a></li>
					<li><a href="typography.html"><span class="title">Typography</span></a></li>
					<li><a href="tabs-accordions.html"><span class="title">Tabs &amp; Accordions</span></a></li>
					<li><a href="tooltips-popovers.html"><span class="title">Tooltips &amp; Popovers</span></a></li>
					<li><a href="navbars.html"><span class="title">Navbars</span></a></li>
					<li><a href="breadcrumbs.html"><span class="title">Breadcrumbs</span></a></li>
					<li><a href="badges-label.html"><span class="title">Badges &amp; Labels</span></a></li>
					<li><a href="progress-bars.html"><span class="title">Progress Bars</span></a></li>
					<li><a href="modals.html"><span class="title">Modals</span></a></li>
					<li><a href="alerts.html"><span class="title">Alerts</span></a></li>
					<li><a href="pagination.html"><span class="title">Pagination</span></a></li>
					<li><a href="video.html"><span class="title">Video</span></a></li>
				</ul>
			</li>
			<li class="has-sub"><a href="basic-tables.html"><i class="icon-window"></i><span class="title">Tables</span></a>
				<ul class="nav collapse">
					<li><a href="basic-tables.html"><span class="title">Basic Tables</span></a></li>
					<li><a href="data-tables.html"><span class="title">Data Tables</span></a></li>
				</ul>
			</li>
			<li class="has-sub"><a href="form-basic.html"><i class="icon-doc-text"></i><span class="title">Forms</span></a>
				<ul class="nav collapse">
					<li><a href="form-basic.html"><span class="title">Basic Form</span></a></li>
					<li><a href="form-advanced.html"><span class="title">Advanced Plugins</span></a></li>
					<li><a href="form-wizard.html"><span class="title">Form Wizard</span></a></li>
					<li><a href="file-upload.html"><span class="title">File upload</span></a></li>
					<li><a href="editors.html"><span class="title">Editors</span></a></li>
				</ul>
			</li>
			<li class="has-sub"><a href="graph-flot.html"><i class="icon-chart-bar"></i><span class="title">Graphs</span></a>
				<ul class="nav collapse">
					<li><a href="graph-flot.html"><span class="title">Flot Charts</span></a></li>
					<li><a href="graph-morris.html"><span class="title">Morris Charts</span></a></li>
					<li><a href="graph-peity.html"><span class="title">Peity Charts</span></a></li>
					<li><a href="graph-sparkline.html"><span class="title">Sparkline Charts</span></a></li>
					<li><a href="graph-chartjs.html"><span class="title">ChartsJs</span></a></li>
					<li><a href="graph-chartist.html"><span class="title">Chartist</span></a></li>
					<li><a href="graph-c3.html"><span class="title">C3 Charts</span></a></li>
				</ul>
			</li>
			<li class="has-sub"><a href="mail-inbox.html"><i class="icon-mail"></i><span class="title">Mailbox</span></a>
				<ul class="nav collapse">
					<li><a href="mail-inbox.html"><span class="title">Inbox</span></a></li>
					<li><a href="mail-compose.html"><span class="title">Compose Mail</span></a></li>
					<li><a href="mail-read.html"><span class="title">View Mail</span></a></li>
				</ul>
			</li>
			<li><a href="maps-vector.html"><i class="icon-location"></i><span class="title">Vector Map</span> <span class="label label-secondary pull-right">NEW</span></a></li>
			<li class="has-sub"><a href="login.html"><i class="icon-google-circles"></i><span class="title">Various Screens</span></a>
				<ul class="nav collapse">
					<li><a href="login.html"><span class="title">Login</span></a></li>
					<li><a href="register.html"><span class="title">Register</span></a></li>
					<li><a href="forgot-password.html"><span class="title">Forgot password</span></a></li>
					<li><a href="lockscreen.html"><span class="title">Lockscreen</span></a></li>
					<li><a href="error-404.html"><span class="title">404 Page</span></a></li>
					<li><a href="blank-page.html"><span class="title">Blank Page</span></a></li>
					<li><a href="comments.html"><span class="title">Comments</span></a></li>
				</ul>
			</li>
			<li class="has-sub"><a href="blog.html"><i class="icon-docs"></i><span class="title">Extra Pages</span></a>
				<ul class="nav">
					<li><a href="blog.html"><span class="title">Blog</span></a></li>
					<li><a href="blog-detail.html"><span class="title">Blog Detail</span></a></li>
					<li><a href="timeline.html"><span class="title">Timeline</span></a></li>
				</ul>
			</li>
			<li class="has-sub"><a href="icons-entypo.html"><i class="icon-thumbs-up"></i><span class="title">Icons</span></a>
				<ul class="nav collapse">
					<li><a href="icons-entypo.html"><span class="title">Entypo</span></a></li>
					<li><a href="icons-fontawesome.html"><span class="title">Font Awesome</span></a></li>
					<li><a href="icons-glyphicons.html"><span class="title">Glyph Icons</span></a></li>
				</ul>
			</li>
			<li class="has-sub active"><a href="simple-view.html"><i class="icon-list"></i><span class="title">List Views</span></a>
				<ul class="nav">
					<li><a href="simple-view.html"><span class="title">Simple View</span></a></li>
					<li><a href="cards-view.html"><span class="title">Cards View</span></a></li>
					<li class="active"><a href="strip-view.html"><span class="title">Strip View</span></a></li>
					<li><a href="table-view.html"><span class="title">Table View</span></a></li>
				</ul>
			</li>
			<li class="has-sub"><a href="short-view.html"><i class="icon-popup"></i><span class="title">Grid Views</span></a>
				<ul class="nav collapse">
					<li><a href="short-view.html"><span class="title">Short View</span></a></li>
					<li><a href="detailed-view.html"><span class="title">Detailed View</span></a></li>
					<li><a href="detailed-view-2.html"><span class="title">Detailed Action View</span></a></li>
				</ul>
			</li>
			<li class="has-sub">
				<a href="#/"><i class="icon-flow-tree"></i><span class="title">Menu Levels</span></a>
				<ul class="nav collapse">
					<li><a href="#/"><span class="title">Menu Level 1.1</span></a></li>
					<li><a href="#/"><span class="title">Menu Level 1.2</span></a></li>
					<li class="has-sub">
						<a href="#/"><span class="title">Menu Level 1.3</span></a>
						<ul class="nav collapse">
							<li><a href="#/"><span class="title">Menu Level 2.1</span></a></li>
							<li class="has-sub">
								<a href="#/"><span class="title">Menu Level 2.2</span></a>
								<ul class="nav collapse">
									<li class="has-sub">
										<a href="#/"><span class="title">Menu Level 3.1</span></a>
										<ul class="nav collapse">
											<li><a href="#/"><span class="title">Menu Level 4.1</span></a></li>
										</ul>
									</li>
									<li><a href="#/"><span class="title">Menu Level 3.2</span></a></li>
								</ul>
							</li>
							<li><a href="#/"><span class="title">Menu Level 2.3</span></a></li>
						</ul>
					</li>
				</ul>
			</li>
      <li class="has-sub"><a href="panels.html"><i class="icon-newspaper"></i><span class="title">Evaluaciones</span></a>
				<ul class="nav collapse">
					<li><a href="evaluation.php"><span class="title">Resultados de Evaluaciones</span></a></li>
				</ul>
			</li>
		</ul>
		<!-- /main navigation -->
  </div>
  <!-- /page sidebar -->

  <!-- Main container -->
  <div class="main-container gray-bg">

	<!-- Main header -->
	<div class="main-header row">
      <div class="col-sm-6 col-xs-7">

		<!-- User info -->
        <ul class="user-info pull-left">
          <li class="profile-info dropdown"><a data-toggle="dropdown" class="dropdown-toggle" href="#" aria-expanded="false"> <img width="44" class="img-circle avatar" alt="" src="images/man-3.jpg">John Henderson <span class="caret"></span></a>

			<!-- User action menu -->
            <ul class="dropdown-menu">

              <li><a href="#/"><i class="icon-user"></i>My profile</a></li>
              <li><a href="#/"><i class="icon-mail"></i>Messages</a></li>
              <li><a href="#"><i class="icon-clipboard"></i>Tasks</a></li>
			  <li class="divider"></li>
			  <li><a href="#"><i class="icon-cog"></i>Account settings</a></li>
			  <li><a href="#"><i class="icon-logout"></i>Logout</a></li>
            </ul>
			<!-- /user action menu -->

          </li>
        </ul>
		<!-- /user info -->

      </div>

      <div class="col-sm-6 col-xs-5">
	  	<div class="pull-right">
			<!-- User alerts -->
			<ul class="user-info pull-left">

			  <!-- Notifications -->
			  <li class="notifications dropdown">
				<a data-close-others="true" data-hover="dropdown" data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="icon-attention"></i><span class="badge badge-info">6</span></a>
				<ul class="dropdown-menu pull-right">
					<li class="first">
						<div class="small"><a class="pull-right danger" href="#">Mark all Read</a> You have <strong>3</strong> new notifications.</div>
					</li>
					<li>
						<ul class="dropdown-list">
							<li class="unread notification-success"><a href="#"><i class="icon-user-add pull-right"></i><span class="block-line strong">New user registered</span><span class="block-line small">30 seconds ago</span></a></li>
							<li class="unread notification-secondary"><a href="#"><i class="icon-heart pull-right"></i><span class="block-line strong">Someone special liked this</span><span class="block-line small">60 seconds ago</span></a></li>
							<li class="unread notification-primary"><a href="#"><i class="icon-user pull-right"></i><span class="block-line strong">Privacy settings have been changed</span><span class="block-line small">2 hours ago</span></a></li>
							<li class="notification-danger"><a href="#"><i class="icon-cancel-circled pull-right"></i><span class="block-line strong">Someone special liked this</span><span class="block-line small">60 seconds ago</span></a></li>
							<li class="notification-info"><a href="#"><i class="icon-info pull-right"></i><span class="block-line strong">Someone special liked this</span><span class="block-line small">60 seconds ago</span></a></li>
							<li class="notification-warning"><a href="#"><i class="icon-rss pull-right"></i><span class="block-line strong">Someone special liked this</span><span class="block-line small">60 seconds ago</span></a></li>
						</ul>
					</li>
					<li class="external-last"> <a href="#" class="danger">View all notifications</a> </li>
				</ul>
			  </li>
			  <!-- /notifications -->

			  <!-- Messages -->
			  <li class="notifications dropdown">
				<a data-close-others="true" data-hover="dropdown" data-toggle="dropdown" class="dropdown-toggle" href="#"><i class="icon-mail"></i><span class="badge badge-secondary">12</span></a>
				<ul class="dropdown-menu pull-right">
					<li class="first">
						<div class="dropdown-content-header"><i class="fa fa-pencil-square-o pull-right"></i> Messages</div>
					</li>
					<li>
						<ul class="media-list">
							<li class="media">
								<div class="media-left"><img alt="" class="img-circle img-sm" src="images/domnic-brown.png"></div>
								<div class="media-body">
									<a class="media-heading" href="#">
										<span class="text-semibold">Domnic Brown</span>
										<span class="media-annotation pull-right">Tue</span>
									</a>
									<span class="text-muted">Your product sounds interesting I would love to check this ne...</span>
								</div>
							</li>
							<li class="media">
								<div class="media-left"><img alt="" class="img-circle img-sm" src="images/john-smith.png"></div>
								<div class="media-body">
									<a class="media-heading" href="#">
										<span class="text-semibold">John Smith</span>
										<span class="media-annotation pull-right">12:30</span>
									</a>
									<span class="text-muted">Thank you for posting such a wonderful content. The writing was outstanding...</span>
								</div>
							</li>
							<li class="media">
								<div class="media-left"><img alt="" class="img-circle img-sm" src="images/stella-johnson.png"></div>
								<div class="media-body">
									<a class="media-heading" href="#">
										<span class="text-semibold">Stella Johnson</span>
										<span class="media-annotation pull-right">2 days ago</span>
									</a>
									<span class="text-muted">Thank you for trusting us to be your source for top quality sporting goods...</span>
								</div>
							</li>
							<li class="media">
								<div class="media-left"><img alt="" class="img-circle img-sm" src="images/alex-dolgove.png"></div>
								<div class="media-body">
									<a class="media-heading" href="#">
										<span class="text-semibold">Alex Dolgove</span>
										<span class="media-annotation pull-right">10:45</span>
									</a>
									<span class="text-muted">After our Friday meeting I was thinking about our business relationship and how fortunate...</span>
								</div>
							</li>
							<li class="media">
								<div class="media-left"><img alt="" class="img-circle img-sm" src="images/domnic-brown.png"></div>
								<div class="media-body">
									<a class="media-heading" href="#">
										<span class="text-semibold">Domnic Brown</span>
										<span class="media-annotation pull-right">4:00</span>
									</a>
									<span class="text-muted">I would like to take this opportunity to thank you for your cooperation in recently completing...</span>
								</div>
							</li>
						</ul>
					</li>
					<li class="external-last"> <a class="danger" href="#">All Messages</a> </li>
				</ul>
			  </li>
			  <!-- /messages -->

			</ul>
			<!-- /user alerts -->

		</div>
      </div>
    </div>
	<!-- /main header -->

	<!-- Secondary header -->
	<div class="header-secondary row gray-bg">
		<div class="col-lg-12">
			<div class="page-heading clearfix">
				<h1 class="page-title pull-left">Usuarios</h1><button type="button" class="btn btn-primary btn-sm btn-add" data-toggle="modal" data-target="#modal-1">NUEVO</button>
			</div>
			<!-- Breadcrumb -->
			<ol class="breadcrumb breadcrumb-2">
				<li><a href="index.html"><i class="fa fa-home"></i>Home</a></li>
				<li class="active"><strong>Users</strong></li>
			</ol>
			<div class="tab-wrapper clearfix">
        <!--
        <ul class="nav nav-pills nav-pills-default pull-left">
				  <li role="presentation"><a href="simple-view.html">STYLE 1</a></li>
				  <li role="presentation"><a href="cards-view.html">STYLE 2</a></li>
				  <li class="active" role="presentation"><a href="strip-view.html">STYLE 3</a></li>
				  <li role="presentation"><a href="table-view.html">STYLE 4</a></li>
				</ul>
        -->
				<ul class="nav nav-pills nav-icons pull-right">
				  <!--<li role="presentation"><a href="#"><i class="icon-layout"></i></a></li>-->
				  <!--<li class="active" role="presentation"><a href="#"><i class="icon-list"></i></a></li>-->
				  <li role="presentation"><a href="#" class="toggle-filter" data-block-id="filter-box"><i class="fa fa-filter"></i></a></li>
				</ul>
			</div>

		</div>
	</div>
	<!-- /secondary header -->

	<!-- Filter wrapper -->

  <div class="row filter-wrapper visible-box" id="filter-box">
		<div class="col-lg-12">
			<div class="filter-header">
				<button aria-label="Close" class="close toggle-filter" type="button" data-block-id="filter-box"><i class="icon-cancel"></i></button>
				<h3 class="title">Filtro de Usuarios</h3>
			</div>
			<form class="form-inline">
				<div class="form-group">
					<label class="form-label">Buscar</label>
					<input type="text" id="filterusers" placeholder="Búsqueda por ID, nombre, cédula o correo." class="form-control" size="100px">
				</div>
				<!--<div class="form-group">
					<label class="form-label">Member Since</label>
					<select class="select2 form-control">
						<option>2008</option>
						<option>2009</option>
						<option>2015</option>
					</select>
				</div>
				<div class="form-group">
					<label class="form-label">User Roles</label>
					<div class="checkbox-group">
						<div class="checkbox checkbox-replace">
							<input type="checkbox" id="admin">
							<label for="admin">Admin</label>
						</div>
						<div class="checkbox checkbox-replace">
							<input type="checkbox" id="operator">
							<label for="operator">Operator</label>
						</div>
						<div class="checkbox checkbox-replace">
							<input type="checkbox" id="customer">
							<label for="customer">Customer</label>
						</div>
					</div>
				</div>
				<div class="form-group filter-btn">
					<button class="btn btn-default">Filter</button>
				</div>-->
			</form>
		</div>
	</div>

	<!-- /filter wrapper -->

	<!-- Main content -->
	<div class="main-content">
		<!--
    <div class="row datatable-wrapper form-inline">
			<div class="col-lg-12">
				<div class="data-col-first clearfix">
					<div class="col-checkbox col-space">
						<div class="form-checkbox">
							<input type="checkbox" value="" name=""> <span class="check"><i class="fa fa-check"></i></span>
						</div>
					</div>
					<div class="col-selectbox">
						<select class="form-control input-sm">
							<option>Bulk Action</option>
							<option>Bulk Action</option>
							<option>Bulk Action</option>
						</select>&nbsp;
						<button class="btn btn-primary btn-sm">Go</button>
					</div>
				</div>
				<div class="data-col-last clearfix">
					<div class="col-selectbox">
						<select class="form-control input-sm">
							<option>Sort By</option>
							<option>Sort By</option>
							<option>Sort By</option>
						</select>
					</div>
					<div class="col-selectbox">
						<select class="form-control input-sm">
							<option>25 Records</option>
							<option>10 Records</option>
							<option>50 Records</option>
						</select>
					</div>
				</div>
			</div>
		</div>-->


		<div class="animatedParent animateOnce z-index-50">
			<div class="table-responsive indent-row animated fadeInUp">
        <!--<input type="text" id="filterusers" placeholder="Separate by commas...">-->
        <table class="table table-users table-unbordered table-hover table-separate">
					<tbody id="tableusers">
        <?php
        include 'dbconnection.php';
        $res = $mysqli->query($select_users);


          while($row = $res->fetch_object()){
            echo '<tr>';
						//echo '<td class="size-40"><div class="form-checkbox"><input type="checkbox" name="name1" value="value1"> <span class="check"><i class="fa fa-check"></i></span></div></td>';
            if($row->USU_ROL == 'Estudiante'){
              echo '<td class="size-80"><img class="avatar img-circle" src="images/student.jpg" alt="" title=""></td>';
            }else{
              echo '<td class="size-80"><img class="avatar img-circle" src="images/admin.png" alt="" title=""></td>';
            }
            echo '<td>'.$row->USU_CODIGO.'</td>';
            echo '<td><strong>'.$row->USU_NOMBRES.' '.$row->USU_APELLIDOS.'</strong></td>';
            echo '<td>'.$row->USU_CEDULA.'</td>';
            echo '<td>'.$row->USU_EMAIL.'</td>';
            echo '<td class="text-center"><span class="badge badge-bordered">'.$row->USU_ROL.'</span></td>';
            echo '<td class="text-center size-80">
              <div class="dropdown">
                <a href="#/" data-toggle="dropdown" class="more-link"><i class="icon-dot-3 ellipsis-icon"></i></a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="">Resetear contraseña</a></li>
                  <li><a href="">Editar datos</a></li>
                  <li><a href="deleteuser.php?ci='.$row->USU_CEDULA.'">Eliminar usuario</a></li>
                </ul>
              </div>
            </td>
            </tr>';
          }

        ?>
          </tbody>
        </table>
			</div>
		</div>

		<!-- Footer -->
		<footer class="animatedParent animateOnce z-index-10">
			<div class="footer-main animated fadeInUp slow">&copy; 2016 <strong>Mouldifi</strong> Admin Theme by <a target="_blank" href="#/">G-axon</a> </div>
		</footer>
		<!-- /footer -->

	  </div>
	  <!-- /main content -->

  </div>
  <!-- /main container -->

</div>
<!-- /page container -->

<!--Basic Modal-->
<div id="modal-1" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Nuevo Usuario</h4>
      </div>
      <div class="modal-body">
        <form id="newuser" method="post" action="newuser.php">
           <div class="form-group">
           <label for="emailaddress">Email</label>
           <input type="email" class="form-control" id="emailaddress" name="emailaddress" placeholder="Email">
           </div>
           <div class="form-group">
           <label for="password">Password</label>
           <input type="password" class="form-control" id="password" name="password" placeholder="Contraseña">
           </div>
           <div class="form-group">
           <label for="firstname">Nombres</label>
           <input type="text" class="form-control" id="firstname" name="firstname" placeholder="Nombres">
           </div>
           <div class="form-group">
           <label for="lastname">Apellidos</label>
           <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Apellidos">
           </div>
           <div class="form-group">
           <label for="ci">Cédula</label>
           <input type="text" maxlength="10" class="form-control" id="ci" name="ci" placeholder="Cédula de Identidad">
           </div>

       </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" form="newuser" class="btn btn-primary">Guardar</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<!--End Basic Modal-->


<!--Load JQuery-->
<script src="js/jquery.min.js"></script>
<!-- Load CSS3 Animate It Plugin JS -->
<script src="js/plugins/css3-animate-it-plugin/css3-animate-it.js"></script>
<script src="js/bootstrap.min.js"></script>
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
