<?php
include_once '../config/database.php';
include_once './ticket.php';

$database = new Database();
$db = $database->getConnection();
$ticket = new Ticket($db);

$results = $ticket->readAll();

echo $results;
?>