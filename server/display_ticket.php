<?php
include_once "../config/database.php";
include_once "../server/tickets.php";

$database = new Database();
$db = $database->getConnection();
$ticket = new Tickets($db);

$result = $ticket->displayTickets();

echo $results;
?>