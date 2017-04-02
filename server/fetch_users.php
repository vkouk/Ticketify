<?php
include_once '../config/database.php';
include_once './user.php';

$database = new Database();
$db = $database->getConnection();
$user = new User($db);

$result = $user->fetchUsers();

echo $result;
?>