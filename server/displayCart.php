<?php
include_once '../config/database.php';
include_once './cart.php';

$database = new Database();
$db = $database->getConnection();
$cart = new Cart($db);

$results = $cart->displayCart();

echo $results;
?>