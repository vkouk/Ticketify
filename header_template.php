<?php
include_once "server/login.php";
include_once "config/database.php";
$database = new Database();
$db = $database->getConnection();
$user = new Login($db);

if (!$user->is_loggedin()) {
    $user->redirect('');
}

$user_id = $_SESSION['user_session'];
$stmt = $db->prepare("SELECT * FROM members WHERE id=:user_id");
$stmt->execute(array(":user_id"=>$user_id));
$userRow = $stmt->fetch(PDO::FETCH_ASSOC);
?>
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
    <?php echo "<div id='ticketappinterface'></div>"; ?>
    <script>
        var userOnline="<?php $userRow['name'] ?>";
    </script>
    <a href="#" id="back-to-top" title="Back to top">&uarr;</a>