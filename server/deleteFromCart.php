<?php
if($_POST)
{
    include_once '../config/database.php';
    include_once './cart.php';

    $database = new Database();
    $db = $database->getConnection();
    $cart_item = new Cart($db);

    $ins="";
    foreach($_POST['del_ids'] as $id){
        $ins.="{$id},";
    }

    $ins=trim($ins, ",");

    echo $cart_item->deleteFromCart($ins) ? "true" : "false";
}
?>