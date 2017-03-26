<?php
session_start();

include_once "../config/database.php";
include_once "./login.php";

$error = array();

$database = new Database();
$db = $database->getConnection();
$user = new Login($db);

if ($user->is_loggedin() != "") {
    $user->redirect('./index.php');
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $uname = $_POST['username'];
    $umail = $_POST['email'];
    $upass = $_POST['pswd'];

    if ($user->login($uname, $umail, $upass)) {
        $user->redirect('./index.php');
    }
} else {
    $error = "Wrong details";
}
?>