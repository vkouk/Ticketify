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
    $upass = $_POST['pswd'];

    if ($user->login($uname, $upass)) {
        $user->redirect('./index.php');
    }
} else {
    $error = "Wrong details";
}
?>