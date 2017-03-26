<?php
include_once "../config/database.php";
include_once "./ticket_category.php";

$database = new Database();
$db = $database->getConnection();
$ticket_category = new TicketCategory($db);

$result = $ticket_category->displayTicketCategory();
echo $result;
?>