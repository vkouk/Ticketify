<?php
if($_POST)
{
    include_once '../config/database.php';
    include_once './ticket.php';

    $database = new Database();
    $db = $database->getConnection();
    $ticket = new Ticket($db);

    $ticket->name = $_POST['name'];
    $ticket->price = $_POST['price'];
    $ticket->description = $_POST['description'];
    $ticket->category_id = $_POST['category_id'];

    echo $ticket->create() ? "true" : "false";
}
?>