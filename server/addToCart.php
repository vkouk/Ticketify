<?php
if ($_POST)
{
    include_once '../config/database.php';
    include_once './cart.php';

    $database = new Database();
    $db = $database->getConnection();
    $cart = new Cart($db);

    $cart->t_name = $_POST['name'];
    $cart->t_description = $_POST['description'];
    $cart->id = $_POST['id'];
    $cart->t_category_id = $_POST['category_id'];

    echo $cart->addToCart() ? "true" : "false";
}
?>