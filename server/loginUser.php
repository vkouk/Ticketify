<?php
session_start();

include_once "../config/database.php";
include_once "./login.php";

$error = array();

$database = new Database();
$db = $database->getConnection();
$user = new Login($db);

if ($user->is_loggedin() != "") {
    $user->redirect('./');
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $uname = $_POST['name'];
    $upass = $_POST['pswd'];

    if ($user->login($uname, $upass)) {
        $user->redirect('./');
    }
} else {
    $error = "Wrong details";
}
?>