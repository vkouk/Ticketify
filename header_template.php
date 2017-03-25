<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Ticketify - Online Purchasing App</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<header>
		<nav class="nav navbar navbar-default" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavBar">
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
	      			</button>
	      			<a href="#"><p class="ticketify-brand">Ticketify</p></a>
				</div>
			</div> <!-- container -->
			<div class="collapse navbar-collapse" id="myNavBar">
				<ul class="nav navbar nav-pills menu nav-center">
					<li><a href="#">Home</a>
					<li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
				</ul>
			</div>
		</nav> <!-- nav -->
    </header> <!-- header -->

    <div class="main">
        <div class="page">
            <div class="container-fluid">
                <?php echo "<div id='ticketappinterface'></div>"; ?>
            </div>
        </div>
    </div>
    <a href="#" id="back-to-top" title="Back to top">&uarr;</a>