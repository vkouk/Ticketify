<?php
include_once '../config/database.php';
include_once './cart.php';

$database = new Database();
$db = $database->getConnection();
$cart = new Cart($db);

$cart_tickets = $cart->addToCart();

echo $cart_tickets;
?>