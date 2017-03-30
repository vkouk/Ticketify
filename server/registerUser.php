<?php
session_start();

if ($_POST)
{
    include_once '../config/database.php';
    include_once './user.php';

    $error = array();

    $database = new Database();
    $db = $database->getConnection();
    $user = new User($db);

    $user->name = $_POST['name'];
    $user->email = $_POST['email'];
    $user->pswd = $_POST['pswd'];

    echo $user->register() ? "true" : "false";
    $user->redirect("./");
}
?>