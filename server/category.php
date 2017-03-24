<?php
class Category {
    private $con, $table_n = "tickets";
    public $id, $ticket_name;

    public function __construct($db) {
        $this->con = $db;
    }

    public function displayTickets() {
        $q = "SELECT id, name FROM tickets ORDER BY name ASC";

        $statement = $this->con->prepare($q);
        $statement->execute();

        $tickets = $statement->fetchAll(PDO::FETCH_ASSOC);

        return json_encode($tickets);
    }
}
?>