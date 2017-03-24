<?php
include_once "../config/database.php";
include_once "../config/category.php";

$database = new Database();
$db = $database->getConnection();
$cat = new Category($db);

$result = $category->displayTickets();

echo $results;
?>