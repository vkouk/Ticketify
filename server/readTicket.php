<?php
include_once '../config/database.php';
include_once './ticket.php';

$database = new Database();
$db = $database->getConnection();
$ticket = new Ticket($db);

$ticket->id = $_POST['ticket_id'];
$results = $ticket->readTicket();

echo $results;
?>