<?php
session_start();

include_once "../config/database.php";

$database = new Database();
$db = $database->getConnection();
$user = new Register($db);



?>